"use client";

import React, { useState } from 'react';
import { Input } from "@heroui/react";
import { IoMdAddCircle } from 'react-icons/io';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

const HouseKeeperFrom = () => {
    const [forms, setForms] = useState([{}]);
    const [houseKeeperFromOpen, setHouseKeeperFromOpen] = useState(false);

    const addForm = () => {
        setForms([...forms, {}]);
    };

    const removeForm = (index) => {
        const updatedForms = forms.filter((_, i) => i !== index);
        setForms(updatedForms);
    };

    return (
        <div>
            <div className={`flex gap-1 items-center cursor-pointer text-priColor dark:text-purple-300 ${houseKeeperFromOpen && '-mb-4'}`} onClick={() => setHouseKeeperFromOpen
                (!houseKeeperFromOpen)}>
                <p className="text-priColor dark:text-purple-300 text-base">House Keeper </p>
                {houseKeeperFromOpen ? <MdKeyboardArrowUp className='text-2xl -mt-1' /> : <MdKeyboardArrowDown className='text-2xl -mt-1' />}
            </div>
            {
                houseKeeperFromOpen &&
                <div>
                    {forms.map((_, index) => (
                        <div key={index}>
                            <p className='text-zinc-600 dark:text-zinc-200 text-base text-center mt-4'>House Keeper {index + 1}</p>
                            <div className="flex gap-3 items-center" >
                                <div className="w-[96%]">
                                    <div className="flex sm:flex-row flex-col w-full items-center gap-3">
                                        <Input
                                            className="w-full"
                                            name={`name-${index}`}
                                            placeholder="Name"
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                        />
                                        <Input
                                            className="w-full"
                                            name={`age-${index}`}
                                            placeholder="NID"
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                        />
                                    </div>
                                    <div className="flex sm:flex-row flex-col w-full items-center gap-3 mt-3">
                                        <Input
                                            className="w-full"
                                            name={`occupation-${index}`}
                                            placeholder="Phone"
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                        />
                                        <Input
                                            className="w-full"
                                            name={`phone-${index}`}
                                            placeholder="Address"
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                        />
                                    </div>
                                </div>
                                <div className="w-[4%] flex gap-2 flex-col items-center">
                                    <button
                                        className="text-green-500 dark:text-green-500 text-4xl"
                                        onClick={addForm}
                                    >
                                        <IoMdAddCircle />
                                    </button>
                                    {forms.length > 1 && (
                                        <button
                                            className="text-red-500 dark:text-red-500 text-3xl"
                                            onClick={() => removeForm(index)}
                                        >
                                            <RiDeleteBin6Fill />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default HouseKeeperFrom;