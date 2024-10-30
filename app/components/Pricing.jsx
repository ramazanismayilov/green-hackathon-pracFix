import React from "react";
import { FaCheck } from "react-icons/fa6";

const pricingPlans = [
  {
    name: "Pulsuz Plan",
    price: 0,
    description: "Yeni başlayanlar üçün əsas xüsusiyyətlər.",
    features: [
      "Məhdud mütəxəssis dəstəyi",
      "1 fəaliyyət planı",
      "Həftəlik yeniliklər",
      "E-mail xəbərdarlıqları",
    ],
  },
  {
    name: "Tələbə Planı",
    price: 29,
    description: "Tələbələr üçün xüsusi təlim və dəstək.",
    features: [
      "Müəyyən mütəxəssis dəstəyi",
      "5 fəaliyyət planı",
      "Həftəlik yeniliklər",
      "E-mail dəstəyi",
      "Təhsil üçün xüsusi analiz və hesabatlar",
    ],
  },
  {
    name: "Premium Plan",
    price: 49,
    description: "Daha geniş dəstək və xüsusiyyətlər.",
    features: [
      "Tam mütəxəssis dəstəyi",
      "10 fəaliyyət planı",
      "Həftəlik yeniliklər",
      "E-mail və telefon dəstəyi",
      "Geniş analiz və hesabatlar",
    ],
  },
  {
    name: "İllik Plan",
    price: 79,
    description: "Tam dəstək və geniş imkanlar.",
    features: [
      "Prioritet mütəxəssis dəstəyi",
      "Sonsuz fəaliyyət planı",
      "Gündəlik yeniliklər",
      "Xüsusi e-mail və telefon dəstəyi",
      "Geniş analiz, hesabatlar və fərdi konsultasiya",
    ],
  },
];

function Pricing() {
  return (
    <div className="py-10 px-5 my-10">
      <h2 className="text-4xl font-bold text-center mb-6">Qiymət Planları</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="bg-white border hover:border-[#106861] duration-300 shadow-lg rounded-lg px-5 py-10 flex flex-col">
            <h3 className="text-2xl text-center font-semibold mb-2 text-[#106861]">{plan.name}</h3>
            <p className="text-gray-600 text-center mb-4">{plan.description}</p>
            <p className="text-4xl font-bold text-center my-4 text-[#106861]">{plan.price} <sub className="text-[20px]">AZN</sub></p>
            <ul className="list-disc list-inside flex flex-col gap-3 mb-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaCheck className="text-[#106861]" />
                  {feature}
                </li>
              ))}
            </ul>
            {plan.price !== 0 && (
              <button onClick={() => window.location.href = '/checkout'} className="bg-[#106861] hover:bg-white text-white hover:text-black border border-green-500 py-2 px-4 rounded mt-auto">
                İndi Al
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
