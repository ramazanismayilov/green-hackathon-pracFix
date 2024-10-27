"use client";
import { createContext, useEffect } from "react";

export const WebContext = createContext();

export const WebProviderFunc = ({ children }) => { 

    useEffect(() => {
        const role = typeof window !== 'undefined' ? localStorage.getItem('role') : null;
        const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

        if (pathname === '/profile') {
            if (role !== '1') {
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