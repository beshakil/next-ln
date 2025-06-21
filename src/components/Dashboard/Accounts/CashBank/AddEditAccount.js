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
import ButtonComponent from '../../../GlobalComponent/ButtonComponent';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

const CalenderComponent= dynamic(
    () => import('../../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);


const AddEditAccount = ({ isOpen, onOpenChange, onConfirm, selectedAccount }) => {

    const [accountTitle, setAccountTitle] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState("");
    const [openingDate, setOpeningDate] = useState("");
    const [note, setNote] = useState("");

    useEffect(() => {
        if (selectedAccount) {
            setAccountTitle(selectedAccount.accountTitle || "");
            setAccountNumber(selectedAccount.accountNumber || "");
            setBalance(selectedAccount.balance || "");
            setOpeningDate(selectedAccount.openingDate ? new Date(selectedAccount.openingDate) : "");
            setNote(selectedAccount.note || "");
        } else {
            setAccountTitle("");
            setAccountNumber("");
            setBalance("");
            setOpeningDate("");
            setNote("");
        }
    }, [selectedAccount, isOpen]);

    const handleSubmit = () => {
        if (!accountTitle || !accountNumber || !balance || !openingDate || !note) return;

        const payload = {
            id: selectedAccount?.id,
            accountTitle,
            accountNumber,
            balance,
            openingDate,
            note
        };
        onConfirm(payload);
        toast.success(selectedAccount ? "Updated successfully!" : "Added successfully!");
    };

    return (
        <Modal size="md" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedAccount ? "Edit Account" : "Add New Account"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2">
                                <div className="w-full -mt-2">
                                    <p className="text-priColor dark:text-purple-300 text-base">Account Title</p>
                                    <Input
                                        color='primary'
                                        name="name"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter account title"
                                        isRequired
                                        value={accountTitle}
                                        onChange={(e) => setAccountTitle(e.target.value)}
                                    />
                                </div>
                                <div className="w-full pt-2">
                                    <p className="text-priColor dark:text-purple-300 text-base">Account Number</p>
                                    <Input
                                        color='primary'
                                        name="name"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter account number"
                                        value={accountNumber}
                                        onChange={(e) => setAccountNumber(e.target.value)}
                                        isRequired
                                    />
                                </div>
                                <div className="w-full pt-2">
                                    <p className="text-priColor dark:text-purple-300 text-base">Opening Balance</p>
                                    <Input
                                        color='primary'
                                        name="name"
                                        type="number"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter opening balance"
                                        value={balance}
                                        onChange={(e) => setBalance(e.target.value)}
                                        isRequired={true}
                                    />
                                </div>
                                <div className="w-full labelCSS pt-2">
                                    <p className="text-priColor dark:text-purple-300 text-base">Date</p>
                                    <CalenderComponent
                                        selectedDate={openingDate}
                                        setSelectedDate={setOpeningDate}
                                        placeholderText={"dd/MM/yyyy"}
                                    />
                                </div>
                                <div className='w-full pt-2'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Note</p>
                                    <Textarea
                                        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                        labelPlacement="outside"
                                        placeholder="Enter your description"
                                        variant={"bordered"}
                                        radius="sm"
                                        color="primary"
                                        value={note}
                                        onChange={(e) => setNote(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-2 justify-end pb-2'>
                                <ButtonComponent
                                    onClick={onClose}
                                    buttonClass="border border-gray-200 bg-transparent border border-gray-200-purple-500 !text-priColor hover:!bg-purple-500 hover:!text-zinc-50"
                                    buttonText="Cancel"
                                />
                                <ButtonComponent
                                    onClick={handleSubmit}
                                    buttonClass=""
                                    buttonText={selectedAccount ? "Update account" : "Add account"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditAccount;