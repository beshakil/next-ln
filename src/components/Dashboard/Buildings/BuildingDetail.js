
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams, usePathname } from 'next/navigation';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import Link from 'next/link';
import { FaBuildingUser, FaCircleInfo } from "react-icons/fa6";
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { TbListDetails } from "react-icons/tb";
import { IoArrowBackOutline, IoEye } from "react-icons/io5";
import GeneralTabCon from './GeneralTabCon';
import BuildingFloorDetailsTab from './BuildingFloorDetailsTab';
import { useTranslations } from "next-intl";
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const BuildingDetail = ({ buildings }) => {

    const t = useTranslations("buildingList");
    const [activeTab, setActiveTab] = useState('general');

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // console.log("pathname", pathname);

    // console.log("id", id);

    const building = buildings.find((b) => b.id === parseInt(id));

    if (!building) {
        return <p>Building not found!</p>;
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
                    <p className="sm:text-left text-center text-xl sm:text-2xl font-bold text-priTextColor mt-1">Building Details</p>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col gap-5 justify-between'>
                <div className='sm:w-[30%] w-full '>
                    <div
                        key={building.id}
                        className="w-auto sm:mt-5 mt-1.5 bg-white border border-gray-200 sm:p-5 p-3 border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700 mb-0 sm:mb-5"
                    >
                        <div className='w-auto flex sm:block gap-3 items-center'>
                            <Link href={`/dashboard/buildings/${building.id}`} className="border border-gray-200-lg sm:w-full">
                                <Image
                                    src={building.image}
                                    width={260}
                                    height={170}
                                    className="rounded-lg sm:w-full sm:min-w-0 min-w-[90px] w-[90px] sm:h-[170px] h-[90px] object-cover shadow-md -mt-0 sm:-mt-10"
                                    alt={`Picture of ${building.buildingName}`}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                    loading="lazy"
                                />
                            </Link>
                            <div>
                                <div className='pt-2 sm:pt-5 pb-0 sm:pb-3'>
                                    <h2 className='text-priColor dark:text-purple-300 text-lg sm:text-xl font-bold text-left leading-6 sm:leading-7'>{building.buildingName}</h2>
                                    <p className=' text-secTextColor dark:text-purple-300 text-[13px] sm:text-sm text-left'>{building.location}</p>
                                </div>
                                <div>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>{t('flat')}: <span className='text-priColor dark:text-purple-300'>{building.totalFlat}</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>{t('rentLeft')}: <span className='text-priColor dark:text-purple-300'>{building.totalFlat}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-5 pt-3">
                            <ActionBtnComponent
                                // onClick={console.log("clicked")}
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
                            <button className={`flex border border-gray-200 items-center w-auto justify-center sm:gap-2 gap-1 sm:py-2 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'general' ? 'bg-priColor text-white' : 'bg-white text-priColor'} rounded-lg`} onClick={() => setActiveTab('general')}>
                                <FaCircleInfo className="sm:text-xl text-base" />
                                <span className="mt-1">General</span>
                            </button>
                            <button className={`flex border border-gray-200 items-center justify-center w-full sm:gap-2 gap-1 py-1 sm:px-6 px-3 sm:text-base text-base ${activeTab === 'floorDetails' ? 'bg-priColor text-white' : 'bg-white  text-priColor'} rounded-lg`} onClick={() => setActiveTab('floorDetails')}>
                                <TbListDetails className="sm:text-xl text-base" />
                                <span className="mt-1">Floors & Tenants Details</span>
                            </button>
                        </div>
                    </div>
                    {
                        activeTab === 'general' ? <GeneralTabCon building={building} /> :
                            activeTab === 'floorDetails' ? <BuildingFloorDetailsTab building={building} /> : ""
                    }
                </div>
            </div>
        </div>
    );
};

export default BuildingDetail;
