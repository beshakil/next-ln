'use client';
import { setToken } from '@/lib/auth';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import React from 'react'

export default function Login() {
    const t = useTranslations('Login');
    const router = useRouter();

    const handleLogin = async () => {
        // Simulate login API
        const fakeToken = 'demo123';
        setToken(fakeToken);
        router.push('/dashboard');
    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'>
            <div className='text-2xl font-bold text-center mb-8'>{t('title')}</div>

            <button onClick={handleLogin} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">Login</button>
        </div>
    )
}
