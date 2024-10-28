"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import PostCard from "./PostCard"; // PostCard komponentini import edirik

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://pracfix-back.onrender.com/api/post"
        );
        setPosts(response.data);
      } catch (error) {
        setError("Gönderiler yüklenirken bir hata oluştu.");
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress sx={{ color: "green" }} />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-4">{error}</div>;
  }

  return (
    <div className="flex flex-col mt-10">
      <h2 className="text-4xl text-center font-bold mb-6">Bütün Postlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {posts.map((post) => (
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
    </div>
  );
}

export default AllPosts;
