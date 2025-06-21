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
import AddEditMaintenance from './AddEditMaintenance';
import MaintenanceDetailsPopup from './MaintenanceDetailsPopup';

const MaintenanceHome = () => {

    const [mainTenanceData, setMainTenanceData] = useState([
        {
            id: 1,
            tenant: 'John Doe',
            reason: 'Unauthorized guests entry, noise complaints, etc',
            submissionDate: '2025-04-10',
            building: 'Building 1',
            flat: '1A',
            floor: '2nd Floor',
            status: 'Pending',
        },
        {
            id: 2,
            tenant: 'Jane Smith',
            reason: 'Unauthorized guests entry, noise complaints, etc. lorm ipsum dolor sit amet, Unauthorized guests entry, noise complaints, etc. lorm ipsum dolor sit amet',
            submissionDate: '2025-04-15',
            building: 'Building 3',
            flat: '3A',
            floor: '3nd Floor',
            status: 'Processing',
        },
        {
            id: 3,
            tenant: 'Jane Smith',
            reason: 'Unauthorized guests entry, noise complaints, etc. lorm ipsum dolor sit amet, etc. lorm ipsum dolor sit amet',
            submissionDate: '2025-04-15',
            building: 'Building 3',
            flat: '3A',
            floor: '3nd Floor',
            status: 'Working',
        },
        {
            id: 4,
            tenant: 'Jane Smith',
            reason: 'Unauthorized guests entry, noise complaints, etc.',
            submissionDate: '2025-04-15',
            building: 'Building 3',
            flat: '3A',
            floor: '3nd Floor',
            status: 'Complete',
        },
    ]);

    const [selectedMaintenance, setSelectedMaintenance] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedMaintenance(null);
        onModalOpen();
    };

    const handleEditClick = (maintenance) => {
        setSelectedMaintenance(maintenance);
        onModalOpen();
    };

    const handleAddOrEditMaintenance = (newData) => {
        if (newData.id) {
            // Edit
            setMainTenanceData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            // Add
            const newAccount = {
                ...newData,
            };
            setMainTenanceData((prev) => [...prev, newAccount]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Tenant': 'tenant',
        'Reason': 'reason',
        'Sub-Mission Date': 'subMissionDate',
        'Building': 'building',
    };

    const filteredData = useMemo(() => {
        if (!Array.isArray(mainTenanceData)) return [];

        let filtered = mainTenanceData.filter(item =>
            (item.tenant?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.reason?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.submissionDate?.toLowerCase() || "").includes(search.toLowerCase()) ||
            (item.building?.toLowerCase() || "").includes(search.toLowerCase())
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = (a[sortConfig.key]?.toString().toLowerCase()) || "";
                const bVal = (b[sortConfig.key]?.toString().toLowerCase()) || "";
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, mainTenanceData]);

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
        if (!selectedMaintenance) return;

        const updatedAccounts = mainTenanceData.filter(
            (maintenance) => maintenance.id !== selectedMaintenance.id
        );
        setMainTenanceData(updatedAccounts);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    const handleViewClick = (maintenance) => {
        setSelectedMaintenance(maintenance);
        onDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Maintenance List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search maintenance"}
                    />
                    <div className='flex gap-2'>
                        <ButtonComponent
                            onClick={handleAddClick}
                            buttonClass=""
                            buttonText="Add new request"
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
                                {['Tenant', 'Reason', 'Sub-Mission Date', 'Building'].map((col) => {
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
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Floor/Flat</th>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Status</th>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((maintenance) => (
                                <tr key={maintenance.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{maintenance.tenant}</td>
                                    <td className="px-6 py-4 text-priTextColor">
                                        <p className='sm:w-auto w-80 word-break text-justify'>{maintenance.reason}</p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{maintenance.submissionDate}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{maintenance.building}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{maintenance.floor}/{maintenance.flat}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">
                                        <p className={`text-center capitalize px-2 pt-0.5 pb-0.5 text-[13px] text-white font-medium rounded ${maintenance.status === 'Pending' ? 'bg-danger' : maintenance.status === 'Processing' ? 'bg-yellow-600' : maintenance.status === 'Working' ? 'bg-secColor' : maintenance.status === 'Complete' ? 'bg-accent' : ''}`}>
                                            {maintenance.status}
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                                <IoEye onClick={() => handleViewClick(maintenance)} className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                                <FaEdit onClick={() => handleEditClick(maintenance)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                                <FaTrashAlt
                                                    onClick={() => {
                                                        setSelectedMaintenance(maintenance);
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
                onConfirm={handleDeleteAccount}
            />
            <AddEditMaintenance
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditMaintenance}
                selectedMaintenance={selectedMaintenance}
            />
            <MaintenanceDetailsPopup
                isOpen={isDetailsOpen}
                onOpenChange={onDetailsOpenChange}
                selectedMaintenance={selectedMaintenance}
            />
        </div>
    );
};

export default MaintenanceHome;