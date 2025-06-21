import Image from 'next/image';
import Link from 'next/link';
import { IoLocationSharp } from 'react-icons/io5';
import { LuBath, LuBedDouble } from 'react-icons/lu';
import { TbHome, TbStairs } from 'react-icons/tb';
import ToLetFavToggle from '../ToLetPage/ToLetFavToggle';

const CardForToLetList = ({ toLet, image }) => {
    return (
        <div className='border border-gray-200 bg-white rounded-lg relative p-2.5'>
            <div className='relative'>
                <Image
                    className='object-cover rounded-lg'
                    src={toLet.img}
                    width={"100%"}
                    h={"100%"}
                    alt='tolet-image'
                />
                <div className='absolute top-2 right-2'> 
                    <ToLetFavToggle isFavorite={toLet.isFavorite} />
                </div>
            </div>


            <div className='border border-gray-200-b pt-3 pb-2'>
                <Link href={`/to-let/${toLet.id}`} className='text-sm md:text-base text-priColor hover:text-secColor font-bold'>Family house rent</Link>
            </div>

            <div className='border border-gray-200-b py-2'>
                <div className='flex gap-0.5 items-center'>
                    <TbHome className='text-sm text-priTextColor' />
                    <p className='text-sm mt-1 text-priTextColor'>Tolet from: May</p>
                </div>
                <div className='flex gap-0.5 items-center mt-1'>
                    <IoLocationSharp className='text-sm text-priTextColor' />
                    <p className='text-sm mt-1 text-priTextColor'>Mirpur 11, Dhaka</p>
                </div>
                <div className='flex gap-1 pt-1.5 ml-0.5'>
                    <div className='flex items-center gap-1'>
                        {/* <TbCurrencyTaka className='text-2xl text-priColor' /> */}
                        <span className='text-xl text-priColor mt-1 font-bold'>৳</span>
                        <p className='text-lg text-priColor font-bold'>3750</p>
                    </div>
                    <p className='text-secTextColor text-sm mt-2'>Per month</p>
                </div>
            </div>
            {/* 
                                <div>
                                    <button className='flex items-center justify-center gap-1.5 px-4 py-1 rounded-lg text-priColor bg-boxBgColor'>
                                        <TbHomeHeart className='text-sm' /> <span className='mt-[4px] text-sm'>Family</span>
                                    </button>
                                    <div>
                                        1200
                                        FT2
                                    </div>
                                </div> */}

            {/* <div className='border border-gray-200-b px-3 py-2'>
                                    <Link href={`/to-let/${toLet.id}`} className='text-base md:text-lg text-priColor hover:text-secColor'>Family house rent</Link>
                                </div> */}
            <div className='pt-2 -mb-1 flex justify-between'>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-1'>
                        <LuBedDouble className='mt-0.5 text-priColor' />
                        <span className='text-sm text-priColor font-bold'>3</span>
                    </div>
                    <span className='text-xs text-priTextColor font-bold'>Beds</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-1'>
                        <LuBath className='mt-0.5 text-priColor' />
                        <span className='text-sm text-priColor font-bold'>3</span>
                    </div>
                    <span className='text-xs text-priTextColor font-bold'>Baths</span>
                </div>
                {/* <div className='hidden md:block'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <div className='flex gap-1'>
                                                <PiGarage className='mt-0.5' />
                                                <span className='text-sm font-bold text-priColor mt-0.5'>Yes</span>
                                            </div>
                                            <span className='text-sm font-bold -mt-0.5'>Garage</span>
                                        </div>
                                    </div> */}

                <div className='flex flex-col justify-center items-center'>
                    <div className='flex gap-1'>
                        <TbStairs className='mt-0.5 text-priColor' />
                        <span className='text-sm text-priColor font-bold'>3</span>
                    </div>
                    <span className='text-xs text-priTextColor font-bold'>Floors</span>
                </div>

            </div>
            {/* <button className='flex items-center justify-center gap-1.5 px-4 py-1 border border-gray-200 hover:border border-gray-200-priColor rounded-lg text-priTextColor hover:text-priColor bg-white'>
                                    <TbHome className='text-lg' /> <span className='mt-[4px]'>{toLet.title}</span>
                                </button> */}
        </div>
    );
};

export default CardForToLetList;