"use client";
import React, { useEffect, useState } from 'react';
import { MdLogin } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

function Navbar() {
  const [userId, setUserId] = useState(null); // userId durumu
  const [isClient, setIsClient] = useState(false); // Tarayıcıda mı kontrolü
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer vəziyyəti

  useEffect(() => {
    // Tarayıcıda olup olmadığımızı kontrol ediyoruz
    setIsClient(true);
    const storedUserId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
    setUserId(storedUserId); // userId'yi duruma atıyoruz
  }, []);

  const handleLogout = async () => {
    localStorage.clear(); // localStorage'daki tüm verileri temizle
    window.location.reload(); // Sayfayı yenile
    window.location.href = '/';
  };


  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };


  return (
    <div className='w-full flex items-center justify-between'>
      <div className='flex items-center justify-center gap-3' >
      <img src="/logo.jpg" className='w-[30px] md:w-[50px]' alt="" />
      <a href="/" className='text-3xl font-bold'>Pracfix</a>
      </div>

      <div className='flex items-center justify-center res-med  gap-5'>
        <a href="/">Ana Səhifə</a>
        <a href="/about">Haqqımızda</a>
        <a href="/expert-profile">Expertlər</a>
        <a href="/contact">Bizimlə Əlaqə</a>


      </div>
      <div className='flex items-center justify-center gap-3' >
      <HiMenuAlt3 className='text-3xl md:hidden cursor-pointer' onClick={toggleDrawer(true)}  />
      {isClient && userId ? ( 
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
     


      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
  <div
    className="w-64 p-4 bg-gray-100 h-full" // Arxa fon rəngi və boşluqlar
    role="presentation"
    onClick={toggleDrawer(false)}
    onKeyDown={toggleDrawer(false)}
  >
    <List className="space-y-2"> {/* List elementləri arasında boşluqlar */}
      <ListItem button component="a" href="/">
        <ListItemText primary="Ana Səhifə" className="text-gray-800 font-medium" />
      </ListItem>
      <ListItem button component="a" href="/about">
        <ListItemText primary="Haqqımızda" className="text-gray-800 font-medium" />
      </ListItem>
      <ListItem button component="a" href="/expert-profile">
        <ListItemText primary="Expertlər" className="text-gray-800 font-medium" />
      </ListItem>
      <ListItem button component="a" href="/contact">
        <ListItemText primary="Bizimlə Əlaqə" className="text-gray-800 font-medium" />
      </ListItem>

      <div className="mt-4"> {/* Əlavə boşluq üst hissədən */}
        {isClient && userId ? (
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            <MdLogin className="text-lg" />
            <span>Çıxış</span>
          </button>
        ) : (
          <a
            href="/login"
            className="w-full flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200"
          >
            <MdLogin className="text-lg" />
            <span>Daxil ol</span>
          </a>
        )}
      </div>
    </List>
  </div>
</Drawer>





    </div>
  );
}

export default Navbar;
