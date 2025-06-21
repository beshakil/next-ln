"use client";

import React, { useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Input,
    Textarea
} from "@heroui/react";
import ButtonComponent from '../../../GlobalComponent/ButtonComponent';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const CalenderComponent= dynamic(
    () => import('../../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);

const GetOutLoan = ({ isOpen, onOpenChange }) => {

    const loanAccounts = [
        { id: 1, label: "Account One", value: "accountOne" },
        { id: 2, label: "Account Two", value: "accountTwo" },
        { id: 3, label: "Account Three", value: "accountThree" },
        { id: 4, label: "Account Four", value: "accountFour" },
        { id: 5, label: "Account Five", value: "accountFive" },
    ];

    const [openingDate, setOpeningDate] = useState("");

    return (
        <Modal size="4xl" placement={"center"} scrollBehavior={"inside"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            Gut out loan
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
                                        <p className="text-priColor dark:text-purple-300 text-base">Get loan account name<span className='text-danger'>*</span></p>
                                        <SelectOptionComponent
                                            options={loanAccounts}
                                            placeholder="Select a options"
                                            menuPlacement="bottom"
                                            // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Current balance</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter balance"
                                            isRequired
                                        />
                                    </div>
                                </div>
                                <div className='flex sm:flex-row flex-col gap-3 items-center pt-2'>
                                    <div className="w-full ">
                                        <p className="text-priColor dark:text-purple-300 text-base">Deposit Amount</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter amount"
                                            isRequired
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Interest(%)</p>
                                        <Input
                                            color='primary'
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            placeholder="Enter interest"
                                            isRequired
                                        />
                                    </div>
                                </div>

                                <div className='w-full pt-2'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Note</p>
                                    <Textarea
                                        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                                        labelPlacement="outside"
                                        placeholder="Enter your note"
                                        variant={"bordered"}
                                        radius="sm"
                                        color="primary"
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
                                    onClick={onClose}
                                    buttonClass=""
                                    buttonText={"Save"}
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default GetOutLoan;