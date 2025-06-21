"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { DateRangePicker, Input, Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaTrashAlt } from 'react-icons/fa';
import WarningPopup from '../../Popup/WarningPopup';
import Link from 'next/link';
import { TbFileInvoice } from 'react-icons/tb';
import ActionsViewPopup from '../../Popup/ActionsViewPopup';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const tenantOptions = [
    { value: '1', label: 'Tenant 1' },
    { value: '2', label: 'Tenant 2' },
    { value: '3', label: 'Tenant 3' },
    { value: '4', label: 'Tenant 4' },
]

const status = [
    { value: '1', label: 'Paid' },
    { value: '2', label: 'Partially Paid' },
    { value: '3', label: 'Unpaid' },
    { value: '4', label: 'Cancel' },
]

const InvoiceListHome = () => {
    const invoiceData = [
        { id: 1, invoiceNumber: 'INV-001', tenant: 'John Doe', rentOf: 'April 2025', grandTotal: '1,200', totalDue: '0', status: 'Paid' },
        { id: 2, invoiceNumber: 'INV-002', tenant: 'Jane Smith', rentOf: 'April 2025', grandTotal: '1,500', totalDue: '300', status: 'Partially Paid' },
        { id: 3, invoiceNumber: 'INV-003', tenant: 'Mike Johnson', rentOf: 'March 2025', grandTotal: '1,100', totalDue: '1,100', status: 'Unpaid' },
        { id: 4, invoiceNumber: 'INV-004', tenant: 'Emily Brown', rentOf: 'April 2025', grandTotal: '950', totalDue: '0', status: 'Paid' },
        { id: 5, invoiceNumber: 'INV-005', tenant: 'Chris Evans', rentOf: 'April 2025', grandTotal: '1,300', totalDue: '1,300', status: 'Unpaid' },
        { id: 6, invoiceNumber: 'INV-004', tenant: 'Emily Brown', rentOf: 'April 2025', grandTotal: '950', totalDue: '0', status: 'Paid' },
        { id: 7, invoiceNumber: 'INV-005', tenant: 'Chris Evans', rentOf: 'April 2025', grandTotal: '1,300', totalDue: '1,300', status: 'Unpaid' }
    ];

    const [searchShow, setSearchShow] = useState(false);
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isActionsOpen, onOpen: onActionsOpen, onOpenChange: onActionsChange } = useDisclosure();
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const filteredData = useMemo(() => {
        let filtered = invoiceData.filter(item =>
            item.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
            item.tenant.toLowerCase().includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = a[sortConfig.key].toString().toLowerCase();
                const bVal = b[sortConfig.key].toString().toLowerCase();
                if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
                return 0;
            });
        }

        return filtered;
    }, [search, sortConfig]);

    const handleSort = (key) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc'
        }));
    };

    const paginatedData = filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage
    );

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Invoice List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <Link href="/dashboard/create-invoice">
                        <ButtonComponent
                            onClick={() => { }}
                            buttonClass=""
                            buttonText="Create Invoice"
                            startContent={<TbFileInvoice className='text-[18px]' />}
                        />
                    </Link>
                    <ButtonComponent
                        onClick={() => { setSearchShow(!searchShow) }}
                        buttonClass=""
                        buttonText="Search"
                        startContent={<IoSearchOutline className='text-xl' />}

                    />
                </div>
            </div>
            {
                searchShow &&
                <div className='flex sm:flex-row flex-col gap-5 items-center pb-5 sm:pt-2 pt-1'>
                    <Input
                        name="name"
                        type="text"
                        radius="sm"
                        placeholder="Search Invoice number"
                        variant="bordered"
                        color="primary"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom"
                    // onChange={(e) => console.log(e)}
                    />
                    <SelectOptionComponent options={tenantOptions} placeholder="Select a tenant" menuPlacement="bottom"
                    // onChange={(e) => console.log(e)}
                    />
                    <SelectOptionComponent options={status} placeholder="Status" menuPlacement="bottom"
                    // onChange={(e) => console.log(e)}
                    />
                    <DateRangePicker
                        variant="bordered"
                        color="primary"
                        radius="sm"
                        // onChange={(e) => console.log(e)}
                        pageBehavior="single"
                        visibleMonths={2} />
                </div>
            }

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['invoiceNumber', 'tenant', 'rentOf', 'grandTotal', 'totalDue', 'status'].map((col) => (
                                    <th
                                        key={col}
                                        onClick={() => handleSort(col)}
                                        className="py-3 text-sm px-6 whitespace-nowrap text-priTextColor"
                                    >
                                        <div className='flex gap-2 cursor-pointer'>
                                            {col.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                                            {sortConfig.key === col ?
                                                <span className="text-xl">{sortConfig.direction === 'asc' ? <IoChevronUpOutline /> : <IoChevronDownOutline />}</span> : <IoChevronUpOutline className="text-xl" />
                                            }
                                        </div>
                                    </th>
                                ))}
                                <th className="px-6 py-3 whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((invoice) => (
                                <tr key={invoice.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 font-medium text-priColor hover:text-secColor hover:underline dark:text-white">
                                        <Link href={`/dashboard/invoices/${invoice.id}`}>
                                            {invoice.invoiceNumber}
                                        </Link>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priColor hover:text-secColor hover:underline">
                                        <Link href={"http://localhost:3000/dashboard/tenants/248685"}>
                                            {invoice.tenant}
                                        </Link>
                                    </td>
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{invoice.rentOf}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">৳ {invoice.grandTotal}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">৳ {invoice.totalDue}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">
                                        <p className={`text-center pt-1 px-2 pb-0 text-[11px] font-medium rounded ${invoice.status === 'Paid' ? 'bg-green-200 text-green-800' :
                                            invoice.status === 'Partially Paid' ? 'bg-yellow-200 text-yellow-800' :
                                                'bg-red-200 text-red-800'
                                            }`}>
                                            {invoice.status}
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 mt-0.5 flex justify-start gap-3">
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Manage</span>} showArrow={true}>
                                            <IoSettingsSharp
                                                onClick={onActionsChange}
                                                className="!text-priColor text-xl cursor-pointer"
                                            />
                                        </Tooltip>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                            <FaTrashAlt
                                                onClick={onDeleteWarningChange}
                                                className="!text-danger text-[17px] mt-[1px] cursor-pointer"
                                            />
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="flex sm:flex-row flex-col gap-5 justify-between items-center mt-4">
                    <span className="text-base text-priColor dark:text-gray-300">
                        Showing {(currentPage - 1) * rowsPerPage + 1} to {Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length}
                    </span>
                    <Pagination
                        color="primary"
                        classNames={{
                            cursor: 'bg-priColor text-white',
                        }}
                        showControls
                        page={currentPage}
                        total={totalPages}
                        onChange={setCurrentPage}
                    />
                </div>
            </div>
            <WarningPopup
                headingText="Delete Invoice"
                descriptionText="Are you sure you want to delete this?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
            // onConfirm={console.log('Delete Invoice')}
            />
            <ActionsViewPopup
                headingText="Manage Actions"
                onOpen={onActionsOpen}
                isOpen={isActionsOpen}
                onOpenChange={onActionsChange}
                onDeleteWarningChange={onDeleteWarningChange}
            // onConfirm={console.log('Actions')}
            />
        </div>
    );
};

export default InvoiceListHome;