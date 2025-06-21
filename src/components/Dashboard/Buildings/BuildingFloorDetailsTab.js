"use client"

import React, { useState } from 'react';
import { BsSignpost } from 'react-icons/bs';
import { FaArrowTrendUp, FaMoneyBillTrendUp, FaUsers } from 'react-icons/fa6';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';
import { PiNumberCircleOneBold } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { IoEye, IoEyeOutline } from 'react-icons/io5';
import TenantProfilePopup from '../../Popup/TenantProfilePopup';
import { useDisclosure } from '@heroui/react';

const BuildingFloorDetailsTab = () => {
    const [tenantProfile, setTenantProfile] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
            <div className="sm:p-5 p-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200 mt-5">
                <h3 className='text-xl text-priTextColor dark:text-zinc-200 text-center font-bold'>1st Floor</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-amber-100 text-amber-600">
                            1 A
                        </div>
                        <div>
                            <div className=" text-priColor"><span className=" text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className=" text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                    </div>
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-amber-100 text-amber-600">
                            1 B
                        </div>
                        <div>
                            <div className="text-danger"><span className="text-secTextColor">Tenant: </span>Not Available</div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                        <div className='text-white text-sm cursor-pointer bg-danger hover:bg-red-600 pt-1 pb-0.5 px-3 rounded-md absolute top-7 right-4'>Post To-let</div>
                    </div>
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-amber-100 text-amber-600">
                            1 C
                        </div>
                        <div>
                            <div className="text-priColor"><span className="text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                    </div>
                </div>
                <h3 className='text-xl text-priTextColor dark:text-zinc-200 font-bold mt-8 text-center'>2nd Floor</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                            2 A
                        </div>
                        <div>
                            <div className="text-priColor"><span className="text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                    </div>
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-indigo-100 text-indigo-600">
                            2 B
                        </div>
                        <div>
                            <div className="text-priColor"><span className="text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                    </div>
                </div>
                <h3 className='text-xl text-priTextColor dark:text-zinc-200 font-bold mt-8 text-center'>3nd Floor</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-600">
                            3 A
                        </div>
                        <div>
                            <div className="text-priColor"><span className="text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                        <div className='text-white text-sm cursor-pointer bg-danger hover:bg-red-600 pt-1 pb-0.5 px-3 rounded-md absolute top-7 right-4'>Post To-let</div>
                    </div>
                </div>
                <h3 className='text-xl text-priTextColor dark:text-zinc-200 font-bold mt-8 text-center'>4th Floor</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
                            4 A
                        </div>
                        <div>
                            <div className="text-priColor"><span className="text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                    </div>
                </div>
                <h3 className='text-xl text-priTextColor dark:text-zinc-200 font-bold mt-8 text-center'>5th Floor</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-2">
                    <div className="relative flex items-center space-x-3 px-3 sm:px-4 pt-5 pb-4 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                        <div className="flex items-center justify-center text-xl font-bold w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                            5 A
                        </div>
                        <div>
                            <div className="text-priColor"><span className="text-secTextColor">Tenant: </span>Shakil Ahmed </div>
                            <div className="text-priColor"><span className="text-secTextColor">Rent Cost: </span>৳ 16500 </div>
                        </div>
                        <IoEye onClick={onOpen} className='absolute cursor-pointer sm:top-8 top-7 right-3 sm:right-4 text-base border border-gray-200 p-1 w-7 h-7 rounded-full hover:bg-boxBgColor hover:text-priColor text-zinc-400' />
                    </div>
                </div>
            </div>
            <TenantProfilePopup onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />
        </>
    );
};

export default BuildingFloorDetailsTab;