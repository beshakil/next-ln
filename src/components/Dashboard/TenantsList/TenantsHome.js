"use client";

import React, { useState } from 'react';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import Link from 'next/link';
import { tenantsData } from '../../../data/tenants';
import Image from 'next/image';
import { MdVerifiedUser } from 'react-icons/md';
import { useDisclosure } from "@heroui/react";
import AddEditTenants from './AddEditTenants';
import { useTranslations } from "next-intl";
import { IoEye } from 'react-icons/io5';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import WarningPopup from '../../Popup/WarningPopup';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const TenantsHome = () => {
    const t = useTranslations("buildingList");
    const [selectedTenant, setSelectedTenant] = useState(null);
    const [tenantProfile, setTenantProfile] = useState(false);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const [searchValue, setSearchValue] = useState("");
    const [tenants, setTenants] = useState(tenantsData);

    const handleStatusChange = (tenant, status) => {
        // Update the tenant's status (you can perform any necessary API calls or state management here)
        const updatedTenants = tenants.map((t) =>
            t.id === tenant.id ? { ...t, activeStatus: status } : t
        );
        setTenants(updatedTenants); // Update the tenants state to reflect the change
    };

    const filteredTenants = tenants.filter((tenant) => {
        return (
            tenant.name.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    const handleAddClick = () => {
        setSelectedTenant(null);
        onOpen();
    };

    const handleEditClick = (tenant) => {
        setSelectedTenant(tenant);
        onOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="mt-16 block md:block lg:flex justify-between">
                <div className="block md:block lg:flex gap-4 w-auto md:w-auto lg:w-[50%]">
                    <p className="text-center md:text-center lg:text-left text-2xl font-bold text-priTextColor pt-1">Tenants</p>
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
                        placeholder="Search tenants"
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonClass={"w-[40%] md:w-[40%] lg:w-[25%]"}
                        buttonText="Add tenants"
                    />
                </div>
            </div>
            <div className="grid sm:gap-5 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-5">
                {filteredTenants.length > 0 ? (
                    filteredTenants.map((tenant) => (
                        <div key={tenant.id} className="w-auto bg-white border border-gray-200 sm:p-5 p-3 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                            <div className='w-auto'>
                                <Link href={`/dashboard/tenants/${tenant.id}`} className="flex m-auto sm:w-20 sm:h-20 w-16 h-16 rounded-full my-1">
                                    <Image
                                        src={tenant.image}
                                        width={80}
                                        height={80}
                                        className="rounded-full sm:w-20 sm:h-20 w-16 h-16 object-cover"
                                        alt={`Picture of ${tenant.name}`}
                                        loading="lazy"
                                    />
                                </Link>
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
                                <Link className='w-full' href={`/dashboard/tenants/${tenant.id}`}>
                                    <ActionBtnComponent
                                        buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs"
                                        buttonText={t("view")}
                                        startContent={<IoEye className='text-white text-base -mt-0.5 cursor-pointer' />}
                                    />
                                </Link>
                                <ActionBtnComponent
                                    onClick={() => handleEditClick(tenant)}
                                    buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                    buttonText={t("edit")}
                                    startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                                />
                                <ActionBtnComponent
                                    onClick={onDeleteWarningOpen}
                                    buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs !bg-red-500 hover:!bg-red-600"
                                    buttonText={t("delete")}
                                    startContent={<FaTrashAlt className='text-white text-xs -mt-0.5 cursor-pointer' />}
                                />
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center text-zinc-600 dark:text-zinc-200">
                        No tenants found matching your search.
                    </div>
                )}
            </div>
            <AddEditTenants
                selectedTenant={selectedTenant}
                onOpen={onOpen}
                isOpen={isOpen}
                onOpenChange={onOpenChange} />

            <WarningPopup
                headingText="Delete tenant request?"
                descriptionText="Are you sure you want to delete this tenant?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
            // onConfirm={() => console.log("clicked")}
            />
        </div>
    );
};

export default TenantsHome;