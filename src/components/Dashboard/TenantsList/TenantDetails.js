"use client";

import React, { useMemo, useState } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import { TbListDetails } from 'react-icons/tb';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import { IoArrowBackOutline } from 'react-icons/io5';
import Image from 'next/image';
import { MdCheck, MdFamilyRestroom, MdKeyboardArrowDown, MdVerifiedUser } from 'react-icons/md';
import ProfileTab from './ProfileTab';
import { FaEdit, FaRegUser, FaTrashAlt } from "react-icons/fa";
import FamilyInfoTab from './FamilyInfoTab';
import OthersInfoTab from './OthersInfoTab';
import { useTranslations } from "next-intl";

const TenantDetails = ({ tenantsData }) => {
    const t = useTranslations("buildingList");
    const [activeTab, setActiveTab] = useState('profileTab');
    const [tenantsDataState, setTenantsDataState] = useState(tenantsData);

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    const tenant = tenantsDataState.find((b) => b.id === parseInt(id));

    if (!tenant) {
        return <p>Tenants not found!</p>;
    }

    const handleBack = () => {
        // eslint-disable-next-line no-undef
        window.history.back();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900 mt-16">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center sm:pb-4 pb-0">
                <div className="text-2xl flex items-center gap-3 pb-2 sm:pb-0">
                    <IoArrowBackOutline className='text-3xl cursor-pointer text-priTextColor' onClick={handleBack} />
                    <p className="sm:text-left text-center text-xl sm:text-2xl font-bold text-priTextColor mt-1">Tenant Details</p>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-5 justify-between'>
                <div className='sm:w-[30%] w-full '>
                    <div className="w-auto bg-white border border-gray-200 sm:p-5 p-3 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                        <div className='w-auto'>
                            <div className="flex m-auto sm:w-20 sm:h-20 w-16 h-16 rounded-full my-1">
                                <Image
                                    src={tenant.image}
                                    width={80}
                                    height={80}
                                    className="rounded-full sm:w-20 sm:h-20 w-16 h-16 object-cover"
                                    alt={`Picture of ${tenant.name}`}
                                    loading="lazy"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center py-3">
                                <h5 className="mb-1 text-sm sm:text-lg text-priTextColor font-bold dark:text-white flex items-center gap-1">
                                    {tenant.name} <span className="-mt-1 text-green-600"><MdVerifiedUser /></span>
                                </h5>
                                <div className="flex gap-1">
                                    <p className="text-sm -mt-1 text-priColor dark:text-purple-300">Id:</p>
                                    <p className="text-sm text-secTextColor -mt-1">{tenant.id}</p>
                                </div>
                            </div>
                            <div>
                                <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Mobile: <span className='text-priColor dark:text-purple-300'>{tenant.phone}</span></p>
                                <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Building: <span className='text-priColor dark:text-purple-300'>Shopno Chura</span></p>
                                <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Floor: <span className='text-priColor dark:text-purple-300'>1st floor</span></p>
                                <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Flat No: <span className='text-priColor dark:text-purple-300'>1A</span></p>
                            </div>
                        </div>

                        <div className="flex justify-center gap-3 pt-3">
                            <ActionBtnComponent
                                buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                buttonText={t("edit")}
                                startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                            />
                        </div>
                    </div>
                </div>
                <div className='sm:w-[70%] w-full'>
                    <div className='flex'>
                    <div className="flex sm:w-auto w-full sm:gap-3 gap-2 sm:justify-start justify-evenly bg-white border border-gray-200 p-2 rounded-lg">
                            <button className={`flex border border-gray-200 items-center w-auto justify-center sm:gap-2 gap-1 sm:py-2 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'profileTab' ? 'bg-priColor text-white' : 'bg-white text-priColor'} rounded-lg`} onClick={() => setActiveTab('profileTab')}>
                                <FaRegUser className="sm:text-xl text-base" />
                                <span className="mt-1">Profile</span>
                            </button>
                            <button className={`flex border border-gray-200 items-center w-auto justify-center sm:gap-2 gap-1 sm:py-2 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'familyTab' ? 'bg-priColor text-white' : 'bg-white text-priColor'} rounded-lg`} onClick={() => setActiveTab('familyTab')}>
                                <MdFamilyRestroom className="sm:text-xl text-base" />
                                <span className="mt-1">Family</span>
                            </button>
                            <button className={`flex border border-gray-200 items-center w-auto justify-center sm:gap-2 gap-1 sm:py-2 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'optional' ? 'bg-priColor text-white' : 'bg-white text-priColor'} rounded-lg`} onClick={() => setActiveTab('optional')}>
                                <TbListDetails className="sm:text-xl text-base" />
                                <span className="mt-1">Optional</span>
                            </button>
                        </div>
                    </div>
                    {
                        activeTab === 'profileTab' ? <ProfileTab tenant={tenant} /> :
                            activeTab === 'familyTab' ? <FamilyInfoTab tenant={tenant} /> :
                                activeTab === 'optional' ? <OthersInfoTab tenant={tenant} /> :
                                    ""
                    }
                </div>
            </div>
        </div>
    );
};

export default TenantDetails;