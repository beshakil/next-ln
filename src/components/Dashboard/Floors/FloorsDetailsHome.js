"use client";

import React, { useState } from 'react';
import { useDisclosure } from '@heroui/react';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import AddEditFloor from './AddEditFloor';
import FloorsListCon from './FloorsListCon';
import SearchComponent from '../../GlobalComponent/SearchComponent';
import WarningPopup from '../../Popup/WarningPopup';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const floorData = [
    { floor: '1st Floor', flats: [{ id: '1A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }, { id: '1B', tenant: 'Not Available', rent: 13000 }, { id: '1C', tenant: 'Not Available', rent: 13000 }, { id: '1D', tenant: 'Not Available', rent: 13000 },] },
    { floor: '2nd Floor', flats: [{ id: '2A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }, { id: '2B', tenant: 'Not Available', rent: 13000 }] },
    { floor: '3rd Floor', flats: [{ id: '3A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] },
    { floor: '4th Floor', flats: [{ id: '4A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }, { id: '4B', tenant: 'Not Available', rent: 13000 }] },
    { floor: '5th Floor', flats: [{ id: '5A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] },
    { floor: '6th Floor', flats: [{ id: '6A', tenant: 'Not Available', rent: 13000 }, { id: '6B', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] },
    { floor: '7th Floor', flats: [{ id: '7A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] },
    { floor: '8th Floor', flats: [{ id: '8A', tenant: 'Not Available', rent: 13000 }] },
    { floor: '9th Floor', flats: [{ id: '9A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] },
    { floor: '10th Floor', flats: [{ id: '10A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] },
    { floor: '11th Floor', flats: [{ id: '11A', tenant: 'Not Available', rent: 13000 }] },
    { floor: '12th Floor', flats: [{ id: '12A', tenant: 'Shakil Ahmed Shajib', rent: 13000 }] }
];

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const FloorsDetailsHome = () => {

    const [selectedFloor, setSelectedFloor] = useState()
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isDeleteWarningOpen, onOpen: onDeleteWarningOpen, onOpenChange: onDeleteWarningChange } = useDisclosure();
    const [searchValue, setSearchValue] = useState("");

    const filteredFloors = floorData.filter((floor) => {
        return (
            floor.floor.toLowerCase().includes(searchValue.toLowerCase()) ||
            floor.flats.some((flat) => flat.tenant.toLowerCase().includes(searchValue.toLowerCase()))
        );
    });

    const handleAddClick = () => {
        setSelectedFloor(null);
        onOpen();
    };

    const handleEditClick = (building) => {
        setSelectedFloor(building);
        onOpen();
    };

    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="mt-16 block md:block lg:flex justify-between">
                <div className="block md:block lg:flex gap-4 w-auto md:w-auto lg:w-[50%]">
                    <p className="text-center md:text-center lg:text-left text-2xl font-bold text-priTextColor">Floors details</p>
                    <div className='mt-3 md:mt-3 lg:mt-0 lg:w-[45%]'>
                        <SelectOptionComponent
                            options={buildingList}
                            placeholder="Select a building"
                            menuPlacement="bottom"
                        // onChange={(e) => console.log(e)}
                        />
                    </div>
                </div>
                <div className="flex lg:justify-end gap-2 mt-3 md:mt-3 lg:mt-0 md:w-auto lg:w-[50%]">
                    <SearchComponent
                        searchClass={"w-[60%] md:w-[60%] lg:w-[45%]"}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        cancelSearch={() => setSearchValue("")}
                        placeholder="Search floors"
                    />
                    <ButtonComponent
                        onClick={handleAddClick}
                        buttonClass={"w-[40%] md:w-[40%] lg:w-[25%]"}
                        buttonText="Add floors"
                    />
                </div>
            </div>
            <FloorsListCon
                setSelectedFloor={setSelectedFloor}
                filteredFloors={filteredFloors}
                onOpen={onOpen}
                handleEditClick={handleEditClick}
                onDeleteWarningChange={onDeleteWarningChange}
            />
            <AddEditFloor
                onOpen={onOpen}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                selectedFloor={selectedFloor}
            />
            <WarningPopup
                headingText="Delete floor ?"
                descriptionText="Are you sure you want to delete this ?"
                onOpen={onDeleteWarningOpen}
                isOpen={isDeleteWarningOpen}
                onOpenChange={onDeleteWarningChange}
            // onConfirm={() => console.log("clicked")}
            />
        </div>
    );
};

export default FloorsDetailsHome;