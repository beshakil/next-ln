"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye } from "react-icons/io5";
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import AddEditMaintenance from './AddEditHousekeeper';

import { FaUserGroup } from 'react-icons/fa6';

const HousekeeperHome = () => {

    const [housekeeperData, setHousekeeperData] = useState([
        {
            id: 1,
            name: 'Abdul Karim',
            phone: '01711223344',
            address: '123 Green Road, Dhaka',
            nid: '1990001122334',
            assignedTo: 'Abdul Karim',
        },
        {
            id: 2,
            name: 'Rahima Khatun',
            phone: '01844556677',
            address: '456 Banani, Dhaka',
            nid: '1992034567890',
            assignedTo: '',
        },
        {
            id: 3,
            name: 'Hasan Ali',
            phone: '01999887766',
            address: '789 Gulshan, Dhaka',
            nid: '1987123456789',
            assignedTo: '',
        },
    ]);

    const [selectedHousekeeper, setSelectedHousekeeper] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedHousekeeper(null);
        onModalOpen();
    };

    const handleEditClick = (housekeeper) => {
        setSelectedHousekeeper(housekeeper);
        onModalOpen();
    };

    const handleAddOrEditHousekeeper = (newData) => {
        if (newData.id) {
            setHousekeeperData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            const newEntry = {
                ...newData,
            };
            setHousekeeperData((prev) => [...prev, newEntry]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Name': 'name',
        'Phone Number': 'phone',
    };

    const filteredData = useMemo(() => {
        let filtered = housekeeperData.filter(item =>
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
    }, [search, sortConfig, housekeeperData]);

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

    const handleDeleteHousekeeper = () => {
        if (!selectedHousekeeper) return;

        const updatedData = housekeeperData.filter(
            (item) => item.id !== selectedHousekeeper.id
        );
        setHousekeeperData(updatedData);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="text-2xl font-bold text-priTextColor dark:text-zinc-200">
                    Housekeeper List
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search housekeeper..."}
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonText="Add new housekeeper"
                        startContent={<FaUserGroup className="text-[18px]" />}
                    />
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 bg-white dark:bg-gray-800">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Name', 'Phone'].map((col) => {
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
                                <th className="px-6 py-3 text-priTextColor text-sm">Address</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">NID</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">Assign To</th>
                                <th className="px-6 py-3 text-priTextColor text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item) => (
                                <tr key={item.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.nid}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">{item.assignedTo}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-priTextColor">
                                        <div className="flex gap-3">
                                            <Tooltip content={<span className="text-xs text-white">Edit</span>}>
                                                <FaEdit onClick={() => handleEditClick(item)} className="text-white bg-secColor p-1 rounded text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip content={<span className="text-xs text-white">Delete</span>}>
                                                <FaTrashAlt onClick={() => {
                                                    setSelectedHousekeeper(item);
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
                headingText="Delete housekeeper"
                descriptionText="Are you sure you want to delete this housekeeper?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                onConfirm={handleDeleteHousekeeper}
            />
            <AddEditMaintenance
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditHousekeeper}
                selectedHousekeeper={selectedHousekeeper}
            />
        </div>
    );
};

export default HousekeeperHome;
