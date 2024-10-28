import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "../components/Services";

function About() {
  return (
    <div>
      <Container
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "3px",
        }}
      >
        <Navbar />
      </Container>
      <div>
        <div
          className="relative h-[50vh] bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.jdmagicbox.com/comp/vizianagaram/l2/9999p8922.8922.191019221206.c8l2/catalogue/bg-agrisupport-vizianagaram-agro-farming-services-d7duyg58su.jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Haqqımızda</h1>
              <div className="flex items-center justify-center gap-3">
                <a href="/">Ana səhifə</a>/
                
                                <a href="#">Haqqımızda</a>
              </div>
            </div>
          </div>
        </div>

        <Container
          sx={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
          }}
        >
          <div className="flex flex-col md:flex-row items-center mb-10">
            <div className="md:w-1/2 md:pr-5">
              <h2 className="text-3xl font-bold mb-4">Biz Kimik?</h2>
              <p className="text-gray-700 mb-4">
                Biz mütəxəssislərdən ibarət bir komandayıq ki, gənclərə karyera
                seçimi və inkişafında dəstək oluruq. Yüksək keyfiyyətli
                xidmətlərimizlə, müştərilərimizin ehtiyaclarını qarşılamağı
                hədəfləyirik. Bizim komanda fərqli sahələrdə geniş bilik və
                təcrübəyə malikdir, buna görə də müştərilərimizin öz karyera
                hədəflərinə çatmalarına kömək edirik.
              </p>
              <p className="text-gray-700">
                Bizim məqsədimiz yalnız karyera yönümlü məsləhət vermək deyil,
                eyni zamanda gəncləri öz güclərinə inanmağa və müvəffəqiyyət
                üçün motivasiya etməyə yönəltməkdir. 
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://turkiyedetehsilal.az/wp-content/uploads/2021/03/biz-kimik.jpg"
                alt="About us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <img
                src="https://img.freepik.com/free-photo/detail-rice-plant-sunset-valencia-with-plantation-out-focus-rice-grains-plant-seed_181624-25838.jpg"
                alt="About us"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-5">
              <h2 className="text-3xl font-bold mb-4">Məqsədimiz</h2>
              <p className="text-gray-700 mb-4">
                Müştərilərimizin karyera hədəflərinə çatmalarına kömək etmək,
                onların inkişafına yönəlmiş mükəmməl xidmətlər təqdim etməkdir.
                Həmçinin, cəmiyyətə fayda vermək məqsədimiz var. Biz, karyera
                məsləhəti, peşə inkişafı və mentorluq sahəsində yüksək keyfiyyətli
                proqramlar təqdim edirik.
              </p>
              <p className="text-gray-700">
                Biz, müştərilərimizin ehtiyaclarına uyğun olaraq fərdi yanaşma
                təqdim edərək, hər bir müştərinin inkişafını dəstəkləyirik.
                Həmçinin, ətraf mühitə dəstək olmaq məqsədimiz var; bu səbəbdən
                də davamlı inkişaf prinsipinə əsaslanan layihələr həyata
                keçiririk.
              </p>
            </div>
          </div>
          <Services />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default About;
