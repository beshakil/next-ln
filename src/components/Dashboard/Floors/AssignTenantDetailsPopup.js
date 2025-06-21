"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";
import Image from 'next/image';
import { MdCall, MdEmail, MdLocationOn, MdVerifiedUser } from "react-icons/md";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import userImage from '../../../assets/jpg/userImage.jpeg'

const AssignTenantDetailsPopup = ({ onOpen, isOpen, onOpenChange, selectedAssignFlat }) => {
    return (
        <Modal size="md" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-xl">Tenant assign details</ModalHeader>
                        <ModalBody>
                            <div className='relative pb-3'>
                                <div className='flex items-center justify-center gap-5'>
                                    <div className={`flex items-center justify-center sm:text-3xl text-2xl font-bold w-20 h-20 rounded-full bg-boxBgColor text-priHover`}>
                                        {selectedAssignFlat.id}
                                    </div>
                                    <BsArrowsCollapseVertical className='text-4xl text-priHover' />
                                    <div className='w-20 h-20 rounded-full'>
                                        <Image
                                            src={userImage}
                                            width={96}
                                            height={96}
                                            className="rounded-full w-20 h-20 object-cover"
                                            alt={`Picture of tenant`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-0 items-center pt-4 pb-3'>
                                    <h5 className="mb-1 text-xl text-priTextColor font-bold dark:text-white flex items-center gap-1">Bonnie Green <span className='-mt-1 text-green-600'><MdVerifiedUser /></span></h5>
                                    <div className='flex gap-2'>
                                        <p className="text-sm -mt-1 text-secTextColor dark:text-purple-300">Tenant Id:</p>
                                        <p className="text-sm text-priColor dark:text-gray-400 -mt-1">20125</p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Mobile: <span className='text-priColor dark:text-purple-300'>01234566789</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Building Name: <span className='text-priColor dark:text-purple-300'>Shopno Chura</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Flat No: <span className='text-priColor dark:text-purple-300'>1st Floor, {selectedAssignFlat.id}</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Start Date: <span className='text-priColor dark:text-purple-300'>13-01-2023</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>End date: <span className='text-priColor dark:text-purple-300'>Currently present</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Rent: <span className='text-priColor dark:text-purple-300'>৳ {selectedAssignFlat.rent}</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Gas Bill: <span className='text-priColor dark:text-purple-300'>৳ {selectedAssignFlat.gasBill}</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Electricity Bill: <span className='text-priColor dark:text-purple-300'>৳ {selectedAssignFlat.electricityBill}</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Service Charge: <span className='text-priColor dark:text-purple-300'>৳ {selectedAssignFlat.serviceCharge}</span></p>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Others Bill: <span className='text-priColor dark:text-purple-300'>৳ {selectedAssignFlat.otherBill}</span></p>
                                </div>
                                <div className=" bg-green-100 text-green-700 px-2 pt-2 pb-1.5 rounded-md text-base font-bold mt-3 text-center">
                                    <span>Total amount: </span>
                                    <span>৳ {selectedAssignFlat.rent + selectedAssignFlat.gasBill + selectedAssignFlat.electricityBill + selectedAssignFlat.serviceCharge + selectedAssignFlat.otherBill}</span>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AssignTenantDetailsPopup;