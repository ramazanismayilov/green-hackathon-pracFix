"use client"
import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [blogPhoto, setBlogPhoto] = useState(null);
  const [message, setMessage] = useState('');
  
  // Tarayıcı ortamında userId'yi kontrol ediyoruz
  const userId = typeof window !== 'undefined' ? localStorage.getItem("userId") : null;

  const handleFileChange = (e) => {
    setBlogPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      setMessage('Kullanıcı kimliği bulunamadı. Lütfen giriş yapın.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('blogPhoto', blogPhoto);

    try {
      const response = await axios.post(`https://pracfix-back.onrender.com/api/post/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage(response.data.message);
      setTitle('');
      setDescription('');
      setBlogPhoto(null);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Gönderi oluşturulurken bir hata oluştu.';
      setMessage(errorMessage);
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Yeni Gönderi Oluştur
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Başlık
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Açıklama
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 h-28"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Blog Fotoğrafı
            </label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Gönderi Oluştur
          </button>
        </form>
        {message && (
          <p className="text-center text-sm text-green-500 mt-4">{message}</p>
        )}
      </div>
    </div>
  );
}

export default CreatePost;
