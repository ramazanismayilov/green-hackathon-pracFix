"use client";
import React, { useEffect, useState } from "react";
import ExpertCard from "./ExpertCard";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(window.location.pathname === "/");
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://pracfix-back.onrender.com/api/auth/all"
        );
        const data = await response.json();

        if (response.ok) {
          // Sadece role değeri 1 olan kullanıcıları filtrele
          const filteredUsers = data.experts.filter((user) => user.role === 1);
          setUsers(filteredUsers);
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

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-4xl font-bold text-center mb-3">Ekspertlər</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <ExpertCard
            key={user._id}
            profilePhoto={user.profilePhoto}
            firstName={user.firstName}
            lastName={user.lastName}
            email={isHomePage ? null : user.email}
            deneyim={isHomePage ? null : user.deneyim}
            uzmanlikAlanlari={user.uzmanlikAlanlari}
            userId={user._id}
          />
        ))}
      </div>
    </div>
  );
};

export default UsersList;