"use client"

import React, { useMemo, useState } from 'react';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye, IoSearchOutline, IoSettingsSharp } from "react-icons/io5";
import { Button, Pagination, Popover, PopoverContent, PopoverTrigger, Tooltip, useDisclosure } from '@heroui/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdCheck, MdKeyboardArrowDown, MdOutlineAccountBalance } from 'react-icons/md';
import { toast } from 'react-toastify';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import { GrUserWorker, GrVmMaintenance } from 'react-icons/gr';
import userImage from '../../../assets/jpg/userImage.jpeg'
import Image from 'next/image';
import StaffDetailsPopup from './StaffDetailsPopup';
import AddEditStaff from './AddEditStaff';

const StaffsHome = () => {

    const [staffsData, setStaffsData] = useState([
        {
            id: 1,
            image: userImage,
            name: 'Abdullah Al Noman',
            staffId: 'STF001',
            status: 'Active',
            role: 'Manager',
            canDelete: true,
            joiningDate: '2025-01-10',
            father: 'Ali Noman',
            mother: 'Fatima Begum',
            branch: 'Management Unit',
            nationalId: '12345678901',
            address: 'Dhanmondi, Dhaka',
            basicSalary: 12000.00,
        },
        {
            id: 2,
            image: userImage,
            name: 'Tania Rahman',
            staffId: 'STF002',
            status: 'Inactive',
            role: 'Cleaner',
            canDelete: false,
            joiningDate: '2024-11-20',
            father: 'Rahman Ali',
            mother: 'Nurjahan Begum',
            branch: 'Cleaning Unit',
            nationalId: '98765432109',
            address: 'Gulshan, Dhaka',
            basicSalary: 8000.00
        },
    ]);

    const [openPopoverId, setOpenPopoverId] = useState(null);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();
    const { isOpen: isDetailsOpen, onOpen: onDetailsOpen, onOpenChange: onDetailsOpenChange } = useDisclosure();

    const handleAddClick = () => {
        setSelectedStaff(null);
        onModalOpen();
    };

    const handleEditClick = (maintenance) => {
        setSelectedStaff(maintenance);
        onModalOpen();
    };

    const handleAddOrEditStaff = (newData) => {
        if (newData.id) {
            // Edit
            setStaffsData((prev) =>
                prev.map((item) => (item.id === newData.id ? newData : item))
            );
        } else {
            // Add
            const newAccount = {
                ...newData,
            };
            setStaffsData((prev) => [...prev, newAccount]);
        }
        onModalChange(false);
    };

    const columnKeyMap = {
        'Name': 'name',
        'Staff ID': 'staffId',
        'Status': 'status',
        'Role': 'role',
    };

    const filteredData = useMemo(() => {
        if (!Array.isArray(staffsData)) return [];

        let filtered = staffsData.filter(item =>
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
    }, [search, sortConfig, staffsData]);

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

    const handleDeletePermission = (staff, status) => {
        const updatedStaffs = staffsData.map((t) =>
            t.id === staff.id ? { ...t, canDelete: status } : t
        );
        setStaffsData(updatedStaffs);
        setOpenPopoverId(null); // Close popover after selection
    };

    const handleDeleteAccount = () => {
        if (!selectedStaff) return;

        const updatedAccounts = staffsData.filter(
            (staff) => staff.id !== selectedStaff.id
        );
        setStaffsData(updatedAccounts);
        setCurrentPage(1);
        onDeleteWarningChange(false);
        toast.success("Deleted successfully");
    };

    const handleViewClick = (staff) => {
        setSelectedStaff(staff);
        onDetailsOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Staffs List</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder={"Search staffs"}
                    />
                    <div className='flex gap-2'>
                        <ButtonComponent
                            onClick={handleAddClick}
                            buttonClass=""
                            buttonText="Add staff"
                            startContent={<GrUserWorker className='text-[18px]' />}
                        />
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                <div className='overflow-x-auto'>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Image</th>
                                {['Name', 'Staff ID', 'Role'].map((col) => {
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
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Status</th>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Delete Permission</th>
                                <th className="px-6 py-3 text-sm whitespace-nowrap text-priTextColor">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((staff) => (
                                <tr key={staff.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">
                                        <Image
                                            src={staff.image}
                                            width={40}
                                            height={40}
                                            className="rounded-md shadow w-10 h-10 object-cover"
                                            alt={`Picture of ${staff.name}`}
                                            loading="lazy"
                                        />
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{staff.name}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{staff.staffId}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">{staff.role}</td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">
                                        <p className={`text-center capitalize px-2 pt-0.5 pb-0.5 text-[13px] text-white font-medium rounded ${staff.status === 'Active' ? 'bg-accent' : 'bg-danger'}`}>
                                            {staff.status}
                                        </p>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-priTextColor">
                                        <Popover
                                            showArrow
                                            offset={10}
                                            isOpen={openPopoverId === staff.id}
                                            onOpenChange={(open) => setOpenPopoverId(open ? staff.id : null)}
                                            placement="bottom">
                                            <PopoverTrigger>
                                                <Button
                                                    endContent={<MdKeyboardArrowDown className='text-xl -ml-1' />}
                                                    className={`capitalize rounded text-sm h-6 pt-0.5 ${staff.canDelete === true ? 'bg-green-200 text-green-700' : 'bg-danger text-white'}`} color="primary" size='sm'>
                                                    {staff.canDelete === true ? 'Yes' : 'No'}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-[160px] rounded-lg">
                                                <div className="my-2 w-full">
                                                    <div className='flex justify-between items-center pt-2 pb-1.5 px-3 rounded-md hover:bg-purple-50 hover:text-priColor cursor-pointer text-priTextColor' onClick={() => handleDeletePermission(staff, true)}>
                                                        <p>Yes</p>
                                                        {staff.canDelete === true && <MdCheck />}
                                                    </div>
                                                    <div className='flex justify-between items-center pt-2 pb-1.5 px-3 rounded-md hover:bg-purple-50 hover:text-priColor cursor-pointer text-priTextColor' onClick={() => handleDeletePermission(staff, false)}>
                                                        <p>No</p>
                                                        {staff.canDelete === false && <MdCheck />}
                                                    </div>
                                                </div>
                                            </PopoverContent>
                                        </Popover>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4">
                                        <div className='flex justify-start items-center gap-3'>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                                <IoEye onClick={() => handleViewClick(staff)} className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                                <FaEdit onClick={() => handleEditClick(staff)} className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                            </Tooltip>
                                            <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                                <FaTrashAlt
                                                    onClick={() => {
                                                        setSelectedStaff(staff);
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
            <AddEditStaff
                isOpen={isModalOpen}
                onOpenChange={onModalChange}
                onConfirm={handleAddOrEditStaff}
                selectedStaff={selectedStaff}
            />
            <StaffDetailsPopup
                isOpen={isDetailsOpen}
                onOpenChange={onDetailsOpenChange}
                selectedStaff={selectedStaff}
            />
        </div>
    );
};

export default StaffsHome;