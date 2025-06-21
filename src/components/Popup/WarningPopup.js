"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";
import ButtonComponent from '../GlobalComponent/ButtonComponent';
import { toast } from 'react-toastify';

const WarningPopup = ({ isOpen, onOpenChange, headingText, onConfirm, descriptionText }) => {

    return (
        <Modal size="sm" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{headingText}</ModalHeader>
                        <ModalBody>
                            <div className="pb-2">
                                <div className='pb-10 pt-5'>
                                    <p className='text-priColor'>{descriptionText}</p>
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

export default WarningPopup;