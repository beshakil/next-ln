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
import ButtonComponent from '../../GlobalComponent/ButtonComponent';

const AddEditHousekeeper = ({ isOpen, onOpenChange, onConfirm, selectedHousekeeper }) => {

    return (
        <Modal size="md" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedHousekeeper ? "Edit housekeeper" : "Add housekeeper"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2 -mt-2">
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Name</p>
                                    <Input
                                        color='primary'
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter full name"
                                    />
                                </div>
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Phone</p>
                                    <Input
                                        color='primary'
                                        type="number"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">NID</p>
                                    <Input
                                        color='primary'
                                        type="number"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter NID number"
                                    />
                                </div>
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Address</p>
                                    <Textarea
                                        className="col-span-12 md:col-span-6 !min-h-20"
                                        labelPlacement="outside"
                                        placeholder="Enter address"
                                        variant={"bordered"}
                                        radius="sm"
                                        color="primary"
                                    />
                                </div>
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
                                    buttonText={selectedHousekeeper ? "Update housekeeper" : "Save housekeeper"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditHousekeeper;