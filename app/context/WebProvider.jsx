"use client"
import { createContext, useEffect, useState } from "react";

export const WebContext = createContext();

export const WebProviderFunc = ({ children }) => { 

    useEffect(() => {
        const role = localStorage.getItem('role');
        const pathname = window.location.pathname;

        if (pathname === '/profile') {
            // Eğer kullanıcı expert profile sayfasına gitmeye çalışıyorsa role kontrolü yap
            if (role !== '1') {
                // role 1 değilse ana sayfaya yönlendir
                window.location.href = '/';
            }
        }
    }, []);

    return (
        <WebContext.Provider value={{}}>
            {children}
        </WebContext.Provider>
    );
};


