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

const CashBankDetailsPopup = ({ isOpen, onOpenChange, selectedAccount }) => {

    return (
        <Modal size="sm" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">Account Details</ModalHeader>
                        <ModalBody>
                            <div className="pb-2 -mt-2">
                                <ul className="divide-y sm:w-full w-full rounded">
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Account Name:</span>
                                        <span className="ml-auto">{selectedAccount.accountTitle}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Account Number:</span>
                                        <span className="ml-auto">{selectedAccount.accountNumber}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Account Balance:</span>
                                        <span className="ml-auto">৳ {selectedAccount.balance}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Opening Date:</span>
                                        <span className="ml-auto text-right">
                                            {selectedAccount.openingDate
                                                ? new Date(selectedAccount.openingDate).toLocaleDateString("en-GB")
                                                : ""}
                                        </span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <p className='text-priColor dark:text-purple-300'>Note: <span className="ml-auto text-left text-priTextColor">{selectedAccount.note}</span></p>
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

export default CashBankDetailsPopup;