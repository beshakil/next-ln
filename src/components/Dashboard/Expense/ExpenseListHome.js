"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye} from "react-icons/io5";
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import WarningPopup from '../../Popup/WarningPopup';
import Link from 'next/link';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import { GiPayMoney } from 'react-icons/gi';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const ExpenseListHome = () => {
    const expenseData = [
        {
            id: 1,
            date: '2025-04-17',
            account: 'Cash in Hand',
            expenseType: 'Rental expense - ভাড়া আয়  ',
            amount: '1000',
            tenant: 'Mizbah',
            building: 'Vai Vai City Complex',
            method: 'Cash',
            relatedInvoice: 'INV-001'
        },
        {
            id: 2,
            date: '2025-04-10',
            account: 'Bank - BDT',
            expenseType: 'Rental expense - ভাড়া আয় ',
            amount: '3000',
            tenant: 'Ahmed',
            building: 'Vai Vai City Complex',
            method: 'Bkash',
            relatedInvoice: 'INV-001'
        },
        {
            id: 3,
            date: '2025-04-17',
            account: 'Cash in Hand',
            expenseType: 'Rental expense - ভাড়া আয়  ',
            amount: '1000',
            tenant: 'Mizbah',
            building: 'Vai Vai City Complex',
            method: 'Cash',
            relatedInvoice: ''
        },
        {
            id: 4,
            date: '2025-04-17',
            account: 'Cash in Hand',
            expenseType: 'Rental expense - ভাড়া আয়  ',
            amount: '1000',
            tenant: 'Mizbah',
            building: 'Vai Vai City Complex',
            method: 'Cash',
            relatedInvoice: ''
        },
        {
            id: 5,
            date: '2025-04-17',
            account: 'Cash in Hand',
            expenseType: 'Rental expense - ভাড়া আয়  ',
            amount: '1000',
            tenant: 'Mizbah',
            building: 'Vai Vai City Complex',
            method: 'Cash',
            relatedInvoice: ''
        },
        {
            id: 6,
            date: '2025-04-17',
            account: 'Cash in Hand',
            expenseType: 'Rental expense - ভাড়া আয়  ',
            amount: '1000',
            tenant: 'Mizbah',
            building: 'Vai Vai City Complex',
            method: 'Cash',
            relatedInvoice: ''
        },
        {
            id: 7,
            date: '2025-04-17',
            account: 'Cash in Hand',
            expenseType: 'Rental expense - ভাড়া আয়  ',
            amount: '1000',
            tenant: 'Mizbah',
            building: 'Vai Vai City Complex',
            method: 'Cash',
            relatedInvoice: ''
        }
    ];

    const [searchShow, setSearchShow] = useState(false);
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const filteredData = useMemo(() => {
        let filtered = expenseData.filter(item =>
            item.date.toLowerCase().includes(search.toLowerCase()) ||
            item.account.toLowerCase().includes(search.toLowerCase()) ||
            item.expenseType.toLowerCase().includes(search.toLowerCase()) ||
            item.amount.toLowerCase().includes(search.toLowerCase()) ||
            item.tenant.toLowerCase().includes(search.toLowerCase()) ||
            item.building.toLowerCase().includes(search.toLowerCase()) ||
            item.method.toLowerCase().includes(search.toLowerCase())
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

    const columnKeyMap = {
        'Date': 'date',
        'Account': 'account',
        'Expense Type': 'expenseType',
        'Amount': 'amount',
        'Tenant': 'tenant',
        'Building': 'building',
        'Method': 'method'
    };

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
                    <p className="sm:text-left text-center text-2xl font-bold">Expense List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search expense list"}
                    />
                    <Link href="/dashboard/add-expense">
                        <ButtonComponent
                            onClick={() => { }}
                            buttonClass="w-full"
                            buttonText="Add expense"
                            startContent={<GiPayMoney className='text-[18px]' />}
                        />
                    </Link>
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Date', 'Account', 'Expense Type', 'Amount', 'Tenant', 'Building', 'Method'].map((col) => {
                                    const key = columnKeyMap[col];
                                    return (
                                        <th
                                            key={col}
                                            onClick={() => handleSort(key)}
                                            className="py-3 text-sm px-6 whitespace-nowrap text-priTextColor"
                                        >
                                            <div className='flex gap-2 cursor-pointer'>
                                                {col}
                                                {sortConfig.key === key ? (
                                                    <span className="text-xl">
                                                        {sortConfig.direction === 'asc' ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
                                                    </span>
                                                ) : (
                                                    <IoChevronUpOutline className="text-xl" />
                                                )}
                                            </div>
                                        </th>
                                    );
                                })}
                                <th className="px-6 py-3 whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((expense, index) => (
                                <tr key={index} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{expense.date}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{expense.account}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{expense.expenseType}
                                        {
                                            expense.relatedInvoice &&
                                            <Link className='text-priColor hover:text-secColor hover:underline' href={"http://localhost:3000/dashboard/invoices/1"}>
                                                ({expense.relatedInvoice})
                                            </Link>
                                        }
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">৳ {expense.amount}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priColor hover:text-secColor hover:underline">
                                        <Link href={"http://localhost:3000/dashboard/tenants/248685"}>
                                            {expense.tenant}
                                        </Link>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priColor hover:text-secColor hover:underline">
                                        <Link href={"http://localhost:3000/dashboard/buildings/1"}>
                                            {expense.building}
                                        </Link>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{expense.method}</td>
                                    <td className="whitespace-nowrap px-6 py-4 mt-0.5 flex justify-start gap-3">
                                        <Link href={`/dashboard/expenses/${expense.id}`}>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                                <IoEye className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                        </Link>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                            <FaEdit className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                        </Tooltip>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                            <FaTrashAlt onClick={onDeleteWarningChange} className="!bg-danger p-1 rounded text-white text-2xl mt-[1px] cursor-pointer" />
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

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
                headingText="Delete expense"
                descriptionText="Are you sure you want to delete this expense record?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                // onConfirm={console.log('Delete expense')}
            />
        </div>
    );
};

export default ExpenseListHome;
