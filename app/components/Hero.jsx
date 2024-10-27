import React from "react";

function Hero() {
  return (
    <div className="flex items-center justify-between py-5">
      <div className="text-left w-1/2">
        <p className="font-semibold text-white bg-green-600 border rounded-full px-4 py-1 inline-block mb-4">
          Strategiya ilə Uğura
        </p>
     
        <h1 className="text-[68px] leading-[100%] font-bold text-black mb-4">
          Aqrar Problemləri Üçün Etibarlı Həllər.
        </h1>
        <h5 className="text-md text-gray-700 mb-6">
          Bu xidmətlər hər bir müştərinin xüsusi ehtiyaclarına uyğun olaraq 
          dəyərli bilik və dəstək təqdim edərək aqrar sektorda uğur qazanmaq 
          üçün nəzərdə tutulub.
        </h5>
        <div className="flex items-center gap-5">
          <a
            href="/contact"
            className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-600"
          >
            Bizimlə Əlaqə
          </a>
        </div> {/* Bu div kapatıldı */}
      </div>
      <div className="relative w-1/3 h-96">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220423/pngtree-field-with-sunflowers-and-clouds-in-sky-agro-background-natural-photo-image_4232421.jpg"
          alt="Günəbaxan sahəsi"
          className="rounded-lg shadow-lg w-[320px] h-[320px] absolute top-0 left-0"
        />
        <img
          src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg"
          alt="Günəbaxan yaxın planda"
          className="rounded-lg shadow-lg w-[320px] h-[320px] absolute"
          style={{ top: "100px", left: "100px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
