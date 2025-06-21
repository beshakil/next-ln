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
import { floorOptions } from '../../../data/floors';
import { toast } from 'react-toastify';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const mechanicType = [
    { label: "Electrician", value: "electrician" },
    { label: "Plumber", value: "plumber" },
];

const AddEditMechanic = ({ isOpen, onOpenChange, onConfirm, selectedMechanic }) => {

    const [openingDate, setOpeningDate] = useState("");
    const [floors, setFloors] = useState([]);

    useEffect(() => {
        if (Array.isArray(floorOptions)) {
            const formattedFloors = floorOptions.map((floor) => ({
                value: floor.value,
                label: `${floor.label} (${floor.bn_name})`,
            }));
            setFloors(formattedFloors);
        }
    }, [floorOptions]);


    return (
        <Modal size="xl" isDismissable={false} isKeyboardDismissDisabled={false} placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedMechanic ? "Edit mechanic" : "Add mechanic"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2 -mt-2">
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Name</p>
                                        <Input
                                            color='primary'
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter full name"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Type</p>
                                        <SelectOptionComponent options={mechanicType} placeholder="Select a type" menuPlacement="bottom" 
                                        // onChange={(e) => console.log(e)}
                                         />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Phone</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter phone number"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Working area</p>
                                        <Input
                                            color='primary'
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter working area"
                                        />
                                    </div>
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
                                    buttonText={selectedMechanic ? "Update mechanic" : "Save mechanic"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditMechanic;