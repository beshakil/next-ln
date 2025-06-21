"use client";

import React, { useState } from 'react';

import { TbHomeLink, TbHomePlus, TbHomeExclamation, TbBuildings, TbHomeHeart, TbHome, TbStairs } from "react-icons/tb";
import { BsShop } from "react-icons/bs";
import ToLetSubHeader from './ToLetSubHeader';
import { toLetData } from '../../data/toLets';
import CardForToLetList from '../GlobalComponent/CardForToLetList';

const ToLetPageHome = () => {

    const [toLets, setToLets] = useState(toLetData);

    return (
        <div className=''>
            <div className='px-3 md:px-6 max-w-[1280px] m-auto'>
                <div className='flex items-center justify-center py-3 md:py-5'>
                    <div className='flex gap-2 overflow-x-auto'>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <TbHome className='text-lg' /> <span className='mt-[4px]'>All</span>
                        </button>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <TbHomeHeart className='text-lg' /> <span className='mt-[4px]'>Family</span>
                        </button>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <TbHomeExclamation className='text-lg' /> <span className='mt-[4px]'>Bachelor</span>
                        </button>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <TbHomePlus className='text-lg' /> <span className='mt-[4px]'>Sublet</span>
                        </button>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <TbBuildings className='text-lg' /> <span className='mt-[4px]'>Office</span>
                        </button>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <TbHomeLink className='text-lg' /> <span className='mt-[4px]'>Hostel</span>
                        </button>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                            <BsShop className='text-sm' /> <span className='mt-[4px]'>Shop</span>
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4'>
                    {
                        toLets.map((toLet, index) => (
                            <CardForToLetList
                                key={index}
                                toLet={toLet}
                            />
                        ))

                    }
                </div>
                <p>Post</p>

            </div>
        </div>
    );
};

export default ToLetPageHome;