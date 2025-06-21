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

const MechanicTypAddEdit = ({ isOpen, onOpenChange, onConfirm, selectedType }) => {

    return (
        <Modal size="md" isDismissable={false} isKeyboardDismissDisabled={false} placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedType ? "Edit type" : "Create Type"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2">
                                <div className='w-full'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Type name</p>
                                    <Input
                                        color='primary'
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter type name"
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
                                    buttonText={selectedType ? "Update type" : "Save type"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default MechanicTypAddEdit;