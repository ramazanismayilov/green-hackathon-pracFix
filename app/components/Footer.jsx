"use client";
import React from "react";
import { FaInstagram , FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full p-10 bg-[#106861] text-white mt-9">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-[300px] mb-6 md:mb-0">
          <a href="/" className="text-4xl font-bold text-white">
          Pracfix
          </a>
          <p className="my-4 text-gray-200">
          Ətraf mühitin qorunması üçün bir addım at! Texnologiya və yaradıcılıqla ekoloji problemləri həll edərək yaşıl bir gələcək yaratmağa töhfə ver.
          </p>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white">Follow Us!</h2>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/pracfix/" className="text-green-100 hover:text-white text-2xl hover:scale-110 duration-300"><FaInstagram /></a>
              <a href="https://www.facebook.com/profile.php?id=61566216962404&rdid=DEf0wwnKFUAEms7l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FGajzi1LSjibNQuX3%2F" className="text-green-100 hover:text-white text-2xl hover:scale-110 duration-300"><FaFacebook /></a>
              <a href="#" className="text-green-100 hover:text-white text-2xl hover:scale-110 duration-300"><FaTwitter /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-gray-200 gap-4 mb-6 md:mb-0">
        <h2 className="text-xl font-semibold text-white">Kəşf edin</h2>
          <a href="/" className="hover:text-green-100">Ana Səhifə</a>
          <a href="#" className="hover:text-green-100">Haqqımızda</a>
          <a href="/expert-profile" className="hover:text-green-100">Expertlər</a>
          <a href="#" className="hover:text-green-100">Bizimlə Əlaqə</a>
        </div>
        <div className="flex flex-col text-gray-200 gap-4">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="text-green-100">Phone: <a href="tel:+994 99 808 6988" className="text-green-300 hover:text-green-100">+994 99 808 6988</a></p>
          <p className="text-green-100">Email: <a href="mailto:pracfixstudio@gmail.com" className="text-green-300 hover:text-green-100">pracfixstudio@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
