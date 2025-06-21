"use client";

import React, { useState } from 'react';
import { useDisclosure } from '@heroui/react';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import AddEditFloor from './AddEditSlot';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import dynamic from 'next/dynamic';
import { LuSquareParking } from 'react-icons/lu';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import carImage from '../../../assets/svg/cars.svg';
import AddEditSlot from './AddEditSlot';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const parkingData = [
    { id: 1, slot: 'P1', licenseNumber: 'DM-Kha-201315', color: 'Red', image: carImage, owner: 'Test user one', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Car', booked: true },
    { id: 2, slot: 'P2', licenseNumber: 'DM-Kha-201316', color: 'White', image: carImage, owner: 'Test user two', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Bike', booked: false },
    { id: 3, slot: 'P3', licenseNumber: 'DM-Kha-201317', color: 'Blue', image: carImage, owner: 'Test user three', mobileNumber: '01712345678', monthlyRent: 13000, type: 'Bike', booked: true },
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
];

const ParkingDetailsHome = () => {

    const [selectedParkingSlot, setSelectedParkingSlot] = useState();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const [searchValue, setSearchValue] = useState("");

    const filteredParkings = parkingData.filter((slot) => {
        return (
            slot.slot.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    const handleAddClick = () => {
        setSelectedParkingSlot(null);
        onOpen();
    };

    const handleEditClick = (slot) => {
        setSelectedParkingSlot(slot);
        onOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="mt-16 block md:block lg:flex justify-between">
                <div className="block md:block lg:flex gap-4 w-auto md:w-auto lg:w-[50%]">
                    <p className="text-center md:text-center lg:text-left text-2xl font-bold text-priTextColor pt-1">Parking slot</p>
                    <div className='mt-3 md:mt-3 lg:mt-0 lg:w-[45%]'>
                        <SelectOptionComponent
                            options={buildingList}
                            placeholder="Select a building"
                            menuPlacement="bottom"
                        />
                    </div>
                </div>
                <div className="flex lg:justify-end gap-2 mt-3 md:mt-3 lg:mt-0 md:w-auto lg:w-[50%]">
                    <SearchComponent
                        searchClass={"w-[60%] md:w-[60%] lg:w-[45%]"}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        cancelSearch={() => setSearchValue("")}
                        placeholder="Search slots"
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonClass={"w-[40%] md:w-[40%] lg:w-[25%]"}
                        buttonText="Add slots"
                        startContent={<LuSquareParking className='text-[18px]' />}
                    />
                </div>
            </div>
            <div className="">
                {filteredParkings.length > 0 ? (
                    <div className='my-6'>
                        <div className="grid sm:gap-5 gap-3 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 2xl:grid-cols-6">
                            {filteredParkings.map((parking, index) => (
                                <div key={index} className="w-auto bg-white border border-gray-200 lg:p-5 md:p-5 p-3 pt-3 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                                    <div className='w-auto m-auto relative flex flex-row sm:flex-col gap-3 sm:gap-0 items-center'>
                                        <div className={`flex sm:m-auto m-0 items-center justify-center text-lg font-bold w-16 h-16 rounded-full bg-boxBgColor text-priHover mt-0 sm:mt-0`}>
                                            P-{parking.id}
                                        </div>
                                        <div className='pt-2 pb-0'>
                                            <h2 className='text-priColor dark:text-purple-300 text-sm sm:text-base font-bold text-left leading-6 sm:leading-7'>Shopno Chura</h2>
                                        </div>
                                    </div>
                                    <div className="flex justify-center gap-3 pt-2">
                                        <ActionBtnComponent
                                            onClick={() => handleEditClick(parking)}
                                            buttonClass="!text-white w-full !px-2.5 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                            // buttonText={"Edit"}
                                            startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                                        />
                                        <ActionBtnComponent
                                            onClick={onDeleteWarningChange}
                                            buttonClass="!text-white w-full !px-2.5 !py-1.5 !text-xs !bg-red-500 hover:!bg-red-600"
                                            // buttonText={"Delete"}
                                            startContent={<FaTrashAlt className='text-white text-xs -mt-0.5 cursor-pointer' />}
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
            <AddEditSlot
                onOpen={onOpen}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                selectedParkingSlot={selectedParkingSlot}
            />
            <WarningPopup
                headingText="Delete parking slot?"
                descriptionText="Are you sure you want to delete this?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
            />
        </div>
    );
};

export default ParkingDetailsHome;
