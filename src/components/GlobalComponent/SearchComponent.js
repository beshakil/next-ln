"use client"

import { Input } from '@heroui/react';
import React, { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

const SearchComponent = ({ searchValue, setSearchValue, cancelSearch, placeholder, searchClass }) => {
    return (
        <div className={`relative flex items-center ${searchClass}`}>
            <div className={`-mr-2 w-full`}>
                <Input
                    color='primary'
                    name="name"
                    type="text"
                    radius="sm"
                    variant="bordered"
                    classNames={{
                        inputWrapper: [
                            "bg-white",
                        ],
                        innerWrapper: "bg-white",
                    }}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder={placeholder}
                />
            </div>
            {searchValue &&
                <MdCancel onClick={cancelSearch} className="text-xl absolute top-2.5 right-14 text-red-500 cursor-pointer flex-shrink-0" />
            }
            <button className='bg-purple-600 hover:bg-purple-500 rounded-e-lg h-10 px-3 z-10'>
                <FiSearch className="text-xl top-2.5 right-2 text-zinc-50 dark:text-zinc-200 pointer-events-none flex-shrink-0" />
            </button>
        </div>
    );
};

export default SearchComponent;