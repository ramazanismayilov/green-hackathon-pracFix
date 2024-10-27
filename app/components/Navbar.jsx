"use client";
import React, { useState, useEffect } from 'react';
import { MdLogin } from "react-icons/md";
import axios from 'axios'; // Axios kütüphanesini içe aktarın
import { AiOutlineLoading } from 'react-icons/ai';


function Navbar() {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true); // Yükleniyor durumu

  useEffect(() => {
    const id = localStorage.getItem("userId");
    setUserId(id);
    setLoading(false); // Yükleme tamamlandı
  }, []);

  const handleLogout = async () => {
          localStorage.clear(); // localStorage'daki tüm verileri temizle
        window.location.reload(); // Sayfayı yenile
        window.location.href = '/';
  };

  return (
    <div className='w-full py-5 flex items-center justify-between bg-red-500'>
      <a href="/" className='text-3xl font-bold text-red-500'>Pracfix</a>

      <div className='flex items-center justify-center gap-5'>
        <a href="/">Ana Səhifə</a>
        <a href="/about">Haqqımızda</a>
        <a href="/expert-profile">Expertlər</a>
        <a href="/contact">Bizimlə Əlaqə</a>

        {loading ? (
  <div className="flex items-center gap-2">
    <AiOutlineLoading className="animate-spin text-blue-600" />
    <p>Yüklənir...</p>
  </div>
) : userId ? (
  <button
    onClick={handleLogout}
    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
  >
    <MdLogin className="text-lg" />
    <span>Çıxış</span>
  </button>
) : (
  <a
    href="/login"
    className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200"
  >
    <MdLogin className="text-lg" />
    <span>Daxil ol</span>
  </a>
)}

      </div>
    </div>
  );
}

export default Navbar;