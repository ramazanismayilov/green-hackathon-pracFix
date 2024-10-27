"use client"
import React, { useEffect, useState } from 'react';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://pracfix-back.onrender.com/api/auth/all'); // Backend URL-i buraya yazın
                const data = await response.json();
                
                if (response.ok) {
                    setUsers(data.experts);
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

    console.log(users);

    return (
        <div className='flex flex-col gap-3 p-5'>
            <h1 className='text-3xl font-bold'>Ekspertlər</h1>
            <div className='flex items-center gap-3 flex-wrap' >

            {users.map(user => (
    <div key={user._id} className="user-card border w-[250px] flex items-center justify-center text-center flex-col p-3">
        <img 
            className='w-[100px] h-[100px] rounded-full' 
            src={user.profilePhoto ? `http://localhost:7777/${user.profilePhoto}` : 'default-avatar.png'} 
            alt={`${user.firstName} ${user.lastName}`} 
        />
        <h3 className='text-xl'>{user.firstName} {user.lastName}</h3>
        <p>{user.email}</p>

        {/* Deneyim alanı kontrolü */}
        <p>Deneyim: {user.deneyim ? `${user.deneyim} il` : 'Belirtilmemiş'}</p>

        {/* Uzmanlık Alanı kontrolü */}
        <p >Uzmanlık Alanı: {user.uzmanlikAlanlari ? user.uzmanlikAlanlari : 'Belirtilmemiş'}</p>

        <a href={`/expert-profiles/${user._id}`} className='hover:underline text-blue-600'>Profili Gör</a>
    </div>
))}




            </div>
        
        </div>
    );
};

export default UsersList;
