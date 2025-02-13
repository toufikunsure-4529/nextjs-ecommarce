"use client"

import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import AdminHeader from './components/Header';
import AdminLayout from './components/AdminLayout';
import { AuthContextProvider, useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { CircularProgress } from "@nextui-org/react";

function Layout({ children }) {
    return (
        <AuthContextProvider>
            <AdminChecking>{children}</AdminChecking>
        </AuthContextProvider>
    );
}

export default Layout;


function AdminChecking({ children }) {
    const { user, isLoading } = useAuth()
    const router = useRouter()
    useEffect(() => {
        if (!user && !isLoading) {
            router.push("/login")
        }
    }, [user, isLoading])



    if (isLoading) {
        return <div className="h-screen w-screen flex justify-center items-center">
            <CircularProgress />
            <h1>Loading...</h1>
        </div>
    }

    if (!user) {
        return <div className='h-screen w-screen flex justify-center items-center'>
            <h3 className='text-xl font-bold'>Please Login Frist Access Admin Dashboard</h3>
        </div>
    }

    return <AdminLayout>
        {children}
    </AdminLayout>
}
