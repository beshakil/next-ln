import React from 'react';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

const ToLetFavToggle = ({ isFavorite }) => {
    return (
        <>
            {
                isFavorite === true ?
                    <IoMdHeart className='text-[26px] text-red-500 bg-white pt-1 border border-gray-200 pb-0.5 pl-1 pr-1 rounded-full' /> :
                    <IoMdHeartEmpty className='text-[26px] text-priColor bg-white pt-1 border border-gray-200 pb-0.5 pl-1 pr-1 rounded-full' />
            }
        </>
    );
};

export default ToLetFavToggle;