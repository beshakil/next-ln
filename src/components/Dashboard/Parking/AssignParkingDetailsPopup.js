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
import carImage from '../../../assets/svg/cars.svg';
import bikeImage from '../../../assets/svg/bike.svg';
import cngImage from '../../../assets/svg/cng.svg';

const AssignParkingDetailsPopup = ({ onOpen, isOpen, onOpenChange, selectedAssignParking }) => {
    return (
        <Modal size="md" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-xl">Parking assign details</ModalHeader>
                        <ModalBody>
                            <div className='relative pb-3'>
                                <div className='flex items-center justify-center gap-5'>
                                    <div className={`flex sm:m-auto m-0 items-center justify-center sm:text-3xl text-2xl font-bold sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-boxBgColor text-priHover mt-0 sm:mt-0`}>
                                        {
                                            selectedAssignParking.type === 'Car' ? <Image src={carImage} alt="car-image" className='w-12 h-12' /> : selectedAssignParking.type === "CNG" ? <Image src={cngImage} alt="car-image" className='w-12 h-12' /> : <Image src={bikeImage} alt="car-image" className='w-12 h-12' />
                                        }
                                    </div>

                                </div>
                                <div className='flex flex-col gap-0 items-center pt-4 pb-3'>
                                    <h5 className="mb-1 text-xl text-priTextColor font-bold dark:text-white flex items-center gap-1">DM-Kha-201315</h5>
                                    <div className='flex gap-2'>
                                        <p className="text-sm -mt-1 text-secTextColor dark:text-purple-300">Vehicle: <span className="text-sm text-priColor dark:text-gray-400 -mt-1">Cars</span></p>
                                        <p className="text-sm -mt-1 text-secTextColor dark:text-purple-300">Color: <span className="text-sm text-priColor dark:text-gray-400 -mt-1">Red</span></p>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Parking slot: <span className='bg-priColor text-white px-2 pt-[4px] pb-[2px] rounded text-xs sm:text-sm ml-2 dark:text-purple-300'>P-1</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Building name: <span className='text-priColor dark:text-purple-300'>Shopno Chura</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Owner type: <span className='text-priColor dark:text-purple-300'>Tenant</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Owner name: <span className='text-priColor dark:text-purple-300'>Test user one</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Floor & flat no: <span className='text-priColor dark:text-purple-300'>1st Floor, 1C</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>NID: <span className='text-priColor dark:text-purple-300'>98766545</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Mobile: <span className='text-priColor dark:text-purple-300'>01234566789</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Start date: <span className='text-priColor dark:text-purple-300'>13-01-2023</span></p>

                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>End date: <span className='text-priColor dark:text-purple-300'>Currently present</span></p>
                                </div>
                                <div className=" bg-green-100 text-green-700 px-2 pt-2 pb-1.5 rounded-md text-base font-bold mt-3 text-center">
                                    <span>Monthly rent: </span>
                                    <span>৳ 500</span>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AssignParkingDetailsPopup;