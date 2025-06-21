"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye } from "react-icons/io5";
import { Button, Pagination, Popover, PopoverContent, PopoverTrigger, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdCheck, MdKeyboardArrowDown } from 'react-icons/md';
import { toast } from 'react-toastify';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import { GrUserWorker } from 'react-icons/gr';
import Image from 'next/image';
import AddEditMechanic from './AddEditMechanic';
import { BiSolidCarMechanic } from 'react-icons/bi';

const MechanicsHome = () => {
    const [mechanicsData, setMechanicsData] = useState([
        {
            id: 1,
            name: 'Abdullah Al Noman',
            phone: '01712345678',
            workingArea: 'Dhanmondi, Dhaka',
            type: 'Electrician',
        },
        {
            id: 2,
            name: 'Tania Rahman',
            phone: '01898765432',
            workingArea: 'Gulshan, Dhaka',
            type: 'Plumber',
        },
    ]);

    const [selectedMechanic, setSelectedMechanic] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedMechanic(null);
        onModalOpen();
    };

    const handleEditClick = (mechanic) => {
        setSelectedMechanic(mechanic);
        onModalOpen();
    };

    const handleAddOrEditMechanic = (newData) => {
        if (newData.id) {
            setMechanicsData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            const newMechanic = {
                ...newData,
            };
            setMechanicsData((prev) => [...prev, newMechanic]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Name': 'name',
        'Phone': 'phone',
    };

    const filteredData = useMemo(() => {
        if (!Array.isArray(mechanicsData)) return [];

        let filtered = mechanicsData.filter(item =>
            (item.name?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.phone?.toLowerCase() || "").includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = (a[sortConfig.key]?.toString().toLowerCase()) || "";
                const bVal = (b[sortConfig.key]?.toString().toLowerCase()) || "";
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, mechanicsData]);

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

    const handleDeleteMechanic = () => {
        if (!selectedMechanic) return;

        const updated = mechanicsData.filter(
            (m) => m.id !== selectedMechanic.id
        );
        setMechanicsData(updated);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Mechanics List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search mechanics"}
                    />
                    <div className='flex gap-2'>
                        <ButtonComponent
                            onClick={handleAddClick}
                            buttonClass="w-full"
                            buttonText="Add mechanic"
                            startContent={<BiSolidCarMechanic className='text-[18px]' />}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Name', 'Phone'].map((col) => {
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
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Working area</th>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Type</th>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((mechanic) => (
                                <tr key={mechanic.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{mechanic.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{mechanic.phone}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{mechanic.workingArea}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{mechanic.type}</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                                <FaEdit onClick={() => handleEditClick(mechanic)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                                <FaTrashAlt
                                                    onClick={() => {
                                                        setSelectedMechanic(mechanic);
                                                        onDeleteWarningOpen();
                                                    }}
                                                    className="!bg-danger p-1 rounded text-white text-2xl mt-[1px] cursor-pointer" />
                                            </Tooltip>
                                        </div>
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
                headingText="Delete mechanic"
                descriptionText="Are you sure you want to delete this?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                onConfirm={handleDeleteMechanic}
            />
            <AddEditMechanic
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditMechanic}
                selectedMechanic={selectedMechanic}
            />
        </div>
    );
};

export default MechanicsHome;