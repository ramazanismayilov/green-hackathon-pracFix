"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '2', // Varsayılan rol "Normal Kullanıcı" olarak string yapıldı
        deneyim: '',
        uzmanlikAlanlari: ''
    });
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [popup, setPopup] = useState({ show: false, message: '', status: '' });
    const [categories, setCategories] = useState([]); // Uzmanlık alanları için state
    const [showExpertFields, setShowExpertFields] = useState(false); // Role 1 ise göster

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Role değiştiğinde alanları sıfırlama işlemi
        if (name === 'role') {
            setShowExpertFields(value === '1');
        }
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];
        setProfilePhoto(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        for (let key in formData) {
            // `deneyim` ve `uzmanlikAlanlari` varsa eklenir
            if (key === 'deneyim' && formData.role === '2') continue;
            if (key === 'uzmanlikAlanlari' && formData.role === '2') continue;
            data.append(key, formData[key]);
        }
        if (profilePhoto) {
            data.append('profilePhoto', profilePhoto);
        }

        try {
            const response = await axios.post('https://pracfix-back.onrender.com/api/auth/signup', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setPopup({ show: true, message: 'Kayıt başarılı!', status: 'success' });
            window.location.href = '/login';
        } catch (error) {
            setPopup({ show: true, message: error.response?.data || 'Bir hata oluştu!', status: 'error' });
        }
    };

    // Uzmanlık alanlarını API’den çekme
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://pracfix-back.onrender.com/api/category');
                setCategories(response.data); // API’den gelen kategorileri kaydet
            } catch (error) {
                console.error("Uzmanlık alanları alınırken hata oluştu:", error);
            }
        };
        fetchCategories();
    }, []);


    useEffect(() => {
        if (formData.role !== '1') {
            setFormData(prevState => ({
                ...prevState,
                deneyim: '',
                uzmanlikAlanlari: ''
            }));
        }
    }, [formData.role]);
    

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 relative">
            {popup.show && (
                <div
                    className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-4 py-3 rounded-lg shadow-lg text-white text-center transition-all duration-300 
                    ${popup.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}
                >
                    {popup.message}
                </div>
            )}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full space-y-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Hesap Oluştur</h2>

                <input 
                    type="text"
                    name="firstName"
                    placeholder="Ad"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />

                <input 
                    type="text"
                    name="lastName"
                    placeholder="Soyad"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />

                <input 
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />

                <input 
                    type="password"
                    name="password"
                    placeholder="Şifre"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />

                <input 
                    type="password"
                    name="confirmPassword"
                    placeholder="Şifreyi Onayla"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />

                <div className="flex items-center space-x-3">
                    <label className="text-gray-600">Rol:</label>
                    <select 
                        name="role" 
                        value={formData.role} 
                        onChange={handleChange}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                        <option value="2">Normal Kullanıcı</option>
                        <option value="1">Uzman</option>
                    </select>
                </div>

                {showExpertFields && (
                    <>
                        <input 
                            type="text" 
                            name="deneyim" 
                            placeholder="Deneyim (yıl)" 
                            value={formData.deneyim} 
                            onChange={handleChange} 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        />

                        <select 
                            name="uzmanlikAlanlari" 
                            value={formData.uzmanlikAlanlari} 
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                        >
                            <option value="" disabled>Uzmanlık Alanı Seçin</option>
                            {categories.map(category => (
                                <option key={category._id} value={category.name}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </>
                )}

                
                <div className="space-y-2">
                    <label className="text-gray-600">Profil Fotoğrafı:</label>
                    <input 
                        type="file"
                        name="profilePhoto"
                        onChange={handlePhotoChange}
                        className="w-full border border-gray-300 rounded-lg focus:outline-none"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200">
                    Kaydol
                </button>
            </form>
        </div>
    );
};

export default SignupForm;
