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
import dynamic from 'next/dynamic';
import { floorOptions } from '../../../data/floors';

const CalenderComponent = dynamic(
    () => import('../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const flatOptions = [
    { value: '1', label: '1A' },
    { value: '2', label: '1B' },
    { value: '3', label: '2A' },
    { value: '4', label: '2B' },
]

const tenantOptions = [
    { value: '1', label: 'Tenant 1' },
    { value: '2', label: 'Tenant 2' },
    { value: '3', label: 'Tenant 3' },
    { value: '4', label: 'Tenant 4' },
]

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const AddEditVisitors = ({ isOpen, onOpenChange, onConfirm, selectedVisitor }) => {

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
        <Modal size="2xl" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedVisitor ? "Edit visitor" : "Add visitor"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2">
                                <div className='flex sm:flex-row flex-col gap-3 items-center -mt-2'>
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">Entry Date & Time<span className='text-danger'>*</span></p>
                                        <CalenderComponent
                                            selectedDate={openingDate}
                                            setSelectedDate={setOpeningDate}
                                            showTimeInput={true}
                                            placeholderText={"dd/MM/yyyy HH:mm"}
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <p className="text-priColor dark:text-purple-300 text-base">Visitor name</p>
                                        <Input
                                            color='primary'
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter visitor name"
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className='w-full'>
                                        <p className="text-priColor dark:text-purple-300 text-base">Visitor number</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter visitor number"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select building</p>
                                        <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-4'>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select floor</p>
                                        <SelectOptionComponent options={floors} placeholder="Select a floor" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select flat</p>
                                        <SelectOptionComponent options={flatOptions} placeholder="Select a flat" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                </div>
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Address(optional)</p>
                                    <Textarea
                                        className="col-span-12 md:col-span-6 !min-h-20"
                                        placeholder="Enter description"
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
                                    buttonText={selectedVisitor ? "Update visitor" : "Save visitor"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditVisitors;