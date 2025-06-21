
"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Checkbox, DatePicker, Input, Textarea } from '@heroui/react';
import { floorOptions } from '../../../data/floors';
import InvoiceTable from './InvoiceTable';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';

// Dynamically import SelectOptionComponent with SSR disabled
const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const invoiceTypes = [
    { value: '1', label: 'Monthly Invoice' },
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

const CreateInvoiceHome = () => {

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
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Create Invoice</p>
                </div>
            </div>
            <div className="sm:px-5 px-3 bg-white rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 pb-3">
                <div className="flex sm:flex-col flex-col items-center gap-3 pt-3 w-full">
                    <div className="flex sm:flex-row flex-col gap-3 w-full">
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Invoice type</p>
                            <SelectOptionComponent options={invoiceTypes} placeholder="Select invoice type" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full labelCSS">
                            <DatePicker
                                label="Invoice date/month"
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
                            <p className="text-priColor dark:text-purple-300 text-base">Invoice number</p>
                            <Input
                                disabled={true}
                                name="name"
                                type="text"
                                radius="sm"
                                variant="bordered"
                                value={"INV-0001"}
                            />
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3 w-full">
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Select building</p>
                            <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Floor select</p>
                            <SelectOptionComponent options={floors} placeholder="Select a floor" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3 w-full">
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Flat select</p>
                            <SelectOptionComponent options={flatOptions} placeholder="Select a flat" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className="w-full">
                            <p className="text-priColor dark:text-purple-300 text-base">Tenant select</p>
                            <SelectOptionComponent options={tenantOptions} placeholder="Select a user" menuPlacement="bottom"
                            // onChange={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <InvoiceTable />
                </div>
                <div>
                    <p className="text-priColor dark:text-purple-300 text-base">Note</p>
                    <Textarea
                        className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                        labelPlacement="outside"
                        placeholder="Enter your description"
                        variant={"bordered"}
                        radius="sm"
                    />
                </div>
                <div className='mt-3'>
                    <p className="text-priColor dark:text-purple-300 text-base py-2">Send SMS</p>
                    <div className='flex gap-1 items-center'>
                        <Checkbox className='text-priTextColor' color="primary"></Checkbox>
                        <p className='text-priTextColor'>Booking Confirmation SMS to Customer</p>
                    </div>
                </div>
                <div className='pb-3'>
                    <ButtonComponent
                        onClick={() => { }}
                        buttonClass="w-32 mt-5"
                        buttonText="Save Invoice"
                    />
                </div>
            </div>
        </div>
    );
};

export default CreateInvoiceHome;