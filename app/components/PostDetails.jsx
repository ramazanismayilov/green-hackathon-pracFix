"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import PostCard from "./PostCard";

function PostDetails() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  // Kullanıcı bilgilerini localStorage'dan al
  const userId = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
  const userName = typeof window !== "undefined" ? localStorage.getItem("userName") : "Anonim";
  const userLastName = typeof window !== "undefined" ? localStorage.getItem("userLastName") : "";

  useEffect(() => {
    const pathname = window.location.pathname;
    const id = pathname.split("/").pop();

    const fetchPost = async () => {
      try {
        const response = await axios.get(`https://pracfix-back.onrender.com/api/post/post/${id}`);
        setPost(response.data);
      } catch (error) {
        setError("Gönderi yüklenirken bir hata oluştu.");
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://pracfix-back.onrender.com/api/review/${id}`);
        setReviews(response.data.reviews);
      } catch (error) {
        console.error("Yorumlar alınırken hata:", error);
      }
    };

    const fetchRelatedPosts = async () => {
      try {
        const response = await axios.get("https://pracfix-back.onrender.com/api/post");
        setRelatedPosts(response.data);
      } catch (error) {
        console.error("İlgili gönderiler alınırken hata:", error);
      }
    };

    fetchPost();
    fetchReviews();
    fetchRelatedPosts();
  }, []);

  const handleReviewSubmit = async () => {
    if (!userId) {
      setOpenDialog(true);
      return;
    }

    const pathname = window.location.pathname;
    const postId = pathname.split("/").pop();

    try {
      const response = await axios.post(`https://pracfix-back.onrender.com/api/review/${postId}`, {
        rating,
        comment,
        userId,
        userName,
        userLastName,
      });

      setReviews((prevReviews) => [...prevReviews, response.data.review]);
      setRating(0);
      setComment("");
    } catch (error) {
      console.error("Yorum eklenirken hata:", error);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  if (loading)
    return (
      <div className="flex items-center min-h-[200px] justify-center">
        <CircularProgress sx={{ color: "green" }} />
      </div>
    );

  if (error) return <div>{error}</div>;

  return (
    <div className="flex flex-col lg:flex-row gap-8 mt-10 p-5 bg-gray-50">
      <div className="flex-1">
        <img
          className="w-full rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
          src={`https://pracfix-back.onrender.com/${post.blogPhoto}`}
          alt={post?.title}
        />
        <div className="flex flex-col gap-5 mt-4">
          <h1 className="text-3xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200">
            {post?.title}
          </h1>
          <p className="text-gray-700 leading-relaxed">{post?.content}</p>
          <p className="text-gray-600">{post?.description}</p>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-gray-900">
              İstifadəçi Rəyləri
            </h2>
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200"
              >
                <div className="flex flex-col">
                  <Rating value={review.rating} readOnly />
                  <small className="text-gray-600 font-semibold">
                    {review.userName || "Anonim"} {review.userLastName || ""}
                  </small>
                </div>
                <p className="text-gray-800">{review.comment}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <h2 className="text-lg font-semibold text-gray-900">Rəy Bildir</h2>
            <TextField
              label="Yorumunuzu yazın..."
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
            />
            <div className="flex items-center gap-3">
              <Rating
                name="rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
              />
              <Button
                variant="contained"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                }}
                onClick={handleReviewSubmit}
                className="shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                Yorum Ekle
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:w-1/3">
        <h2 className="text-2xl font-semibold text-gray-900">
          Digər postlar
        </h2>
        {relatedPosts.map((post) => (
          <PostCard
            key={post._id}
            date={post.createdAt}
            title={post.title}
            description={post.description}
            image={`https://pracfix-back.onrender.com/${post.blogPhoto}`}
            id={post._id}
          />
        ))}
      </div>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle className="text-lg font-bold">
          Kayıt Olmanız Gerek
        </DialogTitle>
        <DialogContent>
          <p className="text-gray-700">
            Yorum yapabilmek için lütfen kaydolun.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="secondary">
            Kapat
          </Button>
          <Button
            onClick={() => {
              window.location.href = "/register";
            }}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
            }}
          >
            Kayıt Ol
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PostDetails;
