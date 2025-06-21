"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from "@heroui/react";
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import carImage from '../../../assets/svg/cars.svg';
import bikeImage from '../../../assets/svg/bike.svg';
import cngImage from '../../../assets/svg/cng.svg';

const data = [
    {
        date: "April 2022",
        title: "Project Concept",
        description:
            "The Crypto Group is established. Start of our project concept.",
    },
    {
        date: "May 2022",
        title: "Platform Launch",
        description:
            "Our trading platform is launched with full solutions in USA and Europe.",
    },
    {
        date: "June 2022",
        title: "Published Whitepaper",
        description:
            "Our Whitepaper is released to our investors, clients and beta users",
    },
    {
        date: "August 2022",
        title: "First Pre-Sale",
        description:
            "Start of the ICO token first pre-sale. Test advertising campaign.",
    },
    {
        date: "September 2022",
        title: "Mobile App Release",
        description:
            "Our Mobile App is released and its avilable in iOS and Android devices. ",
    },
    {
        date: "Now",
        title: "ICO Launch",
    },
];

const ParkingHistoryView = ({ isOpen, onOpenChange, selectedParkingHistory }) => {
    const t = useTranslations("addEditBuilding");
    return (
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} scrollBehavior={"inside"} size={"xl"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">Parking history</ModalHeader>
                        <ModalBody>
                            <div className="relative max-w-xl my-2 lg:max-w-3xll before:absolute before:top-0 before:w-1 before:h-full before:left-2 before:bg-purple-500">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative pl-8 mb-12">
                                        <div className="absolute -top-[2px] left-0 w-5 h-5 bg-white border border-gray-200-4 border border-gray-200-purple-500 rounded-full dark:bg-slate-900"></div>
                                        <p
                                            className={`text-sm tracking-wide text-priColor uppercase text-left lg:pr-8`}>
                                            {item.date} - {item.date}
                                        </p>
                                        <div className={`lg:w-[70%] lg:-mt-1 text-left`}>
                                            <div className='flex gap-2 items-center pt-2'>
                                                <div className='w-12 h-12 rounded-full bg-boxBgColor text-priHover flex items-center justify-center'>
                                                    {
                                                        selectedParkingHistory?.type === 'Car' ? <Image src={carImage} alt="car-image" className='w-8 h-8' /> : selectedParkingHistory?.type === "CNG" ? <Image src={cngImage} alt="car-image" className='w-8 h-8' /> : <Image src={bikeImage} alt="car-image" className='w-8 h-8' />
                                                    }
                                                </div>
                                                <div>
                                                    <h4 className="sm:text-base text-sm text-priTextColor dark:text-zinc-200">
                                                        Shakil Ahmed
                                                    </h4>
                                                    <p className='text-xs sm:text-sm text-secTextColor dark:text-zinc-200'>
                                                        <span className='text-secTextColor'>Tenant ID: <span className='text-priColor'>20125</span></span>
                                                    </p>

                                                </div>
                                            </div>
                                            <div className='ml-14'>
                                                <p className='text-xs sm:text-sm text-secTextColor dark:text-zinc-200'>
                                                    <span className='text-secTextColor'>Car number: <span className='text-priColor'>DM-Kha-201315</span></span>
                                                </p>
                                                <p className='text-xs sm:text-sm text-secTextColor dark:text-zinc-200'>
                                                    <span className='text-secTextColor'>Mobile: <span className='text-priColor'>1234567890</span></span>
                                                </p>
                                                <p className='text-xs sm:text-sm text-secTextColor dark:text-zinc-200'>
                                                    <span className='text-secTextColor'>NID: <span className='text-priColor'>123456</span></span>
                                                </p>
                                                <p className='text-xs sm:text-sm text-secTextColor dark:text-zinc-200'>
                                                    <span className='text-secTextColor'>Address: <span className='text-priColor'>Uttara, Dhaka</span></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ModalBody>
                        <ModalFooter className="pb-6">
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ParkingHistoryView;