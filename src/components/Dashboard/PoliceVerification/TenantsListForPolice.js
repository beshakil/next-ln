"use client";

import React, { useMemo, useState } from 'react';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import Link from 'next/link';
import { tenantsData } from '../../../data/tenants';
import Image from 'next/image';
import { MdOutlineDocumentScanner } from 'react-icons/md';
import { useDisclosure, Tooltip, Pagination } from "@heroui/react";
import AddEditTenants from '../TenantsList/AddEditTenants';
import { IoChevronDownOutline, IoChevronUpOutline, IoEye } from 'react-icons/io5';
import { FaEdit } from 'react-icons/fa';
import dynamic from 'next/dynamic';
const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const TenantsListForPolice = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [tenants, setTenants] = useState(tenantsData);

    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(5);

    const [selectedTenant, setSelectedTenant] = useState(null);

    const { isOpen: isModalOpen, onOpen: onModalOpen, onOpenChange: onModalChange } = useDisclosure();


    const columnKeyMap = {
        'Name': 'name',
        'Phone Number': 'phone',
        'Building': 'buildingName',
        'Floor': 'floor',
        'Flat No': 'flatNo',
    };

    const filteredData = useMemo(() => {

        let filtered = tenants.filter(item =>
            (item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
            (item.phone && item.phone.toLowerCase().includes(search.toLowerCase())) ||
            (item.buildingName && item.buildingName.toLowerCase().includes(search.toLowerCase())) ||
            (item.floor && item.floor.toLowerCase().includes(search.toLowerCase())) ||
            (item.flatNo && item.flatNo.toLowerCase().includes(search.toLowerCase()))
        );

        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aVal = a[sortConfig.key] ? a[sortConfig.key].toLowerCase() : '';
                const bVal = b[sortConfig.key] ? b[sortConfig.key].toLowerCase() : '';
                return (aVal < bVal ? -1 : 1) * (sortConfig.direction === 'asc' ? 1 : -1);
            });
        }

        return filtered;
    }, [search, sortConfig, tenants]);

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

    const handleViewClick = (tenant) => {
        setSelectedTenant(tenant);
        onModalOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-zinc-600 dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <p className="sm:text-left text-center text-2xl font-bold">Police verification</p>
                    <div className='sm:w-[40%] w-full sm:py-0 py-1'>
                        <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom" 
                        // onChange={(e) => console.log(e)}
                         />
                    </div>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col">
                    <SearchComponent
                        searchValue={search}
                        setSearchValue={setSearch}
                        cancelSearch={() => setSearch("")}
                        placeholder="Search tenants..."
                    />
                    <ButtonComponent
                        onClick={onOpen}
                        buttonClass={"w-full"}
                        buttonText="Add tenants"
                    />
                </div>
            </div>
            <div className='-mt-5'>
                <div className="sm:px-5 px-3 sm:py-5 py-3 bg-white rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 mt-5">
                    <div className="p-4 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200  bg-white dark:bg-gray-800">
                        <div className='overflow-x-auto'>
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-6 text-sm py-3 whitespace-nowrap text-priTextColor">Profile</th>
                                        {['Name', 'Phone Number', 'Building', 'Floor', 'Flat No'].map((col) => {
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
                                    {paginatedData.map((tenant) => (
                                        <tr key={tenant.id} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                            <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">
                                                <Image
                                                    src={tenant.image}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-md shadow w-10 h-10 object-cover"
                                                    alt={`Picture of ${tenant.name}`}
                                                    loading="lazy"
                                                />
                                            </td>
                                            <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{tenant.name}</td>
                                            <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{tenant.phone}</td>
                                            <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{tenant.rentFlat[0]?.buildingName || "N/A"}</td>
                                            <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{tenant.rentFlat[0]?.floor || "N/A"}</td>
                                            <td className=" whitespace-nowrap px-6 py-4 text-priTextColor">{tenant.rentFlat[0]?.flatNo || "N/A"}</td>
                                            <td className="whitespace-nowrap px-6 py-4 mt-2 flex justify-start gap-3">
                                                <Link href={`/dashboard/tenants/${tenant.id}`}>
                                                    <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>View</span>} showArrow={true}>
                                                        <IoEye className="!bg-accent p-1 rounded text-white text-2xl cursor-pointer" />
                                                    </Tooltip>
                                                </Link>
                                                <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Edit</span>} showArrow={true}>
                                                    <FaEdit className="!bg-secColor p-1 rounded text-white text-2xl cursor-pointer" />
                                                </Tooltip>
                                                <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Print</span>} showArrow={true}>
                                                    <MdOutlineDocumentScanner className="!bg-priTextColor p-1 rounded text-white text-2xl cursor-pointer" />
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
                </div>
            </div>
            <AddEditTenants onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
    );
};

export default TenantsListForPolice;