"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://pracfix-back.onrender.com/api/post'); // Tüm gönderileri al
        setPosts(response.data);
      } catch (error) {
        setError('Gönderiler yüklenirken bir hata oluştu.');
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <CircularProgress sx={{color : "green"}} />
    </div>;
  }

  if (error) {
    return <div className="text-center text-red-500 mt-4">{error}</div>;
  }

  console.log(posts);

  return (
    <div className="flex flex-col min-h-[400px] mt-10">
      <h2 className="text-4xl text-center font-bold mb-6">Bütün Postlar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow-md rounded-lg p-6 border border-green-500 transition-transform transform hover:scale-105 hover:shadow-lg">
            {post.blogPhoto && (
              <img
                src={`https://pracfix-back.onrender.com/${post.blogPhoto}`}
                alt={post.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-green-800 mb-2">{post.title}</h3>
            <p className="text-green-600 mb-4 text-sm">{post.description}</p>

            <a href={`/posts/${post._id}`} className="text-green-500 font-medium hover:underline">
              Daha Çox Gör
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllPosts;