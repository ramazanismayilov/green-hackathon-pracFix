"use client";
import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://pracfix-back.onrender.com/api/auth/all"
        ); // Backend URL-i buraya yazın
        const data = await response.json();

        if (response.ok) {
          setUsers(data.experts);
        } else {
          console.error("İstifadəçilər əldə edilə bilmədi.");
        }
      } catch (error) {
        console.error("Server xətası:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Yüklənir...</p>;

  console.log(users);

  return (
    <div className="flex flex-col gap-6 p-6  ">
    <h1 className="text-4xl font-bold text-center mb-3">Ekspertlər</h1>
    <div className="flex items-center gap-6 flex-wrap">
      {users.map((user) => (
        <div
          key={user._id}
          className="user-card border border-green-500 w-[250px] flex items-center justify-center text-center flex-col p-5 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg bg-white"
        >
          <img
            className="w-[100px] h-[100px] rounded-full mb-3 shadow-sm border-2 border-green-300"
            src={
              user.profilePhoto
                ? `https://pracfix-back.onrender.com/${user.profilePhoto}`
                : "default-avatar.png"
            }
            alt={`${user.firstName} ${user.lastName}`}
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-600 text-sm mb-1">{user.email}</p>
          <p className="text-gray-700 text-sm mb-1">
            Təcrübə: {user.deneyim ? `${user.deneyim} il` : "Belirtilmemiş"}
          </p>
          <p className="text-gray-700 text-sm mb-4">
            Uzmanlıq Sahəsi:{" "}
            {user.uzmanlikAlanlari ? user.uzmanlikAlanlari : "Belirtilmemiş"}
          </p>
          <a
            href={`/expert-profiles/${user._id}`}
            className="text-green-600 font-medium hover:underline"
          >
            Profili Gör
          </a>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default UsersList;
