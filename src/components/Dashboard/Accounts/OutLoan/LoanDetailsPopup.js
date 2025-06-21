"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody
} from "@heroui/react";
import { toast } from 'react-toastify';
import ButtonComponent from '../../../GlobalComponent/ButtonComponent';

const LoanDetailsPopup = ({ isOpen, onOpenChange, selectedLoanAccount }) => {

    return (
        <Modal size="sm" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">Loan Details</ModalHeader>
                        <ModalBody>
                            <div className="pb-2 -mt-2">
                                <ul className="divide-y sm:w-full w-full rounded">
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Opening Date:</span>
                                        <span className="ml-auto text-right">
                                            {selectedLoanAccount.openingDate
                                                ? new Date(selectedLoanAccount.openingDate).toLocaleDateString("en-GB")
                                                : ""}
                                        </span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Name:</span>
                                        <span className="ml-auto">{selectedLoanAccount.name}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Company:</span>
                                        <span className="ml-auto">{selectedLoanAccount.company}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Profession:</span>
                                        <span className="ml-auto">{selectedLoanAccount.profession}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Mobile:</span>
                                        <span className="ml-auto">{selectedLoanAccount.mobile}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Balance:</span>
                                        <span className="ml-auto">৳ {selectedLoanAccount.balance}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Interest:</span>
                                        <span className="ml-auto">{selectedLoanAccount.interest}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Status:</span>
                                        <span className="ml-auto">
                                            <span className={`text-center pt-1 pb-1 px-2 text-sm text-white font-medium rounded ${selectedLoanAccount.status === 'Active' ? 'bg-accent' :
                                                'bg-danger'}`}>
                                                {selectedLoanAccount.status}
                                            </span>
                                        </span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Address</span>
                                        <span className="ml-auto">{selectedLoanAccount.address}</span>
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

export default LoanDetailsPopup;