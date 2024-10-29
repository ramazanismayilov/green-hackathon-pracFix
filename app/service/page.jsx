"use client"
import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaBriefcase, FaHandshake, FaSeedling } from 'react-icons/fa'
import { GiFarmTractor } from 'react-icons/gi'
import Pricing from '../components/Pricing'

const services = [
  {
    icon: <FaSeedling style={{ color: "#116860" }} />,
    title: "Gənclər üçün Karyera Xidməti",
    descriptions: [
      "Gənclərin karyera inkişafı üçün yol xəritələri.",
      "Peşə seçimləri və inkişaf istiqamətləri barədə məsləhətlər.",
      "İş bazarı və təcrübə imkanları haqqında məlumatlar.",
      "Əlavə təhsil və inkişaf imkanları haqqında məlumat.",
      "Dəstək və təcrübə proqramları ilə bağlı istiqamətlər."
    ],
  },
  {
    icon: <FaHandshake style={{ color: "#116860" }} />,
    title: "Mütexəssislərlə Birbaşa Əlaqə İmkanı",
    descriptions: [
      "Fermerlər üçün fərdi məsləhət xidməti.",
      "İnvestorların layihələrə yönəlik suallarının cavablandırılması.",
      "Mütexəssislərdən davamlı dəstək almaq imkanı.",
      "Fərdi problemlərin həllinə dair məsləhətlər.",
      "Əlavə xidmətlər və ekspert dəstəyi."
    ],
  },
  {
    icon: <FaBriefcase style={{ color: "#116860" }} />,
    title: "Yeni İnvestorlar üçün Şans",
    descriptions: [
      "Fermerlərlə əməkdaşlıq etmək imkanı.",
      "Əkinçilik layihələrinə sərmayə yatırmaq fürsətləri.",
      "Torpaq alışı və yeni layihələr qurma imkanları.",
      "Layihə menecmenti və idarəetmə dəstəyi.",
      "İnvestisiyaların təhlükəsizliyi və risklərin azaldılması."
    ],
  },
  {
    icon: <GiFarmTractor style={{ color: "#116860" }} />,
    title: "Fermer Cəmiyyəti",
    descriptions: [
      "Fermerlər arasında təcrübə mübadiləsi.",
      "Yeni əkinçilik texnologiyaları haqqında məlumatlar.",
      "Problemlərin müzakirəsi və həll yollarının axtarışı.",
      "Digər fermerlərdən dəstək və təlimlər.",
      "Təhlükəsiz əkinçilik metodları və ekoloji məlumatlar."
    ],
  },
];

function page() {
  return (
    <>
    <Container sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "3px",
          position: "relative",
        }}>
      <Navbar />
      <div className="py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Xidmətlərimiz Haqqında</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-3xl font-semibold">{service.title}</h3>
            </div>
            <ul className="text-gray-700 text-lg list-disc pl-8 space-y-2">
              {service.descriptions.map((description, idx) => (
                <li key={idx}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <Pricing/>
    </Container>


    <Footer />
        
    </>
  )
}

export default page