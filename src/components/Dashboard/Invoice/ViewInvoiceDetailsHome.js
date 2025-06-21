"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoArrowBackOutline, IoClose, IoCopyOutline, IoEye } from 'react-icons/io5';
import Image from 'next/image';
import { MdLocalPrintshop, MdPayment } from 'react-icons/md';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';

const ViewInvoiceDetailsHome = ({ invoiceData }) => {

    const [invoiceDataState, setTenantsDataState] = useState(invoiceData);

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    const invoice = invoiceDataState.find((b) => b.id === parseInt(id));

    if (!invoice) {
        return <p>invoice not found!</p>;
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
                    <p className="sm:text-left text-center text-2xl font-bold">Invoice Details - {invoice.id}</p>
                </div>
                <div className='relative flex items-center'>
                    <input
                        readOnly
                        aria-label="Search"
                        placeholder={""}
                        className='bg-purple-50 sm:w-96 w-full dark:bg-gray-900 dark:text-zinc-200 text-sm py-2.5 rounded-s-lg pl-3 pr-2'
                        radius="sm"
                        value="http://localhost:3000/dashboard/invoices/1"
                    />
                    <button className='bg-purple-600 hover:bg-purple-500 rounded-e-lg py-2.5 px-3 flex gap-1'>
                        <IoCopyOutline className="text-base text-zinc-50 dark:text-zinc-200" />
                        <span className='text-sm text-zinc-50 whitespace-nowrap'>Copy Link</span>
                    </button>
                </div>

            </div>
            <div className='pb-2 flex gap-2 flex-wrap'>
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs"
                    buttonText="Open invoice"
                    startContent={<IoEye className='text-white text-base -mt-0.5 cursor-pointer' />}
                />
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                    buttonText="Print"
                    startContent={<MdLocalPrintshop className='text-white text-base -mt-0.5 cursor-pointer' />}
                />
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs !bg-gray-500 hover:!bg-gray-600"
                    buttonText="Record a payment"
                    startContent={<MdPayment className='text-white text-base -mt-0.5 cursor-pointer' />}
                />
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs !bg-yellow-500 hover:!bg-yellow-600"
                    buttonText="Mark as cancelled"
                    startContent={<IoClose className='text-white text-base -mt-0.5 cursor-pointer' />}
                />
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                    buttonText="Edit"
                    startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                />
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs !bg-red-500 hover:!bg-red-600"
                    buttonText="Delete"
                    startContent={<FaTrashAlt className='text-white text-xs -mt-0.5 cursor-pointer' />}
                />
            </div>

            <div className=" mx-auto p-6 bg-white my-3 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 dark:bg-gray-800">
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
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-priTextColor">Invoice details :</p>
                        <p className='text-priColor'>Invoice number: <span className='text-priTextColor'>INV-20237</span></p>
                        <p className='text-priColor mt-0.5'>Rent of: <span className='text-priTextColor'>03/07/2023</span></p>
                        <p className='text-priColor mt-0.5'>Creation date: <span className='text-priTextColor'>31/07/2023</span></p>
                        <p className='text-priColor mt-0.5'>Payment status:&nbsp;
                            <span className={`px-2 w-24 text-center pt-1 pb-0.5 text-xs font-medium rounded ${invoice.status === 'Paid' ? 'bg-green-200 text-green-800' :
                                invoice.status === 'Partially Paid' ? 'bg-yellow-200 text-yellow-800' :
                                    'bg-red-200 text-red-800'
                                }`}>
                                {invoice.status}
                            </span>
                        </p>

                    </div>
                </div>

                {/* Invoice Table */}
                <div className="-mx-4 mt-8 flow-root sm:mx-0">
                    <table className="min-w-full">
                        <colgroup>
                            <col className="w-full sm:w-1/2" />
                            <col className="sm:w-1/6" />
                            <col className="sm:w-1/6" />
                            <col className="sm:w-1/6" />
                        </colgroup>
                        <thead className="border border-gray-200-b border border-gray-200-gray-300 text-priColor">
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-priColor sm:pl-0">Name</th>
                                <th className="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell">Cost</th>
                                <th className="hidden px-3 py-3.5 text-right text-sm font-semibold sm:table-cell">Discount</th>
                                <th className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold sm:pr-0">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Base Fare</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">500.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 5,000.00</td>
                            </tr>

                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Utility Bill</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">500.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 5,000.00</td>
                            </tr>

                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Water Bill</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">50.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Gas Bill</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">50.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Wastage Bill</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">50.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Wellfare Bill</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">50.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">Security Bill</div>
                                </td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">50.0</td>
                                <td className="hidden px-3 py-2 text-right text-sm text-priTextColor sm:table-cell">৳ 100.00</td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="3" className="hidden pl-4 pr-3 pt-6 text-right text-sm font-normal text-priTextColor sm:table-cell sm:pl-0">
                                    Subtotal
                                </th>
                                <th className="pl-6 pr-3 pt-6 text-left text-sm font-normal text-priTextColor sm:hidden">Subtotal</th>
                                <td className="pl-3 pr-6 pt-6 text-right text-sm text-priTextColor sm:pr-0">৳ 10,500.00</td>
                            </tr>
                            <tr>
                                <th colSpan="3" className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-priTextColor sm:table-cell sm:pl-0">
                                    Discount
                                </th>
                                <th className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-priTextColor sm:hidden">Discount</th>
                                <td className="pl-3 pr-6 pt-4 text-right text-sm text-priTextColor sm:pr-0">৳ -100</td>
                            </tr>
                            <tr>
                                <th colSpan="3" className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-priColor sm:table-cell sm:pl-0">
                                    Grand total
                                </th>
                                <th className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-priColor sm:hidden">  Grand total</th>
                                <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-priColor sm:pr-0">৳ 11,550.00</td>
                            </tr>
                            <tr>
                                <th colSpan="3" className="hidden pl-4 pr-3 pt-4 text-right text-sm font-normal text-accent sm:table-cell sm:pl-0">
                                    Total paid
                                </th>
                                <th className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-accent sm:hidden">Grand total</th>
                                <td className="pl-3 pr-6 pt-4 text-right text-sm text-accent sm:pr-0">৳ 1,050.00</td>
                            </tr>
                            <tr>
                                <th colSpan="3" className="hidden pl-4 pr-3 pt-4 text-right text-sm font-semibold text-danger sm:sm:table-cell sm:pl-0">
                                    Amount Due
                                </th>
                                <th className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-danger sm:hidden">Amount Due</th>
                                <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-danger sm:pr-0">৳ 00.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                {/* Footer */}
                <div className="border border-gray-200-t-2 pt-4 text-xs text-priTextColor text-center mt-16">
                    Generated By BariBhara App
                </div>
            </div>
        </div>
    );
};

export default ViewInvoiceDetailsHome;