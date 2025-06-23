
"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Checkbox, DatePicker, Input, Textarea } from '@heroui/react';
import { incomeOptions } from '../../../data/income';
import { floorOptions } from '../../../data/floors';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import buildingOne from "../../../assets/webp/buildingOne.webp"
import { BiCloudUpload } from 'react-icons/bi';

// Dynamically import SelectOptionComponent with SSR disabled
const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const accountTypes = [
    { value: '1', label: 'Cash in hand - BDT' },
    { value: '2', label: 'Bank - BDT' },
    { value: '3', label: 'Bkash' },
    { value: '4', label: 'Nagad' },
    { value: '5', label: 'Rocket' },
    { value: '6', label: 'U-Cash' },
    { value: '7', label: 'Visa Card' },
    { value: '8', label: 'Master Card' },
]
const paymentMethod = [
    { value: '1', label: 'Cash in hand - BDT' },
    { value: '2', label: 'Bank - BDT' },
    { value: '3', label: 'Bkash' },
    { value: '4', label: 'Nagad' },
    { value: '5', label: 'Rocket' },
    { value: '6', label: 'U-Cash' },
    { value: '7', label: 'Visa Card' },
    { value: '8', label: 'Master Card' },
]

const relatedInvoiceList = [
    { value: '1', label: 'INV-001' },
    { value: '2', label: 'INV-002' },
    { value: '3', label: 'INV-003' },
    { value: '4', label: 'INV-004' },
]
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

const CreateExpenseHome = () => {

    const [floors, setFloors] = useState([]);
    const [expenses, setexpenses] = useState([]);

    useEffect(() => {
        if (Array.isArray(incomeOptions)) {
            const formattedExpenses = incomeOptions.map((expense) => ({
                value: expense.value,
                label: `${expense.label} (${expense.bn_name})`,
            }));
            setexpenses(formattedExpenses);
        }
    }, [incomeOptions]);


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
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Add expense</p>
                </div>
            </div>
            <div className="sm:px-5 px-3 bg-white rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 pb-3">
                <div className="flex sm:flex-col flex-col items-center gap-3 pt-3 w-full">
                    <div className="flex sm:flex-row flex-col gap-3 w-full">
                        <div className="w-full labelCSS">
                            <p className="text-priColor dark:text-purple-300 text-base">Date <span className='text-danger'>*</span></p>
                            <DatePicker
                                labelPlacement="outside"
                                color="primary"
                                variant="bordered"
                                radius="sm"
                                isRequired={true}
                                className="w-full"
                                showMonthAndYearPickers={true}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Account</p>
                            <SelectOptionComponent
                                options={accountTypes}
                                placeholder="Select account type"
                                menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Payment method</p>
                            <SelectOptionComponent
                                options={paymentMethod}
                                placeholder="Select payment method"
                                menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Expense type <span className='text-danger'>*</span></p>
                            <SelectOptionComponent
                                options={expenses}
                                placeholder="Select expense type"
                                menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3 w-full">
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Amount</p>
                            <Input
                                color='primary'
                                name="name"
                                type="text"
                                radius="sm"
                                variant="bordered"
                                placeholder="Enter amount"
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Select building</p>
                            <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Select floor</p>
                            <SelectOptionComponent
                                options={floors} placeholder="Select a floor" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Flat select</p>
                            <SelectOptionComponent
                                options={flatOptions} placeholder="Select a flat" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3 w-full">
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Tenant/Payer</p>
                            <SelectOptionComponent options={tenantOptions} placeholder="Select a user" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Related invoice</p>
                            <SelectOptionComponent options={relatedInvoiceList} placeholder="Select related invoice" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Reference</p>
                            <Input
                                color='primary'
                                name="name"
                                type="text"
                                radius="sm"
                                variant="bordered"
                                placeholder=" Enter reference"
                            />
                        </div>
                    </div>

                </div>
                <div className='pt-3'>
                    <p className="text-priColor dark:text-purple-300 text-base">Attachment</p>
                    <div className="flex gap-3 ">
                        <div className="flex items-center justify-center sm:w-[80%] w-[70%] mb-3">
                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border border-gray-200-2 border border-gray-200-gray-300 border border-gray-200-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border border-gray-200-gray-600 dark:hover:border border-gray-200-gray-500">
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <BiCloudUpload className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Drag and drop or click to replace</span>
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG or GIF
                                    </p>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                        <div className="relative border border-gray-200-lg sm:w-[20%] w-[30%] h-[128px]">
                            <Image
                                src={buildingOne}
                                width={260}
                                height={160}
                                className="rounded-lg w-full h-[160px] object-cover"
                                alt={`Picture of building`}
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "12px",
                                }}
                                loading="lazy"
                            />
                            <MdCancel className="text-2xl absolute -top-2 -right-2 text-red-500 rounded-full bg-white cursor-pointer" />
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-priColor dark:text-purple-300 text-base">Note</p>
                    <Textarea
                        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        variant={"bordered"}
                        radius="sm"
                        color='primary'
                    />
                </div>
                <div className='pb-3'>
                    <ButtonComponent
                        onClick={() => { }}
                        buttonClass="w-32 mt-5"
                        buttonText="Save"
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateExpenseHome;