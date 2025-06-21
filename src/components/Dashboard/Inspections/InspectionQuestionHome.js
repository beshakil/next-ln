"use client";

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { GrVmMaintenance } from 'react-icons/gr';
import { toast } from 'react-toastify';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import AddEditQuestion from './AddEditQuestion';
import { TiInfoOutline } from 'react-icons/ti';

const InspectionQuestionHome = () => {

    const [inspectionsData, setInspectionsData] = useState([
        { id: 1, question: 'সিসিটিভি ক্যামেরা ও নিরাপত্তা ব্যবস্থা ঠিক আছে?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 2, question: 'বাড়ির বাইরের অংশ যেমন বারান্দা ও সিঁড়ির অবস্থা কেমন?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 3, question: 'ফায়ার সেফটি ব্যবস্থা আছে?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 4, question: 'গ্যাস লাইন ও সিলিন্ডারের নিরাপত্তা ব্যবস্থা ঠিক আছে?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 5, question: 'রান্নাঘরের অবস্থা কেমন?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 6, question: 'সেপ্টিক ট্যাংক ও ড্রেনেজ ব্যবস্থা ঠিক আছে?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 7, question: 'পানির লাইন ও পাইপ ঠিক আছে?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 8, question: 'বাথরুম ও টয়লেট ব্যবস্থার অবস্থা কেমন?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 9, question: 'বাড়ির দরজা এবং জানালার অবস্থা কেমন?', entryDate: '2025-02-24', createdBy: 'Test user' },
        { id: 10, question: 'বিদ্যুৎ ব্যবস্থা ঠিকমতো কাজ করছে?', entryDate: '2025-02-24', createdBy: 'Test user' },
    ]);

    const [selectedInspection, setSelectedInspection] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();

    const columnKeyMap = {
        'Question': 'question',
        'Entry Date': 'entryDate',
        'Created By': 'createdBy',
    };

    const handleEditClick = (inspection) => {
        setSelectedInspection(inspection);
        onModalOpen();
    };

    const handleAddOrEditQuestion = (newData) => {
        if (newData.id) {
            setInspectionsData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            const newInspection = {
                ...newData,
            };
            setInspectionsData((prev) => [...prev, newInspection]);
        }
        onModalChange(false);
    };

    const filteredData = useMemo(() => {
        let filtered = inspectionsData.filter(item =>
            (item.question?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.entryDate?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.createdBy?.toLowerCase() || "").includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = (a[sortConfig.key]?.toString().toLowerCase()) || "";
                const bVal = (b[sortConfig.key]?.toString().toLowerCase()) || "";
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, inspectionsData]);

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

    const handleDeleteInspection = () => {
        if (!selectedInspection) return;

        const updatedInspections = inspectionsData.filter(
            (inspection) => inspection.id !== selectedInspection.id
        );
        setInspectionsData(updatedInspections);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Question List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search question"}
                    />
                    <ButtonComponent
                        onClick={onModalOpen}
                        buttonClass=""
                        buttonText="Add new question"
                        startContent={<TiInfoOutline className='text-[18px]' />}
                    />
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Question', 'Entry Date', 'Created By'].map((col) => {
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
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((inspection) => (
                                <tr key={inspection.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{inspection.question}</td>
                                    <td className="px-6 py-4 text-priTextColor">{inspection.entryDate}</td>
                                    <td className="px-6 py-4 text-priTextColor">{inspection.createdBy}</td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                                <FaEdit onClick={() => handleEditClick(inspection)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                                <FaTrashAlt
                                                    onClick={() => {
                                                        setSelectedInspection(inspection);
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
                headingText="Delete inspection question"
                descriptionText="Are you sure you want to delete this?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                onConfirm={handleDeleteInspection}
            />

            <AddEditQuestion
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditQuestion}
                selectedCondition={selectedInspection}
            />

        </div>
    );
};

export default InspectionQuestionHome;
