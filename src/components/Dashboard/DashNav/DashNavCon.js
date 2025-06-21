"use client";

import React from 'react';
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { FaHome } from 'react-icons/fa';
// import LanguageSwitch from '../../LanguageSwitch';
// import { ThemeSwitch } from '../../ThemeSwitch';
import DashNavProfile from './DashNavProfile';
import DashMobileSideBar from './DashMobileSideBar';
import NavBarMenuList from '../../NavbarCom/NavBarMenuList';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import LanguageSwitcherSelect from '@/components/LanguageSwitchSelect';
import Link from 'next/link';

const DashNavCon = () => {
    return (
        <nav className="fixed top-0 sm:left-64 z-50 w-full sm:w-[calc(100%-258px)] bg-white border-b border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <DashMobileSideBar />
                        <Link href="/" className="flex sm:hidden ms-4 md:me-24 items-center gap-2">
                            <FaHome className='text-xl sm:text-2xl -mt-1' />
                            <span className="text-xl font-semibold sm:text-2xl dark:text-zinc-200">BariBhara</span>
                        </Link>
                        <NavBarMenuList />
                    </div>
                    <div className="flex items-center sm:mr-0 mr-2">
                        <div className='sm:flex gap-5 hidden mr-5'>
                            <LanguageSwitcherSelect/>
                        </div>
                        {/* <div className='mr-5 mt-2'>
                            <ThemeSwitch />
                        </div> */}
                        <DashNavProfile />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default DashNavCon;