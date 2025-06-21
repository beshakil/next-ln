"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";
import Image from 'next/image';
import userImage from '../../assets/jpg/userImage.jpeg'
import { MdCall, MdEmail, MdLocationOn, MdVerifiedUser } from "react-icons/md";

const TenantProfilePopup = ({ onOpen, isOpen, onOpenChange }) => {
    return (
        <Modal size="sm" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-xl">Tenant</ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col items-center pb-2">
                                <div className='w-24 h-24 rounded-full shadow-lg mb-5'>
                                    <Image
                                        src={userImage}
                                        width={96}
                                        height={96}
                                        className="rounded-full shadow-lg w-24 h-24 object-cover"
                                        alt={`Picture of tenant`}
                                        loading="lazy"
                                    />
                                </div>
                                <h5 className="mb-1 text-xl text-priTextColor font-bold dark:text-white flex items-center gap-1">Bonnie Green <span className='-mt-1 text-green-600'><MdVerifiedUser /></span></h5>
                                <div className='flex gap-2'>
                                    <p className="text-base -mt-1 text-secTextColor dark:text-purple-300">User ID:</p>
                                    <p className="text-base text-priColor dark:text-gray-400 -mt-1">20125</p>
                                </div>
                                <div className="pt-5">
                                    <div className='flex gap-1 items-center pb-2'>
                                        <p className=" text-secTextColor dark:text-zinc-200">
                                            <span>
                                                <MdLocationOn className='text-base inline-block text-priColor dark:text-zinc-200 -mt-1' />
                                            </span>
                                            <span className=" text-priColor dark:text-purple-300">Address: </span>
                                            Jashimuddin, Airport, Uttara, Dhaka, 1230
                                        </p>
                                    </div>
                                    <div className='flex gap-1 items-center pb-2'>
                                        <MdEmail className='text-base text-priColor dark:text-zinc-200 -mt-1' />
                                        <p className=" text-secTextColor dark:text-zinc-200">
                                            <span className="text-priColor dark:text-purple-300">Email: </span>
                                            dev.shakilshajib@gmail.coom
                                        </p>
                                    </div>
                                    <div className='flex gap-1 items-center'>
                                        <MdCall className='text-base text-priColor dark:text-zinc-200 -mt-1' />
                                        <p className=" text-secTextColor dark:text-zinc-200">
                                            <span className="text-priColor dark:text-purple-300">Mobile: </span>
                                            01303263591
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default TenantProfilePopup;