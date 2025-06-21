"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoArrowBackOutline } from 'react-icons/io5';
import Image from 'next/image';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { MdLocalPrintshop, } from 'react-icons/md';

const ViewIncomeDetailsHome = ({ incomeData }) => {

    const [incomeDataState, setTenantsDataState] = useState(incomeData);

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // console.log("pathname", pathname);

    // console.log("id", id);

    const income = incomeDataState.find((b) => b.id === parseInt(id));

    if (!income) {
        return <p>income not found!</p>;
    }

    const handleBack = () => {
        // eslint-disable-next-line no-undef
        window.history.back();
    };

    return (

        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <IoArrowBackOutline className='text-3xl cursor-pointer' onClick={handleBack} />
                    <p className="sm:text-left text-center text-2xl font-bold">Income Details - {income.id}</p>
                </div>
                <div className='py-2 flex gap-2 flex-wrap'>
                    <ButtonComponent
                        // onClick={console.log("clicked")}
                        buttonClass="!bg-accent !text-white !py-1.5 !h-8 hover:!bg-green-600 !text-xs"
                        buttonText="Print"
                        startContent={<MdLocalPrintshop className='text-white text-sm -mt-0.5 cursor-pointer' />}
                    />
                </div>
            </div>


            <div className=" mx-auto p-6 bg-white rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 dark:bg-gray-800">
                {/* Header */}
                <div className="grid grid-cols-2 items-center">
                    <div>
                        <Image
                            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
                            alt="company-logo"
                            height="100"
                            width="100"
                        />
                    </div>
                    <div className="text-right">
                        <p className='text text-priTextColor font-bold'>My dream house</p>
                        <p className="text-priTextColor text-sm">House no 1, Road no 1, Uttara, Dhaka 1230</p>
                        <p className="text-priTextColor text-sm mt-1">018000000</p>
                    </div>
                </div>

                {/* Client Info */}
                <div className="grid grid-cols-2 items-center mt-8">
                    <div>
                        <p className="font-bold text-priTextColor">Invoice to :</p>
                        <p className='text-priColor mt-0.5'>Tenet name: <span className='text-priTextColor'>Test user one</span></p>
                        <p className='text-priColor mt-0.5'>Tenet phone: <span className='text-priTextColor'>0123456789</span></p>
                        <p className='text-priColor mt-0.5'>Reference ID: <span className='text-priTextColor'>01</span></p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-priTextColor">Invoice details :</p>
                        <p className='text-priColor'>Invoice number: <span className='text-priTextColor'>INV-20237</span></p>
                        <p className='text-priColor mt-0.5'>Invoice date: <span className='text-priTextColor'>03/07/2023</span></p>
                        <p className='text-priColor mt-0.5'>Payment method: <span className='text-priTextColor'>Bkash</span></p>
                    </div>
                </div>

                {/* Invoice Table */}
                <div className="-mx-4 mt-8 flow-root sm:mx-0">
                    <table className="min-w-full">
                        <colgroup>
                            <col className="w-2/3 sm:w-4/5" />
                            <col className="w-1/3 sm:w-1/5" />
                        </colgroup>
                        <thead className="border border-gray-200-b border border-gray-200-gray-300 text-priColor">
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-priColor sm:pl-0">Descriptions</th>
                                <th className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold sm:pr-0">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Base Fare</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 5,000.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="border border-gray-200-t border border-gray-200-gray-300">
                                <th className="pt-4 text-right text-sm font-semibold text-priColor">
                                    Grand total
                                </th>
                                <td className="pt-4 pr-4 sm:pr-0 text-right text-sm font-semibold text-priColor">
                                    ৳ 5,000.00
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                    <div className='mt-60 flex gap-2 justify-evenly'>
                        <div className='border border-gray-200-t'>
                            <p className='text-priTextColor'>Payer Signature</p>
                        </div>
                        <div className='border border-gray-200-t'>
                            <p className='text-priTextColor'>Receiver Signature</p>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border border-gray-200-t-2 pt-4 text-xs text-priTextColor text-center mt-16">
                    Generated By BariBhara App
                </div>
            </div>
        </div>
    );
};

export default ViewIncomeDetailsHome;