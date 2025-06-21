import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { MdOutlineArticle } from 'react-icons/md';
import { TbBuildingEstate, TbHome, TbHomeSearch } from 'react-icons/tb';

const ToLetSubHeader = () => {
    return (
        <div className='bg-white m-auto border border-gray-200-b hidden md:block'>
            <div className='max-w-[1280px] m-auto px-6 flex justify-between py-2'>
                <div className='flex gap-2'>
                    <div className='relative'>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg hover:border border-gray-200-priColor text-priTextColor hover:text-priColor bg-white hover:bg-boxBgColor'>
                            <TbHome className='text-lg' /> <span className='mt-[4px]'>Home</span>
                        </button>
                        <hr className='absolute -bottom-2 w-full border border-gray-200-t-2 border border-gray-200-priColor' />
                    </div>
                    <div className='relative'>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg hover:border border-gray-200-priColor text-priTextColor hover:text-priColor bg-white hover:bg-boxBgColor'>
                            <TbBuildingEstate className='text-lg' /> <span className='mt-[4px]'>Property list</span>
                        </button>
                        {/* <hr className='absolute -bottom-2 w-full border border-gray-200-t-2 border border-gray-200-priColor' /> */}
                    </div>
                    <div className='relative'>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg hover:border border-gray-200-priColor text-priTextColor hover:text-priColor bg-white hover:bg-boxBgColor'>
                            <IoHeartOutline className='text-lg' /> <span className='mt-[4px]'>Save property</span>
                        </button>
                        {/* <hr className='absolute -bottom-2 w-full border border-gray-200-t-2 border border-gray-200-priColor' /> */}
                    </div>
                    <div className='relative'>
                        <button className='flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg hover:border border-gray-200-priColor text-priTextColor hover:text-priColor bg-white hover:bg-boxBgColor'>
                            <MdOutlineArticle className='text-lg' /> <span className='mt-[4px]'>Article</span>
                        </button>
                        {/* <hr className='absolute -bottom-2 w-full border border-gray-200-t-2 border border-gray-200-priColor' /> */}
                    </div>
                </div>
                <button className='flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-lg text-white bg-priColor hover:bg-priHover'>
                    <TbHomeSearch className='text-lg' /> <span className='mt-[4px]'>Search</span>
                </button>
            </div>
        </div>
    );
};

export default ToLetSubHeader;