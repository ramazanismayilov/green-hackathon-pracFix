"use client";
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://pracfix-back.onrender.com/api/auth/all'); // Backend URL-i buraya yazın
                const data = await response.json();

                if (response.ok) {
                    setUsers(data.experts);
                    // LocalStorage'dan userId'yi al
                    const userId = localStorage.getItem('userId');
                    // userId ile eşleşen kullanıcıyı bul
                    const foundUser = data.experts.find(user => user._id === userId);
                    setCurrentUser(foundUser);
                } else {
                    console.error('İstifadəçilər əldə edilə bilmədi.');
                }
            } catch (error) {
                console.error('Server xətası:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p>Yüklənir...</p>;

    return (
        <div className='flex flex-col gap-3 p-5'>
            <h1 className='text-3xl font-bold'>Ekspertlər</h1>
            
            {currentUser && (
                <div className="current-user border p-3">
                    <h2 className='text-2xl font-semibold'>Aktif Kullanıcı:</h2>
                    <img 
                        className='w-[100px] h-[100px] rounded-full' 
                        src={currentUser.profilePhoto ? `https://pracfix-back.onrender.com/${currentUser.profilePhoto}` : 'default-avatar.png'} 
                        alt={`${currentUser.firstName} ${currentUser.lastName}`} 
                    />
                    <h3 className='text-xl'>{currentUser.firstName} {currentUser.lastName}</h3>
                    <p>{currentUser.email}</p>
                    <p>Deneyim: {currentUser.deneyim ? `${currentUser.deneyim} il` : 'Belirtilmemiş'}</p>
                    <p>Uzmanlık Alanı: {currentUser.uzmanlikAlanlari ? currentUser.uzmanlikAlanlari : 'Belirtilmemiş'}</p>
                </div>
            )}
            
            
            </div>
    );
};

export default ProfilePage;