"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";
import { toast } from 'react-toastify';
import buildingOne from "../../../assets/webp/buildingOne.webp"
import Image from 'next/image';

const MaintenanceDetailsPopup = ({ isOpen, onOpenChange, selectedMaintenance }) => {

    return (
        <Modal size="sm" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">Maintenance Details</ModalHeader>
                        <ModalBody>
                            <div className="pb-3 -mt-2">
                                <div className="relative border border-gray-200-lg h-52 w-full mb-3">
                                    <Image
                                        src={buildingOne}
                                        width={260}
                                        height={160}
                                        className="rounded-lg h-52 w-full object-cover"
                                        alt={`Picture of building`}
                                        style={{
                                            objectFit: "cover",
                                            border border-gray-200Radius: "12px",
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                                <ul className="divide-y sm:w-full w-full rounded">
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Opening Date:</span>
                                        <span className="ml-auto text-right">
                                            {selectedMaintenance.submissionDate
                                                ? new Date(selectedMaintenance.submissionDate).toLocaleDateString("en-GB")
                                                : ""}
                                        </span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Tenant:</span>
                                        <span className="ml-auto">{selectedMaintenance.tenant}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Building:</span>
                                        <span className="ml-auto">{selectedMaintenance.building}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Floor:</span>
                                        <span className="ml-auto">{selectedMaintenance.floor}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Flat:</span>
                                        <span className="ml-auto">{selectedMaintenance.flat}</span>
                                    </li>
                                    <li className="flex items-center justify-between py-1.5 text-sm">
                                        <p className='text-priColor dark:text-purple-300'>Status:</p>
                                        <p className={`text-center capitalize px-2 pt-0.5 pb-0.5 text-xs text-white font-medium rounded ${selectedMaintenance.status === 'Pending' ? 'bg-danger' : selectedMaintenance.status === 'Processing' ? 'bg-yellow-600' : selectedMaintenance.status === 'Working' ? 'bg-secColor' : selectedMaintenance.status === 'Complete' ? 'bg-accent' : ''}`}>
                                            {selectedMaintenance.status}
                                        </p>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <p className='text-priColor dark:text-purple-300 text-justify'>Reason: <span className="ml-auto text-left text-priTextColor">{selectedMaintenance.reason}</span></p>
                                    </li>
                                </ul>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default MaintenanceDetailsPopup;