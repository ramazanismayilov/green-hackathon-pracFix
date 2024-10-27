"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [popup, setPopup] = useState({ show: false, message: '', status: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://pracfix-back.onrender.com/api/auth/login', formData);
            setPopup({ show: true, message: 'Giriş başarılı!', status: 'success' });
            console.log('Login successful:', response.data);
            
            // Kullanıcı bilgilerini localStorage'a kaydetme
            const userData = response.data.user;
            localStorage.setItem('userId', userData._id);
            localStorage.setItem('isPremium', userData.isPremium);
            localStorage.setItem('createdAt', userData.createdAt);
            localStorage.setItem('updatedAt', userData.updatedAt);
            localStorage.setItem('firstName', userData.firstName);
            localStorage.setItem('lastName', userData.lastName);
            localStorage.setItem('email', userData.email);
            localStorage.setItem('isAdmin', userData.isAdmin);
            localStorage.setItem('profilePhoto', userData.profilePhoto);
            localStorage.setItem('role', userData.role);

            // Eğer role 1 ise /expert-profile sayfasına yönlendirme yap
            if (userData.role === 1) {
                window.location.href = '/profile';
            }else{
                window.location.href = '/';
            }
        } catch (error) {
            setPopup({ show: true, message: error.response?.data || 'Bir hata oluştu!', status: 'error' });
            console.error('Login error:', error.response?.data);
        }
    };

    useEffect(() => {
        if (popup.show) {
            const timer = setTimeout(() => setPopup({ ...popup, show: false }), 3000);
            return () => clearTimeout(timer);
        }
    }, [popup.show]);

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
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-md flex flex-col w-full space-y-6">
                <h2 className="text-2xl font-semibold text-center text-gray-800">Giriş Yap</h2>
                
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

                <button 
                    type="submit"
                    className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-200">
                    Giriş Yap
                </button>
                <span className='mt-2' >Hesabınız yoxdur? <a href="/register" className='text-indigo-500 hover:underline'>Qeydiyyatdan keç.</a></span>

            </form>
            
        </div>
    );
};

export default Login;
