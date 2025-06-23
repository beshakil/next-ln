"use client";

import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Textarea
} from "@heroui/react";
import { floorOptions } from '../../../data/floors';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import dynamic from 'next/dynamic';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import buildingOne from "../../../assets/webp/buildingOne.webp"
import { BiCloudUpload } from 'react-icons/bi';

const CalenderComponent= dynamic(
    () => import('../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);


const flatOptions = [
    { value: '1', label: '1A' },
    { value: '2', label: '1B' },
    { value: '3', label: '2A' },
    { value: '4', label: '2B' },
]

const tenantOptions = [
    { value: '1', label: 'Tenant 1' },
    { value: '2', label: 'Tenant 2' },
    { value: '3', label: 'Tenant 3' },
    { value: '4', label: 'Tenant 4' },
]

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
];

const AddEditMaintenance = ({ isOpen, onOpenChange, onConfirm, selectedMaintenance }) => {

    const [openingDate, setOpeningDate] = useState("");
    const [floors, setFloors] = useState([]);

    useEffect(() => {
        if (Array.isArray(floorOptions)) {
            const formattedFloors = floorOptions.map((floor) => ({
                value: floor.value,
                label: `${floor.label} (${floor.bn_name})`,
            }));
            setFloors(formattedFloors);
        }
    }, [floorOptions]);


    return (
        <Modal size="4xl" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedMaintenance ? "Edit maintenance" : "Add maintenance"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2">
                                <div className='flex sm:flex-row flex-col gap-3 items-center -mt-2'>
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">Date<span className='text-danger'>*</span></p>
                                        <CalenderComponent
                                            selectedDate={openingDate}
                                            setSelectedDate={setOpeningDate}
                                            placeholderText={"dd/MM/yyyy"}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select tenant</p>
                                        <SelectOptionComponent options={tenantOptions} placeholder="Select a tenant" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-2'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select building</p>
                                        <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select floor</p>
                                        <SelectOptionComponent options={floors} placeholder="Select a floor" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select flat</p>
                                        <SelectOptionComponent options={flatOptions} placeholder="Select a flat" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-2 sm:gap-3 items-center pt-2'>
                                    <div className='w-full sm:w-[50%]'>
                                        <p className="text-priColor dark:text-purple-300 text-base">Maintenance reason</p>
                                        <Textarea
                                            className="col-span-12 md:col-span-6 !min-h-20"
                                            labelPlacement="outside"
                                            placeholder="Enter maintenance note"
                                            variant={"bordered"}
                                            minRows={4}
                                            radius="sm"
                                            color="primary"
                                        />
                                    </div>
                                    <div className='w-full sm:w-[50%]'>
                                        <p className="text-priColor dark:text-purple-300 text-base">Attachment</p>
                                        <div className="flex gap-3 ">
                                            <div className="flex items-center justify-center sm:w-[75%] w-[70%]">
                                                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-24 sm:h-[100px] border border-gray-200-2 border border-gray-200-gray-300 border border-gray-200-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border border-gray-200-gray-600 dark:hover:border border-gray-200-gray-500">
                                                    <div className="flex flex-col items-center justify-center ppt-5 ppb-6">
                                                        <BiCloudUpload className="w-7 h-7 text-gray-500 dark:text-gray-400" />
                                                        <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                                                            <span className="font-semibold">Click to upload image</span>
                                                        </p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            SVG, PNG, JPG or GIF
                                                        </p>
                                                    </div>
                                                    <input id="dropzone-file" type="file" className="hidden" />
                                                </label>
                                            </div>
                                            <div className="relative border border-gray-200-lg sm:w-[25%] w-[30%] h-24 sm:h-[100px]">
                                                <Image
                                                    src={buildingOne}
                                                    width={260}
                                                    height={160}
                                                    className="rounded-lg w-full h-24 sm:h-[100px] object-cover"
                                                    alt={`Picture of building`}
                                                    style={{
                                                        objectFit: "cover",
                                                         borderRadius: "12px",
                                                    }}
                                                    loading="lazy"
                                                />
                                                <MdCancel className="text-2xl absolute -top-2 -right-2 text-red-500 rounded-full bg-white cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    selectedMaintenance &&
                                    <div className='flex sm:flex-row flex-col gap-3 items-center pt-2'>
                                        <div className="w-full">
                                            <p className="text-priColor dark:text-purple-300 text-base">Select status</p>
                                            <SelectOptionComponent options={statusOptions} placeholder="Select a status" menuPlacement="bottom" 
                                            // onChange={(e) => console.log(e)}
                                             />
                                        </div>
                                    </div>
                                }

                            </div>
                            <div className='flex gap-2 justify-end pb-3'>
                                <ButtonComponent
                                    onClick={onClose}
                                    buttonClass="border border-gray-200 bg-transparent border border-gray-200-purple-500 !text-priColor hover:!bg-purple-500 hover:!text-zinc-50"
                                    buttonText="Cancel"
                                />
                                <ButtonComponent
                                    onClick={onClose}
                                    buttonClass=""
                                    buttonText={selectedMaintenance ? "Update maintenance" : "Add maintenance"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditMaintenance;