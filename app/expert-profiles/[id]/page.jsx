"use client";
import React, { useEffect, useState } from 'react';

const UserDetails = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [chatId, setChatId] = useState(null);
    const senderId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchUserById = async () => {
            const pathParts = window.location.pathname.split('/');
            const userId = pathParts[pathParts.length - 1];

            if (userId) {
                try {
                    const response = await fetch(`https://pracfix-back.onrender.com/api/auth/${userId}`);
                    const data = await response.json();

                    if (response.ok) {
                        setSelectedUser(data.user);
                        fetchChatMessages(userId);
                    } else {
                        console.error('Kullanıcı bilgileri getirilemedi.');
                    }
                } catch (error) {
                    console.error('Server xətası:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                console.error('Kullanıcı ID bulunamadı.');
                setLoading(false);
            }
        };

        fetchUserById();
    }, []);

    const fetchChatMessages = async (recipientId) => {
        try {
            if (!senderId) return console.error('Kullanıcı ID bulunamadı.');

            const response = await fetch(`https://pracfix-back.onrender.com/api/message/chat/${senderId}/${recipientId}`);
            const data = await response.json();

            if (response.ok) {
                setMessages(data.messages);
                setChatId(data.chatId);
            } else {
                console.error('Mesajlar getirilemedi.');
            }
        } catch (error) {
            console.error('Server xətası:', error);
        }
    };

    const handleSendMessage = async () => {
        if (!senderId) return console.error('Kullanıcı ID bulunamadı.');
    
        if (newMessage.trim()) {
            try {
                const response = await fetch('https://pracfix-back.onrender.com/api/message/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        sender: senderId,
                        message: newMessage,
                        recipient: selectedUser._id
                    })
                });
                const data = await response.json();
    
                if (response.ok) {
                    setMessages(prevMessages => [...prevMessages, { sender: senderId, message: newMessage }]);
                    setNewMessage("");
                } else {
                    console.error('Mesaj gönderilemedi:', data.message);
                }
            } catch (error) {
                console.error('Mesaj gönderilirken hata oluştu:', error);
            }
        }
    };

    if (loading) return <p>Yüklənir...</p>;

    return (
        <div className="flex flex-col gap-3 p-10">
            <a href='/expert-profile'>Go Home</a>

            {selectedUser ? (
                <div className="user-details w-full border p-5 rounded-lg flex items-center gap-3">
                    <img className='w-[300px] h-[300px] rounded-full ' src={`https://pracfix-back.onrender.com/${selectedUser.profilePhoto}`} alt={`${selectedUser.firstName} ${selectedUser.lastName}`} />
                    <div className='flex flex-col gap-3'>
                        <h3 className='text-3xl font-bold text-center'>{selectedUser.firstName} {selectedUser.lastName}</h3>
                        <p className="text-center">{selectedUser.email}</p>
                        <p className="text-center">İş Təcrübəsi : {selectedUser.deneyim} il</p>
                        <p className="text-center">{selectedUser.uzmanlikAlanlari} üzrə Ekspert</p>
                        <p className="text-center">Profili haqqında digər məlumatlar</p>
                    </div>
                </div>
            ) : (
                <p>Seçilen kullanıcı bilgisi bulunamadı.</p>
            )}

            {/* Sohbet Arayüzü */}
            <div className="chat-section mt-5">
                <h3 className="text-2xl font-bold">Mesajlaşma</h3>
                <div className="messages p-3 border rounded-lg h-64 overflow-y-scroll">
                    {messages.map((msg, index) => (
                        <div key={index} className={`message mb-2 ${msg.sender === senderId ? "text-right" : "text-left"}`}>
                            <span className="font-semibold">{msg.sender === senderId ? "Siz" : selectedUser.firstName}:</span> {/* Gönderen adı */}
                            <p>{msg.message || msg.messageText}</p>
                        </div>
                    ))}
                </div>
                <div className="send-message mt-3 flex items-center gap-2">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="p-2 border rounded-lg w-full"
                        placeholder="Mesajınızı yazın..."
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-blue-500 text-white p-2 rounded-lg"
                    >
                        Gönder
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
