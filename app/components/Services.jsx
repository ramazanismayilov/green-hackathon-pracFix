import React from "react";
import { FaSeedling, FaHandshake, FaBriefcase } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";

const services = [
  {
    icon: <FaSeedling style={{ color: "#106861" }} />,
    title: "Gənclər üçün Karyera Xidməti",
    description: "Mütexəssislər tərəfindən hazırlanmış yol xəritələri və sualların cavablandırılması.",
  },
  {
    icon: <FaHandshake style={{ color: "#106861" }} />,
    title: "Mütəxəssislərlə Birbaşa Əlaqə İmkanı",
    description: "Fermerlər və investorlar mütexəssislərdən birbaşa yardım alırlar.",
  },
  {
    icon: <FaBriefcase style={{ color: "#106861" }} />,
    title: "Yeni İnvestorlar üçün Şans",
    description: "İnvestorlar fermerlərdən torpaq almaq və yeni layihələrə sərmayə qoyma imkanları əldə edirlər.",
  },
  {
    icon: <GiFarmTractor style={{ color: "#106861" }} />,
    title: "Fermer Cəmiyyəti",
    description: "Fermerlər problemlərini müzakirə edə bilər, ekspertlərdən və digər fermerlərdən cavab alırlar.",
  },
];

function Services() {
  return (
    <div className="py-10 my-10">
      <h2 className="text-4xl font-bold text-center mb-6">Xidmətlərimiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl border hover:border-[#106861] duration-300" // Tailwind sinifləri ilə stil
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-sm text-center">{service.description}</p>
            <a href="/service" className="mt-auto text-[#116860] font-medium">Ətraflı bax</a>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
