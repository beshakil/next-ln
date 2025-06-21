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
import { MdPayment, MdPayments, MdVerifiedUser } from "react-icons/md";
import ButtonComponent from '../GlobalComponent/ButtonComponent';
import { FaEdit, FaSms, FaTrashAlt } from 'react-icons/fa';
import { IoEye } from 'react-icons/io5';

const ActionsViewPopup = ({ isOpen, onOpenChange, headingText, onConfirm, onDeleteWarningChange }) => {
    return (
        <Modal size="md" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{headingText}</ModalHeader>
                        <ModalBody>
                            <div className="pb-2">
                                <div className='pb-10 pt-5 flex gap-2 flex-wrap'>
                                    <ButtonComponent
                                        onClick={onClose}
                                        buttonClass="!text-white !pb-1.5"
                                        buttonText="View invoice"
                                        startContent={<IoEye className='text-white text-lg -mt-0.5 cursor-pointer' />}
                                    />
                                    <ButtonComponent
                                        onClick={onClose}
                                        buttonClass="!bg-green-500 !text-white !pb-1.5 hover:!bg-green-600"
                                        buttonText="Edit invoice"
                                        startContent={<FaEdit className='text-white text-lg -mt-0.5 cursor-pointer' />}
                                    />
                                    <ButtonComponent
                                        onClick={onClose}
                                        buttonClass="!bg-yellow-500 !text-white !pb-1.5 hover:!bg-yellow-600"
                                        buttonText="Send due sms"
                                        startContent={<FaSms className='text-white text-lg -mt-0.5 cursor-pointer' />}
                                    />
                                    <ButtonComponent
                                        onClick={onClose}
                                        buttonClass="!bg-gray-500 !text-white !pb-1.5 hover:!bg-gray-600"
                                        buttonText="Receive payment"
                                        startContent={<MdPayment className='text-white text-lg -mt-0.5 cursor-pointer' />}
                                    />
                                    <ButtonComponent
                                        onClick={onClose}
                                        buttonClass="!text-white !pb-1.5"
                                        buttonText="View payment"
                                        startContent={<MdPayments className='text-white text-lg -mt-0.5 cursor-pointer' />}
                                    />
                                    <ButtonComponent
                                        onClick={onDeleteWarningChange}
                                        buttonClass="!bg-red-500 !text-white !pb-1.5 hover:!bg-red-600"
                                        buttonText="Delete"
                                        startContent={<FaTrashAlt className='text-white text-sm -mt-0.5 cursor-pointer' />}
                                    />
                                </div>
                                <div className='flex gap-2 justify-end'>
                                    <ButtonComponent
                                        onClick={onClose}
                                        buttonClass="border border-gray-200 bg-transparent border border-gray-200-purple-500 !text-priColor hover:!bg-purple-500 hover:!text-zinc-50"
                                        buttonText="Cancel"
                                    />
                                    <ButtonComponent
                                        onClick={onConfirm}
                                        buttonClass=""
                                        buttonText="Confirm"
                                    />
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ActionsViewPopup;