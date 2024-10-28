"use client";
import React, { useEffect, useState } from 'react';

const UserDetails = () => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [chatId, setChatId] = useState(null);
    const senderId = typeof window !== 'undefined' ? localStorage.getItem("userId") : null;

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
<div className="flex flex-col gap-6 p-10 bg-gray-50 min-h-screen">
  <a href='/expert-profile' className="text-blue-600 underline text-lg mb-4">Ana Səhifəyə Qayıt</a>

  {selectedUser ? (
    <div className="user-details w-full max-w-3xl  border p-6 rounded-lg bg-white shadow-lg flex items-center gap-5">
      <img 
        className="w-48 h-48 rounded-full border-2 border-green-500 object-cover" 
        src={`https://pracfix-back.onrender.com/${selectedUser.profilePhoto}`} 
        alt={`${selectedUser.firstName} ${selectedUser.lastName}`} 
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">{selectedUser.firstName} {selectedUser.lastName}</h3>
        <p className="text-gray-600 text-center">{selectedUser.email}</p>
        <p className="text-gray-700 text-center">İş Təcrübəsi: {selectedUser.deneyim} il</p>
        <p className="text-gray-700 text-center">{selectedUser.uzmanlikAlanlari} üzrə Ekspert</p>
        <p className="text-gray-600 text-center">Profili haqqında digər məlumatlar</p>
      </div>
    </div>
  ) : (
    <p className="text-red-600 text-center">Seçilen istifadəçi məlumatı tapılmadı.</p>
  )}

  {/* Mesajlaşma Bölməsi */}
  <div className="chat-section mt-8 max-w-3xl">
    <h3 className="text-2xl font-semibold mb-4 text-center">Mesajlaşma</h3>
    <div className="messages bg-white p-4 border border-gray-300 rounded-lg h-72 overflow-y-auto shadow-inner">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div 
            key={index} 
            className={`mb-3 p-2 rounded-md ${
              msg.sender === senderId ? "bg-blue-100 text-right" : "bg-gray-100 text-left"
            }`}
          >
            <span className="font-medium text-gray-700">{msg.sender === senderId ? "Siz" : selectedUser.firstName}:</span>
            <p className="text-gray-800">{msg.message || msg.messageText}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">Mesajlar yoxdur.</p>
      )}
    </div>
    <div className="send-message mt-4 flex items-center gap-3">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Mesajınızı yazın..."
      />
      <button
        onClick={handleSendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Gönder
      </button>
    </div>
  </div>
</div>

    );
};

export default UserDetails;
