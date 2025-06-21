"use client"
import { v4 as uuidv4 } from 'uuid';
import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye, IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import ButtonComponent from '../../../GlobalComponent/ButtonComponent';
import WarningPopup from '../../../Popup/WarningPopup';
import SearchComponent from '../../../GlobalComponent/SearchComponent';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { toast } from 'react-toastify';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import LoanDetailsPopup from './LoanDetailsPopup';
import AddEditLoanAccount from './AddEditLoanAccount';
import GetOutLoan from './GetOutLoan';
import ReturnLoan from './ReturnLoan';

const OutLoanHome = () => {

    const [loanData, setLoanData] = useState([
        { id: 1, openingDate: '2023-01-01', name: 'John Doe', company: 'ABC Ltd.', profession: 'Engineer', mobile: '01712345678', balance: '15000.00', interest: '5', status: 'active', address: '123 Main St, City' },
        { id: 2, openingDate: '2025-02-15', name: 'Jane Smith', company: 'XYZ Corp.', profession: 'Designer', mobile: '01898765432', balance: '20000.00', interest: '4', status: 'inactive', address: '456 Elm St, Town' },
    ]);


    const [selectedLoanAccount, setSelectedLoanAccount] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();
    const { isOpen: isGetOutLoanOpen, onOpen: onGetOutLoanOpen, onOpenChange: onGetOutLoanOpenChange } = useDisclosure();
    const { isOpen: isReturnLoanLoanOpen, onOpen: onReturnLoanOpen, onOpenChange: onReturnLoanOpenChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedLoanAccount(null);
        onModalOpen();
    };

    const handleGetLoanAddClick = () => {
        setSelectedLoanAccount(null);
        onGetOutLoanOpen();
    };

    const handleReturnLoanAddClick = () => {
        setSelectedLoanAccount(null);
        onReturnLoanOpen();
    };

    const handleEditClick = (loanAccount) => {
        setSelectedLoanAccount(loanAccount);
        onModalOpen();
    };

    const handleAddOrEditAccount = (newData) => {
        if (newData.id) {
            // Edit
            setLoanData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            // Add
            const newAccountId = uuidv4(); // Generate a unique ID using uuidv4
            const newAccount = {
                ...newData,
                id: newAccountId,
            };
            setLoanData((prev) => [...prev, newAccount]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Name': 'name',
        'Company': 'company',
        'Mobile': 'mobile',
        'Balance': 'balance',
        'Interest': 'interest',
        'Status': 'status',
    };

    const filteredData = useMemo(() => {
        let filtered = loanData.filter(item =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.company.toLowerCase().includes(search.toLowerCase()) ||
            item.balance.toLowerCase().includes(search.toLowerCase()) ||
            item.interest.toLowerCase().includes(search.toLowerCase()) ||
            item.status.toLowerCase().includes(search.toLowerCase()) ||
            item.mobile.toLowerCase().includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = a[sortConfig.key].toLowerCase();
                const bVal = b[sortConfig.key].toLowerCase();
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, loanData]);

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
        if (!selectedLoanAccount) return;

        const updatedAccounts = loanData.filter(
            (loanAccount) => loanAccount.id !== selectedLoanAccount.id
        );
        setLoanData(updatedAccounts);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    const handleViewClick = (loanAccount) => {
        setSelectedLoanAccount(loanAccount);
        onDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Outloan List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search loan account"}
                    />
                    <div className='flex gap-2'>
                        <ButtonComponent
                            onClick={handleAddClick}
                            buttonClass=""
                            buttonText="Add new"
                            startContent={<MdOutlineAccountBalance className='text-[18px]' />}
                        />
                        <ButtonComponent
                            onClick={handleGetLoanAddClick}
                            buttonClass="!bg-secColor"
                            buttonText="Get loan"
                            startContent={<GiReceiveMoney className='text-[18px]' />}
                        />
                        <ButtonComponent
                            onClick={handleReturnLoanAddClick}
                            buttonClass="!bg-accent"
                            buttonText="Return loan"
                            startContent={<GiPayMoney className='text-[18px]' />}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Name', 'Company', 'Mobile', 'Balance', 'Interest', 'Status'].map((col) => {
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
                            {paginatedData.map((loan) => (
                                <tr key={loan.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{loan.name}</td>
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{loan.company}</td>
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{loan.mobile}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">
                                        ৳{loan.balance ? loan.balance : 0}
                                    </td>
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">
                                        {loan.interest ? loan.interest : 0}%
                                    </td>
                                    <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">
                                        <p className={`text-center capitalize pt-0.5 pb-0.5 text-sm text-white font-medium rounded ${loan.status === 'active' ? 'bg-accent' :
                                            'bg-danger'}`}>
                                            {loan.status}
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 mt-0.5 flex justify-start gap-3">
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                            <IoEye onClick={() => handleViewClick(loan)} className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                        </Tooltip>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                            <FaEdit onClick={() => handleEditClick(loan)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                        </Tooltip>
                                        <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                            <FaTrashAlt
                                                onClick={() => {
                                                    setSelectedLoanAccount(loan);
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
            <AddEditLoanAccount
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditAccount}
                selectedLoanAccount={selectedLoanAccount}
            />
            <LoanDetailsPopup
                isOpen={isDetailsOpen}
                onOpenChange={onDetailsOpenChange}
                headingText={selectedLoanAccount?.accountTitle}
                descriptionText={selectedLoanAccount?.accountNumber}
                selectedLoanAccount={selectedLoanAccount}
            />
            <GetOutLoan
                isOpen={isGetOutLoanOpen}
                onOpenChange={onGetOutLoanOpenChange}
            />
            <ReturnLoan
                isOpen={isReturnLoanLoanOpen}
                onOpenChange={onReturnLoanOpenChange}
            />
        </div>
    );
};

export default OutLoanHome;