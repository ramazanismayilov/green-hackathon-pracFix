import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col items-center gap-5 md:flex-row justify-between mb-10 py-5">
      <div className="text-left w-full md:w-[55%] flex flex-col gap-5">
        <p className="font-semibold text-white w-[180px] bg-[#106861] border rounded-full px-4 py-1 inline-block">
          Strategiya & Uğur
        </p>

        <h1 className="text-[50px] md:text-[68px] leading-[100%] font-bold text-black ">
          Aqrar Problemləri Üçün <span className="text-[#106861]">Etibarlı</span> Həllər.
        </h1>
        <p className="text-md text-gray-700 text-xl">
          Bu xidmətlər hər bir müştərinin xüsusi ehtiyaclarına uyğun olaraq
          dəyərli bilik və dəstək təqdim edərək aqrar sektorda uğur qazanmaq
          üçün nəzərdə tutulub.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="/contact"
            className="px-6 py-3 flex items-center gap-2 bg-gradient-to-r bg-[#106861] to-green-700 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <FaEnvelope />
            Bizimlə Əlaqə
          </a>
        </div>

        <div className="flex gap-4 mt-2">
          <a href="#" className="text-black text-2xl hover:text-[#106861] hover:scale-110 duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-black text-2xl hover:text-[#106861] hover:scale-110 duration-300">
            <FaFacebook />
          </a>
          <a href="#" className="text-black text-2xl hover:text-[#106861] hover:scale-110 duration-300">
            <FaTwitter />
          </a>
        </div>
      </div>
      <div className="relative md:w-1/3 h-96">
        <img
          src="/main_img.webp"
          alt="Günəbaxan yaxın planda"
          className="rounded-lg shadow-lg   w-full "
          style={{ top: "200px", left: "100px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
