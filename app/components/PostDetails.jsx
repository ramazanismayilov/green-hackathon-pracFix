"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

function PostDetails() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rating, setRating] = useState(0); 
  const [comment, setComment] = useState(""); 
  const [reviews, setReviews] = useState([]); 
  const [openDialog, setOpenDialog] = useState(false); // Popup durumunu kontrol etmek için

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

    fetchPost();
    fetchReviews();
  }, []);

  const handleReviewSubmit = async () => {
    const userId = localStorage.getItem("userId");
    
    if (!userId) {
      // Eğer userId yoksa popup göster
      setOpenDialog(true);
      return;
    }

    const pathname = window.location.pathname;
    const postId = pathname.split("/").pop();
    
    try {
      const response = await axios.post(`https://pracfix-back.onrender.com/api/review/${postId}`, {
        rating,
        comment,
        userId, // Kullanıcı ID'sini burada kullanıyoruz
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

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="flex gap-5 flex-wrap">
      <img className="w-1/2" src={`https://pracfix-back.onrender.com/${post.blogPhoto}`} alt="" />
      
      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-bold">{post?.title}</h1>
        <p>{post?.content}</p>
        <p>{post?.description}</p>

        <div className="review-section">
          <h2>Değerlendirme Yap</h2>
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />

          <div className="flex flex-col gap-5">
            <TextField
              label="Yorum"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            
            <Button variant="contained" color="primary" onClick={handleReviewSubmit}>
              Yorum Ekle
            </Button>
          </div>
        </div>

        <div className="reviews">
          <h2>Yorumlar</h2>
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <Rating value={review.rating} readOnly />
              <small>{review.user.firstName} {review.user.lastName}</small>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Kullanıcı kayıt olmadan yorum eklemeye çalıştığında gösterilecek popup */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Kayıt Olmanız Gerek</DialogTitle>
        <DialogContent>
          <p>Yorum yapabilmek için lütfen kaydolun.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Kapat
          </Button>
          <Button onClick={() => { window.location.href = '/register'; }} color="primary">
            Kayıt Ol
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PostDetails;
