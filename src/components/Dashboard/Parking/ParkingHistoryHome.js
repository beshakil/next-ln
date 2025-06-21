"use client";

import React, { useState } from 'react';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { useDisclosure } from '@heroui/react';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import { FaEdit } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic';
import carImage from '../../../assets/svg/cars.svg';
import bikeImage from '../../../assets/svg/bike.svg';
import cngImage from '../../../assets/svg/cng.svg';
import Image from 'next/image';
import AddEditParkingHistory from './AddEditParkingHistory';
import ParkingHistoryView from './ParkingHistoryView';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const parkingData = [
    { id: 1, slot: 'P1', licenseNumber: 'DM-Kha-201315', color: 'Red', image: carImage, owner: 'Test user one', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: true },
    { id: 2, slot: 'P2', licenseNumber: 'DM-Kha-201316', color: 'White', image: carImage, owner: '', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Bike', booked: false },
    { id: 3, slot: 'P3', licenseNumber: 'DM-Kha-201317', color: 'Blue', image: carImage, owner: 'Test user three', mobileNumber: '01712345678', monthlyRent: 13000, type: 'CNG', booked: true },
    { id: 4, slot: 'P4', licenseNumber: 'DM-Kha-201318', color: 'Yellow', image: carImage, owner: 'Test user four', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: false },
    { id: 5, slot: 'P5', licenseNumber: 'DM-Kha-201318', color: 'Yellow', image: carImage, owner: 'Test user four', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: true },
    { id: 7, slot: 'P7', licenseNumber: 'DM-Kha-201318', color: 'Yellow', image: carImage, owner: 'Test user four', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: true },
    { id: 8, slot: 'P8', licenseNumber: 'DM-Kha-201318', color: 'Yellow', image: carImage, owner: 'Test user four', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: true },
    { id: 9, slot: 'P9', licenseNumber: 'DM-Kha-201318', color: 'Yellow', image: carImage, owner: 'Test user four', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: true },
];

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const ParkingHistoryHome = () => {
    const [selectedParkingHistory, setSelectedParkingHistory] = useState(null);
    const t = useTranslations("buildingList");
    const { isOpen: isAddEditParkingHistoryOpen, onOpen: onAddEditParkingHistoryOpen, onOpenChange: onAddEditParkingHistoryChange } = useDisclosure();
    const { isOpen: isParkingHistoryOpen, onOpen: onParkingHistoryOpen, onOpenChange: onParkingHistoryChange } = useDisclosure();
    const [searchValue, setSearchValue] = useState("");

    const filteredParkings = parkingData.filter((slot) => {
        return (
            slot.licenseNumber.toLowerCase().includes(searchValue.toLowerCase()) ||
            slot.owner.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    const handleAddClick = () => {
        setSelectedParkingHistory(null);
        onAddEditParkingHistoryOpen();
    };

    const handleEditClick = (parking) => {
        setSelectedParkingHistory(parking);
        onAddEditParkingHistoryOpen();
    };

    const handleParkingHistoryClick = (parking) => {
        setSelectedParkingHistory(parking); 
        onParkingHistoryOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="mt-16 block md:block lg:flex justify-between">
                <div className="block md:block lg:flex gap-4 w-auto md:w-auto lg:w-[50%]">
                    <p className="text-center md:text-center lg:text-left text-2xl font-bold text-priTextColor pt-1">Parking history</p>
                    <div className='mt-3 md:mt-3 lg:mt-0 lg:w-[45%]'>
                        <SelectOptionComponent
                            options={buildingList}
                            placeholder="Select a building"
                            menuPlacement="bottom"
                        // onChange={(e) => console.log(e)}
                        />
                    </div>
                </div>
                <div className="flex lg:justify-end gap-2 mt-3 md:mt-3 lg:mt-0 md:w-auto lg:w-[50%]">
                    <SearchComponent
                        searchClass={"w-[60%] md:w-[60%] lg:w-[45%]"}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        cancelSearch={() => setSearchValue("")}
                        placeholder="Search flat & parkings..."
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonClass={"w-[40%] md:w-[40%] lg:w-[25%]"}
                        buttonText="Add History"
                    />
                </div>
            </div>
            {/* <div className=''>
                {filteredParkings.length > 0 ? (
                    filteredParkings.map((parking, index) => (
                        <div key={index} className='my-6'>
                            <h3 className='sm:text-2xl text-xl text-priTextColor dark:text-zinc-200 text-center font-bold mb-1'>{parking.parking}</h3>
                            <div className="grid sm:gap-5 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                                {parking.map((flat, index) => (
                                    <div key={index} className="w-auto bg-white border border-gray-200 lg:p-5 md:p-5 p-3 pt-0 md:pt-5 lg:pt-5 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                                        <div className='w-auto m-auto mt-1 md:mt-0 lg:mt-0 relative flex flex-row sm:flex-col gap-3 sm:gap-0 items-center sm:items-start'>
                                            <div className={`flex sm:m-auto m-0 items-center justify-center sm:text-3xl text-2xl font-bold sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-boxBgColor text-priHover mt-0 sm:mt-0`}>
                                                {flat.id}
                                            </div>
                                            {
                                                flat.tenant === "Not Available" &&
                                                <div className="absolute sm:-top-2 top-2 sm:-right-2 right-0 bg-danger text-white px-2 pt-0.5 rounded text-xs md:text-xs lg:text-sm">
                                                    To-let post
                                                </div>
                                            }
                                            <div>
                                                <div className='pt-2 sm:pt-4 pb-0 sm:pb-2'>
                                                    <h2 className='text-priColor dark:text-purple-300 text-sm sm:text-xl font-bold text-left leading-6 sm:leading-7'>Shopno Chura</h2>
                                                </div>
                                                <div>
                                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Flat No: <span className='text-priColor dark:text-purple-300'>{flat.id}</span></p>
                                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Tenant:
                                                        <span className={`${flat.tenant === 'Not Available' ? 'text-danger' : 'text-priColor'}`}> {flat.tenant}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-2 pt-2">
                                            <ActionBtnComponent
                                                // onClick={() => { onparkingHistoryOpen() }}
                                                buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs"
                                                buttonText={t("view")}
                                                startContent={<IoEye className='text-white text-base -mt-0.5 cursor-pointer' />}
                                            />
                                            <ActionBtnComponent
                                                // onClick={() => handleEditClick(flat)}
                                                buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                                buttonText={"Edit"}
                                                startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-zinc-600 dark:text-zinc-200 font-bold text-center py-20'>No parkings found.</p>
                )}
            </div> */}
            <div className="">
                {filteredParkings.length > 0 ? (
                    <div className='my-6'>
                        <div className="grid sm:gap-5 gap-3 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
                            {filteredParkings.map((parking, index) => (
                                <div key={index} className="w-auto bg-white border border-gray-200 lg:p-5 md:p-5 p-3 pt-0 sm:pt-3 md:pt-5 lg:pt-5 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                                    <div className='w-auto m-auto mt-1 md:mt-0 lg:mt-0 relative flex flex-row sm:flex-col gap-3 sm:gap-0 items-center sm:items-start'>
                                        <div className={`flex sm:m-auto m-0 items-center justify-center sm:text-3xl text-2xl font-bold sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-boxBgColor text-priHover mt-0 sm:mt-0`}>
                                            {
                                                parking.type === 'Car' ? <Image src={carImage} alt="car-image" className='w-12 h-12' /> : parking.type === "CNG" ? <Image src={cngImage} alt="car-image" className='w-12 h-12' /> : <Image src={bikeImage} alt="car-image" className='w-12 h-12' />
                                            }
                                        </div>
                                        {
                                            !parking.booked ?
                                                <div className="absolute sm:top-0 top-2 right-0 bg-secColor text-white px-2 pt-0.5 rounded text-xs">
                                                    Available
                                                </div> :
                                                <div className="absolute sm:top-0 top-2 right-0 bg-danger text-white px-2 pt-0.5 rounded text-xs">
                                                    Booked
                                                </div>
                                        }
                                        <div>
                                            <div className='pt-2 sm:pt-4 pb-0 sm:pb-2'>
                                                <h2 className='text-priColor dark:text-purple-300 text-sm sm:text-base font-bold text-left leading-6 sm:leading-7'>{parking.licenseNumber}</h2>
                                            </div>
                                            <div>
                                                <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Slot:
                                                    <span className='bg-priColor text-white px-2 pt-[4px] pb-[2px] rounded text-xs sm:text-sm ml-2 dark:text-purple-300'>P-{parking.id}</span></p>
                                                <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Owner: <span className={`${parking.owner === '' ? 'text-danger' : 'text-priColor'}`}>
                                                    {parking.owner === "" ? "Not assign" : parking.owner}
                                                </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-2 pt-2">
                                        <ActionBtnComponent
                                            onClick={() => handleParkingHistoryClick(parking)}
                                            buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs"
                                            buttonText={t("view")}
                                            startContent={<IoEye className='text-white text-base -mt-0.5 cursor-pointer' />}
                                        />
                                        <ActionBtnComponent
                                            onClick={() => handleEditClick(parking)}
                                            buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                            buttonText={"Edit"}
                                            startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className='text-zinc-600 dark:text-zinc-200 font-bold text-center py-20'>No parking slots found.</p>
                )}
            </div>
            <AddEditParkingHistory
                selectedParkingHistory={selectedParkingHistory}
                onOpen={onAddEditParkingHistoryOpen}
                isOpen={isAddEditParkingHistoryOpen}
                onOpenChange={onAddEditParkingHistoryChange}
            />
            <ParkingHistoryView
                selectedParkingHistory={selectedParkingHistory}
                onOpen={onParkingHistoryOpen}
                isOpen={isParkingHistoryOpen}
                onOpenChange={onParkingHistoryChange}
            />
        </div>
    );
};

export default ParkingHistoryHome;