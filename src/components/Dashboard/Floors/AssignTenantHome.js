"use client";

import React, { useState } from 'react';
import { useDisclosure } from '@heroui/react';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import AddEditAssignTenant from './AddEditAssignTenant';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';
import { useTranslations } from "next-intl";
import AssignTenantDetailsPopup from './AssignTenantDetailsPopup';
import WarningPopup from '../../Popup/WarningPopup';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const floorData = [
    {
        floor: '1st Floor',
        flats: [
            { id: '1A', tenant: 'Shakil Ahmed Shajib', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
            { id: '1B', tenant: 'Not Available', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
            { id: '1C', tenant: 'Not Available', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
            { id: '1D', tenant: 'Not Available', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
        ]
    },
    {
        floor: '2nd Floor',
        flats: [
            { id: '2A', tenant: 'Shakil Ahmed Shajib', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
            { id: '2B', tenant: 'Not Available', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 }
        ]
    },
    {
        floor: '3rd Floor',
        flats: [
            { id: '3A', tenant: 'Shakil Ahmed Shajib', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 }
        ]
    },
    {
        floor: '4th Floor',
        flats: [
            { id: '4A', tenant: 'Shakil Ahmed Shajib', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
            { id: '4B', tenant: 'Not Available', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 }
        ]
    },
    {
        floor: '5th Floor',
        flats: [
            { id: '5A', tenant: 'Shakil Ahmed Shajib', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 }
        ]
    },
    {
        floor: '6th Floor',
        flats: [
            { id: '6A', tenant: 'Not Available', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 },
            { id: '6B', tenant: 'Shakil Ahmed Shajib', rent: 13000, gasBill: 13000, electricityBill: 13000, serviceCharge: 13000, otherBill: 13000 }
        ]
    },
];

const buildingList = [
    { value: 1, label: 'Building  Building Building1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const AssignTenantHome = () => {
    const t = useTranslations("buildingList");
    const [selectedAssignFlat, setSelectedAssignFlat] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    // Separate states for modals
    const { isOpen: isAddEditAssignTenantOpen, onOpen: onAddEditAssignTenantOpen, onOpenChange: onAddEditAssignTenantChange } = useDisclosure();
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isAssignViewDetailsOpen, onOpen: onAssignViewDetailsOpen, onOpenChange: onAssignViewDetailsChange } = useDisclosure();

    const filteredFloors = floorData.filter((floor) => {
        return (
            floor.floor.toLowerCase().includes(searchValue.toLowerCase()) ||
            floor.flats.some((flat) =>
                flat.tenant.toLowerCase().includes(searchValue.toLowerCase()) ||
                flat.id.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    });

    const handleAddClick = () => {
        setSelectedAssignFlat(null);
        onAddEditAssignTenantOpen();
    };

    const handleEditClick = (flat) => {
        setSelectedAssignFlat(flat);
        onAddEditAssignTenantOpen();
    };

    const handleViewClick = (flat) => {
        setSelectedAssignFlat(flat);
        onAssignViewDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="mt-16 block md:block lg:flex justify-between">
                <div className="block md:block lg:flex gap-4 w-auto md:w-auto lg:w-[50%]">
                    <p className="text-center md:text-center lg:text-left text-2xl font-bold text-priTextColor pt-1">Assign tenant</p>
                    <div className='mt-3 md:mt-3 lg:mt-0 lg:w-[45%]'>
                        <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom"
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
                        placeholder="Search flat & floors"
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonClass={"w-[40%] md:w-[40%] lg:w-[25%]"}
                        buttonText="Assign Tenant"
                    />
                </div>
            </div>
            <div className=''>
                {filteredFloors.length > 0 ? (
                    filteredFloors.map((floor, index) => (
                        <div key={index} className='my-6'>
                            <h3 className='sm:text-2xl text-xl text-priTextColor dark:text-zinc-200 text-center font-bold mb-1'>{floor.floor}</h3>
                            <div className="grid sm:gap-5 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                                {floor.flats.map((flat, flatIndex) => (
                                    <div key={flatIndex} className="w-auto bg-white border border-gray-200 lg:p-5 md:p-5 p-3 pt-0 md:pt-5 lg:pt-5 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                                        <div className='w-auto m-auto mt-1 md:mt-0 lg:mt-0 relative flex flex-row sm:flex-col gap-3 sm:gap-0 items-center sm:items-start'>
                                            <div className={`flex sm:m-auto m-0 items-center justify-center sm:text-3xl text-2xl font-bold sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-boxBgColor text-priHover mt-0 sm:mt-0`}>
                                                {flat.id}
                                            </div>
                                            <div className="absolute sm:-top-2 top-2 sm:-right-2 right-0 bg-green-100 text-green-700 px-2 pt-0.5 rounded text-xs md:text-xs lg:text-sm font-bold">
                                                <span>Total: </span>
                                                <span>{flat.rent + flat.gasBill + flat.electricityBill + flat.serviceCharge + flat.otherBill}</span>
                                            </div>
                                            <div className='relative'>
                                                <div className='pt-1 sm:pt-4 pb-0 sm:pb-2'>
                                                    <h2 className='text-priColor dark:text-purple-300 text-sm sm:text-xl font-bold text-left leading-6 sm:leading-7'>Shopno Chura</h2>
                                                </div>
                                                <div>
                                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Flat No: <span className='text-priColor dark:text-purple-300'>{flat.id}</span></p>
                                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Tenant: <span className='text-priColor dark:text-purple-300'>{flat.tenant}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className=" flex justify-center gap-2 pt-2">
                                            <ActionBtnComponent
                                                onClick={() => handleViewClick(flat)}
                                                buttonClass="!text-white !px-4 !py-1.5 !text-xs"
                                                buttonText={t("view")}
                                                startContent={<IoEye className='text-white text-base -mt-0.5 cursor-pointer' />}
                                            />
                                            <ActionBtnComponent
                                                onClick={() => handleEditClick(flat)}
                                                buttonClass="!text-white w-full !px-2.5 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                                buttonText={"Edit"}
                                                startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                                            />
                                            <ActionBtnComponent
                                                onClick={onDeleteWarningChange}
                                                buttonClass="!text-white w-full !px-2.5 !py-1.5 !text-xs !bg-red-500 hover:!bg-red-600"
                                                buttonText={"Delete"}
                                                startContent={<FaTrashAlt className='text-white text-xs -mt-0.5 cursor-pointer' />}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-zinc-600 dark:text-zinc-200 font-bold text-center py-20'>No floors found.</p>
                )}
            </div>

            <AddEditAssignTenant
                onOpen={onAddEditAssignTenantOpen}
                isOpen={isAddEditAssignTenantOpen}
                onOpenChange={onAddEditAssignTenantChange}
                selectedAssignFlat={selectedAssignFlat}
            />

            <AssignTenantDetailsPopup
                onOpen={onAssignViewDetailsOpen}
                isOpen={isAssignViewDetailsOpen}
                onOpenChange={onAssignViewDetailsChange}
                selectedAssignFlat={selectedAssignFlat}
            />

            <WarningPopup
                headingText="Delete assign tenant?"
                descriptionText="Are you sure you want to delete this ?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
            // onConfirm={() => console.log("clicked")}
            />
        </div>
    );
};

export default AssignTenantHome;
