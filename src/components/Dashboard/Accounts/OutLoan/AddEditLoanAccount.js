"use client";

import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
} from "@heroui/react";
import ButtonComponent from '../../../GlobalComponent/ButtonComponent';
import { toast } from 'react-toastify';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const CalenderComponent= dynamic(
    () => import('../../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);
const AddEditLoanAccount = ({ isOpen, onOpenChange, onConfirm, selectedLoanAccount }) => {

    const statusOptions = [
        { label: "Active", value: "active" },
        { label: "Inactive", value: "inactive" },
    ];

    const [openingDate, setOpeningDate] = useState("");
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [profession, setProfession] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [balance, setBalance] = useState("");
    const [interest, setInterest] = useState("");
    const [status, setStatus] = useState("active");

    useEffect(() => {
        if (selectedLoanAccount) {
            setName(selectedLoanAccount.name || "");
            setCompany(selectedLoanAccount.company || "");
            setBalance(selectedLoanAccount.balance || "");
            setProfession(selectedLoanAccount.profession || "");
            setMobile(selectedLoanAccount.mobile || "");
            setAddress(selectedLoanAccount.address || "");
            setInterest(selectedLoanAccount.interest || "");
            setStatus(selectedLoanAccount.status || "inactive");
            setOpeningDate(selectedLoanAccount.openingDate ? new Date(selectedLoanAccount.openingDate) : "");
        } else {
            setName("");
            setCompany("");
            setProfession("");
            setMobile("");
            setAddress("");
            setInterest("");
            setStatus("inactive");
            setBalance("");
            setOpeningDate("");
        }
    }, [selectedLoanAccount, isOpen]);

    const handleSubmit = () => {
        if (!name || !openingDate || !mobile) return;

        const payload = {
            id: selectedLoanAccount?.id,
            name,
            company,
            profession,
            mobile,
            address,
            interest,
            balance,
            openingDate,
            status: selectedLoanAccount ? status : 'inactive',
        };
        onConfirm(payload);
        toast.success(selectedLoanAccount ? "Updated successfully!" : "Added successfully!");
    };

    return (
        <Modal size="4xl" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            {selectedLoanAccount ? "Edit loan Account" : "Add loan Account"}
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2">
                                <div className='flex sm:flex-row flex-col gap-3 items-center -mt-2'>
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">Date<span className='text-danger'>*</span></p>
                                        <CalenderComponent
                                            selectedDate={openingDate}
                                            setSelectedDate={setOpeningDate}
                                            placeholderText={"dd/MM/yyyy"}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Name<span className='text-danger'>*</span></p>
                                        <Input
                                            color='primary'
                                            name="name"
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter name"
                                            isRequired
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Mobile <span className='text-danger'>*</span></p>
                                        <Input
                                            color='primary'
                                            name="name"
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter mobile number"
                                            isRequired
                                            value={mobile}
                                            onChange={(e) => setMobile(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-2'>
                                    <div className="w-full ">
                                        <p className="text-priColor dark:text-purple-300 text-base">Company</p>
                                        <Input
                                            color='primary'
                                            name="name"
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter company name"
                                            isRequired
                                            value={company}
                                            onChange={(e) => setCompany(e.target.value)}
                                        />
                                    </div>
                                    <div className="w-full ">
                                        <p className="text-priColor dark:text-purple-300 text-base">Profession</p>
                                        <Input
                                            color='primary'
                                            name="name"
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter profession"
                                            isRequired
                                            value={profession}
                                            onChange={(e) => setProfession(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="w-full pt-2">
                                    <p className="text-priColor dark:text-purple-300 text-base">Address</p>
                                    <Input
                                        color='primary'
                                        name="name"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder="Enter address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        isRequired
                                    />
                                </div>
                                {
                                    selectedLoanAccount &&
                                    <div className='flex sm:flex-row flex-col gap-3 items-center pt-2'>
                                        <div className="w-full pt-2 ">
                                            <p className="text-priColor dark:text-purple-300 text-base">Balance</p>
                                            <Input
                                                color='primary'
                                                name="name"
                                                type="number"
                                                radius="sm"
                                                variant="bordered"
                                                placeholder="Enter Balance"
                                                isRequired
                                                value={balance}
                                                onChange={(e) => setBalance(e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full pt-2 ">
                                            <p className="text-priColor dark:text-purple-300 text-base">Interest(%)</p>
                                            <Input
                                                color='primary'
                                                name="name"
                                                type="number"
                                                radius="sm"
                                                variant="bordered"
                                                placeholder="Enter interest"
                                                isRequired
                                                value={interest}
                                                onChange={(e) => setInterest(e.target.value)}
                                            />
                                        </div>
                                        <div className="w-full pt-2">
                                            <p className="text-priColor dark:text-purple-300 text-base">Status</p>
                                            <SelectOptionComponent
                                                options={statusOptions}
                                                value={statusOptions.find(opt => opt.value === status)}
                                                placeholder="Select a options"
                                                menuPlacement="top"
                                                onChange={(option) => setStatus(option ? option.value : '')}
                                            />
                                        </div>
                                    </div>
                                }

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
                                    buttonText={selectedLoanAccount ? "Update account" : "Add account"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default AddEditLoanAccount;