"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import { buildings } from '../../../data/buildings';
import BuildingAddEdit from './BuildingAddEdit';
import { useDisclosure } from '@heroui/react';
import { useTranslations } from "next-intl";
import { IoEye } from 'react-icons/io5';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import WarningPopup from '../../Popup/WarningPopup';

const BuildingList = () => {
    const t = useTranslations("buildingList");
    const [searchValue, setSearchValue] = useState("");
    const [selectedBuilding, setSelectedBuilding] = useState(null);

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();

    // Filter buildings based on the search value
    const filteredBuildings = buildings.filter((building) => {
        return (
            building.buildingName.toLowerCase().includes(searchValue.toLowerCase()) ||
            building.location.toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    const handleAddClick = () => {
        setSelectedBuilding(null);
        onOpen();
    };

    const handleEditClick = (building) => {
        setSelectedBuilding(building);
        onOpen();
    };

    return (
        <>
            {/* <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
                <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                    <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%] mt-1 sm:mt-0">
                        <p className="sm:text-left text-center text-xl sm:text-2xl font-bold text-priTextColor">{t('BuildList')}</p>
                    </div> */}
            <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
                <div className="mt-16 block md:block lg:flex justify-between">
                    <div className="block md:block lg:flex gap-4 w-auto md:w-auto lg:w-[50%]">
                        <p className="text-center md:text-center lg:text-left text-2xl font-bold text-priTextColor pt-1">{t('BuildList')}</p>
                    </div>
                    <div className="flex lg:justify-end gap-2 mt-3 md:mt-3 lg:mt-0 md:w-auto lg:w-[50%]">
                        <SearchComponent
                            searchClass={"w-[60%] md:w-[60%] lg:w-[45%]"}
                            searchValue={searchValue}
                            setSearchValue={setSearchValue}
                            cancelSearch={() => setSearchValue("")}
                            placeholder={t('searchBuildings')}
                        />
                        <ButtonComponent
                            onClick={handleAddClick}
                            buttonClass={"w-[40%] md:w-[40%] lg:w-[25%]"}
                            buttonText={t("buildingAdd")}
                        />
                    </div>
                </div>
                <div className="grid sm:gap-5 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-10">

                    {filteredBuildings.length > 0 ? (
                        filteredBuildings.map((building) => (
                            <div
                                key={building.id}
                                className="w-auto bg-white border sm:p-5 p-3 border-gray-200 rounded-lg dark:bg-gray-900 dark:border-gray-700 duration-300 ease-in-out transition-transform transform hover:-translate-y-2 mb-0 sm:mb-5"
                            >
                                <div className='w-auto flex sm:block gap-3 items-center'>
                                    <Link href={`/dashboard/buildings/${building.id}`} className="border-lg sm:w-full">
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
                                <div className="flex justify-center gap-3 pt-3">
                                    <Link className='w-fulll' href={`/dashboard/buildings/${building.id}`}>
                                        <ActionBtnComponent
                                            // onClick={console.log("clicked")}
                                            buttonClass="!text-white w-full !px-4 !py-1.5 !text-xs"
                                            buttonText={t("view")}
                                            startContent={<IoEye className='text-white text-base -mt-0.5 cursor-pointer' />}
                                        />
                                    </Link>
                                    <ActionBtnComponent
                                        onClick={() => handleEditClick(building)}
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
                        <div className="col-span-full text-center text-zinc-600 dark:text-zinc-200 mt-40">
                            {t('searchResult')}
                        </div>
                    )}
                </div>
            </div>
            <BuildingAddEdit
                selectedBuilding={selectedBuilding}
                isOpen={isOpen}
                onOpen={onOpen}
                onOpenChange={onOpenChange} />
            <WarningPopup
                headingText="Delete building request?"
                descriptionText="Are you sure you want to delete this?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                // onConfirm={() => console.log("clicked")}
            />
        </>
    );
};

export default BuildingList;
