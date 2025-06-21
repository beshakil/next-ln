"use client";

import { v4 as uuidv4 } from 'uuid';
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

const AddEditCondition = ({ isOpen, onOpenChange, onConfirm, selectedCondition }) => {

    const [condition, setCondition] = useState('');
    const [descriptions, setDescriptions] = useState(['']);

    useEffect(() => {
        if (selectedCondition) {
            setCondition(selectedCondition.condition || '');
            setDescriptions(selectedCondition.descriptions || ['']);
        } else {
            setCondition('');
            setDescriptions(['']);
        }
    }, [selectedCondition, isOpen]);

    const handleAddDescription = () => {
        setDescriptions([...descriptions, '']);
    };

    const handleDescriptionChange = (index, value) => {
        const updated = [...descriptions];
        updated[index] = value;
        setDescriptions(updated);
    };

    const handleRemoveDescription = (index) => {
        if (descriptions.length > 1) {
            const updated = descriptions.filter((_, i) => i !== index);
            setDescriptions(updated);
        }
    };

    const handleSave = (onClose) => {
        if (condition.trim() === '') return;
        const newCondition = {
            id: selectedCondition ? selectedCondition.id : uuidv4(),
            condition,
            descriptions,
        };
        onConfirm(newCondition);
        onClose();
    };

    return (
        <Modal size="md" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedCondition ? "Edit condition" : "Add condition"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2 -mt-2">
                                <div className='w-full'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Condition</p>
                                    <Input
                                        color='primary'
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter condition"
                                        value={condition}
                                        onChange={(e) => setCondition(e.target.value)}
                                    />
                                </div>
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Description</p>
                                    {descriptions.map((desc, index) => (
                                        <div key={index} className='flex gap-2 mb-2'>
                                            <Textarea
                                                className="col-span-12 md:col-span-6 !min-h-20"
                                                labelPlacement="outside"
                                                placeholder="Enter description"
                                                variant={"bordered"}
                                                radius="sm"
                                                color="primary"
                                                value={desc}
                                                onChange={(e) => handleDescriptionChange(index, e.target.value)}
                                            />
                                            <div className='flex gap-2 flex-col justify-center'>
                                                {index === descriptions.length - 1 && (
                                                    <IoMdAddCircle
                                                        onClick={handleAddDescription}
                                                        className="!bg-accent p-1 rounded text-white text-2xl mt-[1px] cursor-pointer"
                                                    />
                                                )}
                                                {descriptions.length > 1 && (
                                                    <FaTrashAlt
                                                        onClick={() => handleRemoveDescription(index)}
                                                        className="!bg-danger p-1 rounded text-white text-2xl mt-[1px] cursor-pointer"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='flex gap-2 justify-end pb-3'>
                                <ButtonComponent
                                    onClick={onClose}
                                    buttonClass="border border-gray-200 bg-transparent border border-gray-200-purple-500 !text-priColor hover:!bg-purple-500 hover:!text-zinc-50"
                                    buttonText="Cancel"
                                />
                                <ButtonComponent
                                    onClick={() => handleSave(onClose)}
                                    buttonClass=""
                                    buttonText={selectedCondition ? "Update condition" : "Save condition"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditCondition;
