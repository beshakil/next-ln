"use client";

import React, { useState } from 'react';
import {  MdManageHistory } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import ProfileSettingsTab from './ProfileSettingsTab';
import SubscriptionTab from './SubscriptionTab';

const MyAccountHome = () => {

    const [activeTab, setActiveTab] = useState('profileTab');

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900 mt-16">
            <div className='flex'>
                <div className="flex sm:w-auto w-full sm:gap-3 gap-2 sm:justify-start justify-evenly bg-white border border-gray-200 p-2 rounded-lg">
                    <button className={`flex border border-gray-200 items-center w-auto justify-center sm:gap-2 gap-1 sm:py-2 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'profileTab' ? 'bg-priColor text-white' : 'bg-white text-priColor'} rounded-lg`} onClick={() => setActiveTab('profileTab')}>
                        <FaRegUser className="sm:text-xl text-base" />
                        <span className="mt-1 text-sm md:text-base lg:text-base">Profile Setting</span>
                    </button>
                    <button className={`flex border border-gray-200 items-center w-auto justify-center sm:gap-2 gap-1 sm:py-2 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'subscriptionTab' ? 'bg-priColor text-white' : 'bg-white text-priColor'} rounded-lg`} onClick={() => setActiveTab('subscriptionTab')}>
                        <MdManageHistory className="sm:text-xl text-base" />
                        <span className="mt-1 text-sm md:text-base lg:text-base">Billing & Plan</span>
                    </button>
                </div>
            </div>
            {
                activeTab === 'profileTab' ? <ProfileSettingsTab /> :
                    activeTab === 'subscriptionTab' ? <SubscriptionTab /> :
                        ""
            }
        </div>
    );
};

export default MyAccountHome;