import React from "react";
import { FaInstagram , FaFacebook , FaTwitter} from "react-icons/fa";

function Hero() {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-between mb-10 py-5">
      <div className="text-left w-full md:w-[55%] flex flex-col gap-3">
        <p className="font-semibold text-white w-[180px] bg-green-600 border rounded-full px-4 py-1 inline-block mb-4">
          Strategiya & Uğur
        </p>
     
        <h1 className="text-[50px] md:text-[68px] leading-[100%] font-bold text-black mb-4">
          Aqrar Problemləri Üçün Etibarlı Həllər.
        </h1>
        <p className="text-md text-gray-700 text-xl">
          Bu xidmətlər hər bir müştərinin xüsusi ehtiyaclarına uyğun olaraq 
          dəyərli bilik və dəstək təqdim edərək aqrar sektorda uğur qazanmaq 
          üçün nəzərdə tutulub.
        </p>
        <div className="flex items-center gap-5">
  <a
    href="/contact"
    className="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition duration-300 ease-in-out"
  >
    Bizimlə Əlaqə
  </a>

  <a
    href="/contact"
    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-600 transform hover:scale-105 transition duration-300 ease-in-out"
  >
    Kəşf Et
  </a>
</div>

<div className="flex gap-4 mt-2">
              <a href="#" className="text-black text-2xl"><FaInstagram /></a>
              <a href="#" className="text-black text-2xl"><FaFacebook /></a>
              <a href="#" className="text-black text-2xl"><FaTwitter /></a>
            </div>


      </div>
      <div className="relative md:w-1/3 h-96">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220423/pngtree-field-with-sunflowers-and-clouds-in-sky-agro-background-natural-photo-image_4232421.jpg"
          alt="Günəbaxan sahəsi"
          className="rounded-lg shadow-lg w-full md:w-[400px] md:h-[400px] absolute top-0 left-0"
        />
        <img
          src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg"
          alt="Günəbaxan yaxın planda"
          className="rounded-lg shadow-lg  max-[768px]:hidden  w-[400px] h-[400px] absolute"
          style={{ top: "200px", left: "100px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
