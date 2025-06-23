"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";
import Image from 'next/image';
import userImage from "../../../assets/webp/buildingOne.webp";

const StaffDetailsPopup = ({ isOpen, onOpenChange, selectedStaff }) => {
    return (
        <Modal size="md" placement={"center"} scrollBehavior='inside' isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            Staff Details
                        </ModalHeader>
                        <ModalBody>
                            <div className="pb-3 -mt-2">
                                <div className='flex sm:flex-row flex-col sm:gap-5 gap-0'>
                                    <div className="relative border border-gray-200-lg h-32 sm:h-40 px-20 sm:px-0 mb-3 sm:w-[35%]">
                                        <Image
                                            src={selectedStaff?.image || userImage}
                                            width={260}
                                            height={160}
                                            className="rounded-lg h-32 sm:h-40 w-full object-cover"
                                            alt={`Staff photo`}
                                            style={{
                                                objectFit: "cover",
                                                 borderRadius: "12px",
                                            }}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className='sm:w-[65%] w-full'>
                                        <ul className="divide-y sm:w-full w-full rounded">
                                            <li className="flex items-center py-1.5 text-sm">
                                                <span className='text-priColor dark:text-purple-300'>Name:</span>
                                                <span className="ml-auto text-right">{selectedStaff?.name}</span>
                                            </li>
                                            <li className="flex items-center py-1.5 text-sm">
                                                <span className='text-priColor dark:text-purple-300'>Staff ID:</span>
                                                <span className="ml-auto text-right">{selectedStaff?.staffId}</span>
                                            </li>
                                            <li className="flex items-center py-1.5 text-sm">
                                                <span className='text-priColor dark:text-purple-300'>Joining Date:</span>
                                                <span className="ml-auto text-right">
                                                    {selectedStaff?.joiningDate
                                                        ? new Date(selectedStaff.joiningDate).toLocaleDateString("en-GB")
                                                        : ""}
                                                </span>
                                            </li>
                                            <li className="flex items-center justify-between py-1.5 text-sm">
                                                <p className='text-priColor dark:text-purple-300'>Status:</p>
                                                <p className={`text-center capitalize px-2 pt-0.5 pb-0.5 text-xs text-white font-medium rounded ${selectedStaff.status === 'Active' ? 'bg-accent' : 'bg-danger'}`}>
                                                    {selectedStaff.status}
                                                </p>
                                            </li>
                                            <li className="flex items-center py-1.5 text-sm">
                                                <span className='text-priColor dark:text-purple-300'>Role:</span>
                                                <span className="ml-auto text-right">{selectedStaff?.role}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className='text-priColor dark:text-purple-300 text-lg mt-5 text-center underline'>Others Information</p>
                                <ul className="divide-y sm:w-full w-full rounded">
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Father:</span>
                                        <span className="ml-auto text-right">{selectedStaff?.father}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Mother:</span>
                                        <span className="ml-auto text-right">{selectedStaff?.mother}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Branch:</span>
                                        <span className="ml-auto text-right">{selectedStaff?.branch}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>National ID:</span>
                                        <span className="ml-auto text-right">{selectedStaff?.nationalId}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Address:</span>
                                        <span className="ml-auto text-right">{selectedStaff?.address}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Basic Salary:</span>
                                        <span className="ml-auto text-right">৳ {selectedStaff?.basicSalary?.toFixed(2)}</span>
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

export default StaffDetailsPopup;
