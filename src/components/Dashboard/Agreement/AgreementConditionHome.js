"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye, IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import { Pagination, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineAccountBalance } from 'react-icons/md';
import { toast } from 'react-toastify';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import { GrVmMaintenance } from 'react-icons/gr';
import AddEditCondition from './AddEditCondition';
// import AddEditMaintenance from './AddEditMaintenance';
// import MaintenanceDetailsPopup from './MaintenanceDetailsPopup';

const AgreementConditionHome = () => {

    const [conditionsData, setConditionsData] = useState([
        {
            id: 1,
            condition: 'অগ্নি-নির্বাপক ব্যবস্থা',
            details: 'যে কোন দুর্ঘটনার জন্য ভাড়াটিয়া দায়বদ্ধ হবেন। ভাড়াটিয়াকে বাড়ির অগ্নি-নির্বাপক যন্ত্রপাতি সঠিকভাবে ব্যবহার করতে হবে।',
        },
        {
            id: 2,
            condition: 'অতিরিক্ত বিদ্যুৎ সংযোগ',
            details: 'ভাড়াটিয়া নতুন কোনো বিদ্যুৎ সংযোগ বা বৈদ্যুতিক যন্ত্রপাতি ইনস্টল করতে চাইলে মালিকের অনুমতি নিতে হবে।',
        },
        {
            id: 3,
            condition: 'অতিরিক্ত ব্যক্তি বসবাস',
            details: 'মালিকের অনুমতি ছাড়া অতিরিক্ত ব্যক্তি বাড়িতে থাকতে পারবেন না।',
        },
        {
            id: 4,
            condition: 'আইনি সুরক্ষা',
            details: 'চুক্তি সংক্রান্ত যে কোন বিরোধের নিষ্পত্তি হবে বাংলাদেশের প্রচলিত আইনের অধীনে।',
        },
        {
            id: 5,
            condition: 'ইনস্পেকশন নীতি',
            details: 'জরুরি প্রয়োজনে অনুমতি ছাড়াই পরিদর্শন করা যাবে। মালিক আগাম নোটিশ দিয়ে বাড়ি পরিদর্শনের অধিকার রাখেন।',
        },
        {
            id: 6,
            condition: 'নতুন সংস্কার বা রক্ষণাবেক্ষণ',
            details: 'বাড়ির রক্ষণাবেক্ষণের খরচ মালিক বহন করবেন। তবে, ভাড়াটিয়া যদি কোন ক্ষতি করে, তা ভাড়াটিয়াকে মেরামত করতে হবে।',
        },
        {
            id: 7,
            condition: 'পোষা প্রাণী সংক্রান্ত নীতি',
            details: 'অনুমতি ছাড়া পোষা প্রাণী রাখা যাবে না। পোষা প্রাণী রাখার জন্য মালিকের অনুমতি নিতে হবে।',
        },
        {
            id: 8,
            condition: 'ফার্নিচার ব্যবহার',
            details: 'ক্ষতির জন্য ভাড়াটিয়া দায়বদ্ধ থাকবেন। যদি বাড়িতে ফার্নিচার দেওয়া থাকে, তবে তা সঠিকভাবে ব্যবহার করতে হবে।',
        },
        {
            id: 9,
            condition: 'বাড়ি পরিস্কার পরিচ্ছন্নতা',
            details: 'ভাড়াটিয়াকে ভাড়ার সময় বাড়ি পরিষ্কার রাখতে হবে। চুক্তি শেষে বাড়ি মালিকের কাছে একই অবস্থায় ফেরত দিতে হবে।',
        },
        {
            id: 10,
            condition: 'বাড়ির চাবি সংক্রান্ত নীতি',
            details: 'নতুন চাবি তৈরি করতে হলে মালিকের অনুমতি নিতে হবে। বাড়ির চাবি ভাড়াটিয়ার কাছে থাকবে।',
        },
    ]);

    const [selectedCondition, setSelectedCondition] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();

    const columnKeyMap = {
        'Condition': 'condition',
        'Details': 'details',
    };

    const handleEditClick = (condition) => {
        setConditionsData(condition);
        onModalOpen();
    };

    const handleAddOrEditCondition = (newData) => {
        if (newData.id) {
            // Edit
            setConditionsData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            // Add
            const newAccount = {
                ...newData,
            };
            setConditionsData((prev) => [...prev, newAccount]);
        }
        onModalChange(false);
    };

    const filteredData = useMemo(() => {
        if (!Array.isArray(conditionsData)) return [];

        let filtered = conditionsData.filter(item =>
            (item.condition?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.details?.toLowerCase() || "").includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = (a[sortConfig.key]?.toString().toLowerCase()) || "";
                const bVal = (b[sortConfig.key]?.toString().toLowerCase()) || "";
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, conditionsData]);

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

    const handleDeleteCondition = () => {
        if (!selectedCondition) return;

        const updatedConditions = conditionsData.filter(
            (condition) => condition.id !== selectedCondition.id
        );
        setConditionsData(updatedConditions);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    const handleViewClick = (condition) => {
        setSelectedCondition(condition);
        onDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Condition List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search condition"}
                    />
                    <div className='flex gap-2'>
                        <ButtonComponent
                            onClick={handleAddOrEditCondition}
                            buttonClass=""
                            buttonText="Add new condition"
                            startContent={<GrVmMaintenance className='text-[18px]' />}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                {['Condition', 'Details'].map((col) => {
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
                            {paginatedData.map((condition) => (
                                <tr key={condition.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{condition.condition}</td>
                                    <td className="px-6 py-4 text-priTextColor">
                                        <p className='sm:w-auto w-80 word-break text-justify'>{condition.details}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            {/* <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                                <IoEye onClick={() => handleViewClick(condition)} className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip> */}
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                                <FaEdit onClick={() => handleEditClick(condition)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                                <FaTrashAlt
                                                    onClick={() => {
                                                        setSelectedCondition(condition);
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
                headingText="Delete maintenance request"
                descriptionText="Are you sure you want to delete this?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
                onConfirm={handleDeleteCondition}
            />
           <AddEditCondition
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditCondition}
                selectedCondition={selectedCondition}
            />

        </div>
    );
};

export default AgreementConditionHome;