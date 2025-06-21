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
import { FaTrashAlt } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';

const AddEditQuestion = ({ isOpen, onOpenChange, onConfirm, selectedInspection }) => {

    return (
        <Modal size="md" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedInspection ? "Edit question" : "Add question"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2 -mt-2">
                                <div className='w-full'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Write Inspection Question</p>
                                    <Textarea
                                        className="col-span-12 md:col-span-6 !min-h-20"
                                        labelPlacement="outside"
                                        placeholder="Enter inspection question"
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
                                    onClick={onConfirm}
                                    buttonClass=""
                                    buttonText={selectedInspection ? "Update condition" : "Save condition"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditQuestion;
