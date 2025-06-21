"use client";

import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
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

const statusOptions = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
];

const genderOptions = [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
];

const roleOptions = [
    { label: "Manager", value: "manager" },
    { label: "Housekeeper", value: "housekeeper" },
];

const AddEditStaff = ({ isOpen, onOpenChange, onConfirm, selectedStaff }) => {

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
        <Modal size="5xl" isDismissable={false} isKeyboardDismissDisabled={false} placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedStaff ? "Edit staff" : "Add staff"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2">
                                <div className='flex sm:flex-row flex-col gap-3 items-center -mt-2'>
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">Joining Date<span className='text-danger'>*</span></p>
                                        <CalenderComponent
                                            selectedDate={openingDate}
                                            setSelectedDate={setOpeningDate}
                                            placeholderText={"dd/MM/yyyy"}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Staff Name</p>
                                        <Input
                                            color='primary'
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">Birthday<span className='text-danger'>*</span></p>
                                        <CalenderComponent
                                            selectedDate={openingDate}
                                            setSelectedDate={setOpeningDate}
                                            placeholderText={"dd/MM/yyyy"}
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Floor</p>
                                        <SelectOptionComponent options={floors} placeholder="Select a floor" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Gender</p>
                                        <SelectOptionComponent options={genderOptions} placeholder="Select a gender" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Fathers Name</p>
                                        <Input
                                            color='primary'
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter fathers name"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Mothers Name</p>
                                        <Input
                                            color='primary'
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter mothers name"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">NID No</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter NID number"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Mobile number</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter mobile number"
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Email</p>
                                        <Input
                                            color='primary'
                                            type="email"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter email address"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Staff ID</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter staff ID"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <div className='flex justify-between'>
                                            <p className="text-priColor dark:text-purple-300 text-base">Role</p>
                                            {/* <button className='bg-priColor text-white dark:text-purple-300 text-xs rounded px-2 h-5 pt-0.5'>+ Add new</button> */}
                                        </div>
                                        <SelectOptionComponent options={roleOptions} placeholder="Select a role" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Status</p>
                                        <SelectOptionComponent options={statusOptions} placeholder="Select a status" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Basic Salary</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter salary"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">House Rent</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter house rent"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Mobile Allowance</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter mobile allowance"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Other Allowance</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter other allowance"
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-2 sm:gap-3 items-center pt-4'>
                                    <div className='w-full sm:w-[50%]'>
                                        <p className="text-priColor dark:text-purple-300 text-base">Address</p>
                                        <Textarea
                                            className="col-span-12 md:col-span-6 !min-h-20"
                                            labelPlacement="outside"
                                            placeholder="Enter address"
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
                                                        border border-gray-200Radius: "12px",
                                                    }}
                                                    loading="lazy"
                                                />
                                                <MdCancel className="text-2xl absolute -top-2 -right-2 text-red-500 rounded-full bg-white cursor-pointer" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* {
                                    selectedStaff &&
                                    <div className='flex sm:flex-row flex-col gap-3 items-center pt-2'>
                                        <div className="w-full">
                                            <p className="text-priColor dark:text-purple-300 text-base">Select status</p>
                                            <SelectOptionComponent options={statusOptions} placeholder="Select a status" menuPlacement="bottom" onChange={(e) => console.log(e)} />
                                        </div>
                                    </div>
                                } */}

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
                                    buttonText={selectedStaff ? "Update staff" : "Add staff"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditStaff;