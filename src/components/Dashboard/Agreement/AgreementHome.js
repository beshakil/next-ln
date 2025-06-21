"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye } from "react-icons/io5";
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import { FaFileContract } from 'react-icons/fa6';
import Link from 'next/link';
import AddEditAgreement from './AddEditAgreement';

const AgreementHome = () => {

    const [agreementData, setAgreementData] = useState([
        {
            id: 1,
            tenantName: 'Abdul Karim',
            building: 'ABC',
            floor: '1st Floor',
            flat: 'A-3',
            agreementNumber: 'AG-001',
            startDate: '2025-01-01',
            endDate: '2025-12-31',
        },
        {
            id: 2,
            tenantName: 'Rahima Khatun',
            building: 'DEF',
            floor: '2nd Floor',
            flat: 'B-2',
            agreementNumber: 'AG-002',
            startDate: '2025-02-01',
            endDate: '2026-01-31',
        }
    ]);

    const [selectedAgreement, setSelectedAgreement] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedAgreement(null);
        onModalOpen();
    };

    const handleEditClick = (agreement) => {
        setSelectedAgreement(agreement);
        onModalOpen();
    };

    const handleAddOrEditAgreement = (newData) => {
        if (newData.id) {
            setAgreementData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            const newEntry = {
                ...newData,
            };
            setAgreementData((prev) => [...prev, newEntry]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Tenant Name': 'tenantName',
        'Building': 'building',
    };

    const filteredData = useMemo(() => {
        let filtered = agreementData.filter(item =>
            Object.values(columnKeyMap).some(key =>
                (item[key]?.toLowerCase() || "").includes(search.toLowerCase())
            )
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = (a[sortConfig.key]?.toLowerCase()) || "";
                const bVal = (b[sortConfig.key]?.toLowerCase()) || "";
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, agreementData]);

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

    const handleDeleteAgreement = () => {
        if (!selectedAgreement) return;

        const updatedData = agreementData.filter(
            (item) => item.id !== selectedAgreement.id
        );
        setAgreementData(updatedData);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    const handleViewClick = (maintenance) => {
        setSelectedAgreement(maintenance);
        onDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="text-2xl font-bold text-priTextColor dark:text-zinc-200">
                    Agreement List
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search agreement..."}
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonText="Add new agreement"
                        startContent={<FaFileContract className="text-[18px]" />}
                    />
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 bg-white dark:bg-gray-800">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Tenant Name', 'Building'].map((col) => {
                                    const key = columnKeyMap[col];
                                    return (
                                        <th key={col} onClick={() => handleSort(key)} className="py-3 px-6 text-sm text-priTextColor cursor-pointer">
                                            <div className="flex items-center gap-2">
                                                {col}
                                                {sortConfig.key === key ? (
                                                    sortConfig.direction === 'asc' ? <IoChevronUpOutline /> : <IoChevronDownOutline />
                                                ) : (
                                                    <IoChevronUpOutline />
                                                )}
                                            </div>
                                        </th>
                                    );
                                })}
                                <th className="px-6 py-3 text-priTextColor text-sm">Floor/Flat</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">Agreement</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">Start Date</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">End Date</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item) => (
                                <tr key={item.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.tenantName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.building}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.floor} - {item.flat}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.agreementNumber}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.startDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.endDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">
                                        <div className="flex gap-3">
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                                <Link href={`/dashboard/agreements/${item.id}`}>
                                                    <IoEye className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                                </Link>
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className="text-xs text-white">Edit</span>} showArrow={true}>
                                                <FaEdit onClick={() => handleEditClick(item)} className="text-white bg-secColor p-1 rounded text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className="text-xs text-white">Delete</span>} showArrow={true}>
                                                <FaTrashAlt onClick={() => {
                                                    setSelectedAgreement(item);
                                                    onDeleteWarningOpen();
                                                }} className="text-white bg-danger p-1 rounded text-2xl cursor-pointer" />
                                            </Tooltip>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex sm:flex-row flex-col justify-between items-center mt-4">
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
                headingText="Delete agreement"
                descriptionText="Are you sure you want to delete this agreement?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                onConfirm={handleDeleteAgreement}
            />
            <AddEditAgreement
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditAgreement}
                selectedAgreement={selectedAgreement}
            />
        </div>
    );
};

export default AgreementHome;
