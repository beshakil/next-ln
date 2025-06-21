"use client";

import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useTranslations } from "next-intl"
import DashSideMenuList from './DashSideMenuList';
import Link from 'next/link';

const DashSideMenuMainCon = () => {
    const t = useTranslations("DashBoardSideList");
    const currentPath = usePathname();
    const pathname = usePathname();

    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-8 transition-transform -translate-x-full bg-white dark:bg-gray-800 border-r border-gray-200 sm:translate-x-0  dark:border-gray-700" aria-label="Sidebar">
            <Link href="/" className="flex ms-5 mb-2 md:me-24 items-center gap-2">
                <FaHome className='text-xl sm:text-2xl -mt-1' />
                <span className="text-xl font-semibold sm:text-2xl text-priColor dark:text-zinc-200">BariBhara</span>
            </Link>
            <DashSideMenuList />
        </aside>
    );
};

export default DashSideMenuMainCon;