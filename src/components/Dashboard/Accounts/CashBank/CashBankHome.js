"use client"

import { v4 as uuidv4 } from 'uuid';
import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye, IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ButtonComponent from '../../../GlobalComponent/ButtonComponent';
import WarningPopup from '../../../Popup/WarningPopup';
import SearchComponent from '../../../GlobalComponent/SearchComponent';
import AddEditAccount from './AddEditAccount';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { toast } from 'react-toastify';
import CashBankDetailsPopup from './CashBankDetailsPopup';

const CashBankHome = () => {

    const [accountData, setAccountData] = useState([
        { id: 1, accountTitle: 'Cash in Hand', accountNumber: 'Cash in Hand', openingDate: '2025-04-17', balance: '577600.00', note: 'lorem ipsum dolor sit amet consectetur, lorem ipsum dolor sit amet consectetur' },
        { id: 2, accountTitle: 'Bank - BDT', accountNumber: '561654564', openingDate: '2023-04-17', balance: '77600.00', note: 'lorem ipsum dolor sit amet consectetur' },
    ]);

    const [selectedAccount, setSelectedAccount] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedAccount(null);
        onModalOpen();
    };

    const handleEditClick = (account) => {
        setSelectedAccount(account);
        onModalOpen();
    };

    const handleAddOrEditAccount = (newData) => {
        if (newData.id) {
            // Edit
            setAccountData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            // Add
            const newAccountId = uuidv4(); // Generate a unique ID using uuidv4
            const newAccount = {
                ...newData,
                id: newAccountId,
            };
            setAccountData((prev) => [...prev, newAccount]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Account Title': 'accountTitle',
        'Account Number': 'accountNumber',
        'Current Balance': 'balance',
    };

    const filteredData = useMemo(() => {
        let filtered = accountData.filter(item =>
            item.accountTitle.toLowerCase().includes(search.toLowerCase()) ||
            item.accountNumber.toLowerCase().includes(search.toLowerCase()) ||
            item.balance.toLowerCase().includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = a[sortConfig.key].toLowerCase();
                const bVal = b[sortConfig.key].toLowerCase();
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, accountData]);

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

    const handleDeleteAccount = () => {
        if (!selectedAccount) return;

        const updatedAccounts = accountData.filter(
            (account) => account.id !== selectedAccount.id
        );
        setAccountData(updatedAccounts);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    const handleViewClick = (account) => {
        setSelectedAccount(account);
        onDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Account List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search account"}
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonClass=""
                        buttonText="Add account"
                        startContent={<MdOutlineAccountBalance className='text-[18px]' />}
                    />
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Account Title', 'Account Number', 'Current Balance'].map((col) => {
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
                                    )
                                })}
                                <th className="px-6 py-3 whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((account) => (
                                <tr key={account.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{account.accountTitle}</td>
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{account.accountNumber}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">৳ {account.balance}</td>
                                    <td className="whitespace-nowrap px-6 py-4 mt-0.5 flex justify-start gap-3">
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                            <IoEye onClick={() => handleViewClick(account)} className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                        </Tooltip>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                            <FaEdit onClick={() => handleEditClick(account)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                        </Tooltip>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                            <FaTrashAlt
                                                onClick={() => {
                                                    setSelectedAccount(account);
                                                    onDeleteWarningOpen();
                                                }}
                                                className="!bg-danger p-1 rounded text-white text-2xl mt-[1px] cursor-pointer" />
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
                onConfirm={handleDeleteAccount}
            />
            <AddEditAccount
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditAccount}
                selectedAccount={selectedAccount}
            />
            <CashBankDetailsPopup
                isOpen={isDetailsOpen}
                onOpenChange={onDetailsOpenChange}
                headingText={selectedAccount?.accountTitle}
                descriptionText={selectedAccount?.accountNumber}
                selectedAccount={selectedAccount}
            />
        </div>
    );
};

export default CashBankHome;