"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook, CiTwitter } from "react-icons/ci";

function Footer() {
  return (
    <div className="w-full p-10 bg-green-800 text-white mt-9">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-[300px] mb-6 md:mb-0">
          <a href="/" className="text-4xl font-bold text-white">
          Pracfix
          </a>
          <p className="my-4 text-green-100">
          Ətraf mühitin qorunması üçün bir addım at! Texnologiya və yaradıcılıqla ekoloji problemləri həll edərək yaşıl bir gələcək yaratmağa töhfə ver.
          </p>
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-white">Follow Us!</h2>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-green-300 hover:text-green-100 text-2xl"><FaInstagram /></a>
              <a href="#" className="text-green-300 hover:text-green-100 text-2xl"><CiFacebook /></a>
              <a href="#" className="text-green-300 hover:text-green-100 text-2xl"><CiTwitter /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-green-200 gap-4 mb-6 md:mb-0">
        <h2 className="text-xl font-semibold text-white">Kəşf edin</h2>
          <a href="/" className="hover:text-green-100">Ana Səhifə</a>
          <a href="#" className="hover:text-green-100">Haqqımızda</a>
          <a href="/expert-profile" className="hover:text-green-100">Expertlər</a>
          <a href="#" className="hover:text-green-100">Bizimlə Əlaqə</a>
        </div>
        <div className="flex flex-col text-green-200 gap-4">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="text-green-100">Phone: <a href="tel:+994 99 808 6988" className="text-green-300 hover:text-green-100">+994 99 808 6988</a></p>
          <p className="text-green-100">Email: <a href="mailto:pracfixstudio@gmail.com" className="text-green-300 hover:text-green-100">pracfixstudio@gmail.com</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
