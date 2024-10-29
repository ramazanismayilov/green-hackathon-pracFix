import React from "react";

function ExpertCard({
  profilePhoto,
  firstName,
  lastName,
  email,
  deneyim,
  uzmanlikAlanlari,
  userId
}) {
  return (
    <div className="bg-white px-10 py-6 rounded-xl shadow-lg flex flex-col items-center justify-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border-transparent border-2 hover:border-green-500">
      {profilePhoto && (
        <img
          className="w-[130px] h-[130px] rounded-full shadow-lg"
          src={
            profilePhoto
              ? `https://pracfix-back.onrender.com/${profilePhoto}`
              : "default-avatar.png"
          }
          alt={`${firstName} ${lastName}`}
        />
      )}
      <h2 className="mt-4 font-bold text-xl">{`${firstName} ${lastName}`}</h2>
      {email && <p className="my-2 text-gray-600 text-sm">{email}</p>}
      {deneyim && (
        <p className="text-gray-700 text-sm mb-1">
          Təcrübə: {deneyim ? `${deneyim} il` : "Belirtilmemiş"}
        </p>
      )}
      {uzmanlikAlanlari && (
        <p className="text-gray-700 text-sm my-4 text-center">
          {uzmanlikAlanlari ? uzmanlikAlanlari : "Belirtilmemiş"}
        </p>
      )}
      <a
        href={`/expert-profiles/${userId}`}
        className="text-green-500 font-semibold transition-colors duration-300 hover:text-green-700"
      >
        Profili Gör
      </a>
    </div>
  );
}

export default ExpertCard;
