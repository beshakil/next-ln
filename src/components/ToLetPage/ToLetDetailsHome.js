
"use client";
import { useSearchParams, usePathname } from 'next/navigation';
import { IoArrowBackOutline, IoCalendarNumberOutline, IoCalendarOutline, IoImage, IoLocationSharp } from 'react-icons/io5';
import ToLetDetailsSlide from './ToLetDetailsSlide';
import { BreadcrumbItem, Breadcrumbs, useDisclosure } from '@heroui/react';
import { LuBath, LuBedDouble, LuSquareParking } from 'react-icons/lu';
import { TbEye, TbHome, TbStairs } from 'react-icons/tb';
import { BsInfoCircle } from "react-icons/bs";
import { MdBalcony, MdCall, MdEmail, MdLocationOn, MdOutlineArticle, MdOutlineBathroom, MdVerifiedUser } from 'react-icons/md';
import { RiCustomSize } from "react-icons/ri";
import { TiInfoOutline } from 'react-icons/ti';
import { BiSolidCarGarage, BiSolidPhoneCall } from 'react-icons/bi';
import userImage from '../../assets/jpg/userImage.jpeg'
import Image from 'next/image';
import ToLetFavToggle from './ToLetFavToggle';
import { IoMdHeart, IoMdHeartEmpty, IoMdShare } from 'react-icons/io';
import PostSharePopup from '../Popup/PostSharePopup';

const ToLetDetailsHome = ({ toLetData }) => {

    const { isOpen: isSharePostOpen, onOpen: onSharePostOpen, onOpenChange: onSharePostChange } = useDisclosure();

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // console.log("pathname", pathname);

    // console.log("id", id);

    const toLet = toLetData.find((b) => b.id === parseInt(id));

    if (!toLet) {
        return <p className="text-sm md:text-base text-priTextColor font-bold">ToLet not found!</p>;
    }

    const handleBack = () => {
        // eslint-disable-next-line no-undef
        window.history.back();
    };

    return (
        <>
            <div className="max-w-[1280px] m-auto px-4 md:px-6 dark:bg-gray-900 mt-3">
                <div className='flex flex-col md:flex-row gap-5 justify-between py-5'>
                    <Breadcrumbs color='primary'>
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Dhaka</BreadcrumbItem>
                        <BreadcrumbItem>Mirpur</BreadcrumbItem>
                        <BreadcrumbItem>Family</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className='flex flex-col md:flex-row gap-5 md:gap-10'>
                    <div className='w-full md:w-[70%]'>
                        <div className='bg-white border border-gray-200 rounded-lg pl-4 pr-4 pt-2 pb-1.5'>
                            <p className='text-base md:text-lg text-priColor'>Single Bedroom To-let / Rent from June for Bachelor in Mirpur 6, Mirpur, Dhaka</p>
                        </div>
                        <div className='w-full px-4 md:px-2 pr-4 md:pr-1 py-4 bg-white border border-gray-200 rounded-lg mt-5'>
                            <div className='flex gap-2 items-center justify-between border border-gray-200-b pb-3 pt-0 ml-0 md:ml-3 mr-0 md:mr-4'>
                                <div className='flex gap-2 items-center'>
                                    <IoImage className='text-lg text-priColor' />
                                    <p className='text-sm md:text-base text-priTextColor mt-1 font-bold'>Image</p>
                                </div>
                                <button className='border border-gray-200 flex items-center pt-0.5 pb-0.5 gap-2 px-2 text-priTextColor hover:text-priColor text-base rounded-md'>
                                    <ToLetFavToggle />
                                    <span className='mt-1'>Save</span>
                                </button>
                            </div>
                            <div className='mt-4'>
                                <ToLetDetailsSlide />
                            </div>
                        </div>

                        <div className='flex justify-between mt-4'>
                            <div className='flex gap-5 md:gap-10 items-center'>
                                <div className='flex gap-2 items-center'>
                                    <IoCalendarOutline className='text-lg text-priColor' />
                                    <p className='text-sm md:text-base mt-1'>May 27, 2023</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <TbEye className='text-lg text-priColor' />
                                    <p className='text-sm md:text-base mt-0.5'> 230 views</p>
                                </div>
                            </div>
                            <div className='flex gap-2 justify-center items-center'>
                                <button onClick={() => onSharePostOpen()} className='bg-green-500 hover:bg-green-600 flex gap-1 items-center w-full pt-0.5 pb-0.5 px-2 text-white text-sm rounded-md'>
                                    <IoMdShare />
                                    <span className='mt-1'>Share</span>
                                </button>
                            </div>
                        </div>

                        <div className='bg-white border border-gray-200 rounded-lg p-4 md:p-5 mt-5 '>
                            <div className='flex gap-2 items-center border border-gray-200-b pb-3 pt-0'>
                                <TiInfoOutline className='text-xl text-priColor' />
                                <p className='text-sm md:text-base text-priTextColor mt-1 font-bold'>Basic Information</p>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 py-4 border border-gray-200-b'>
                                <div className='flex gap-1 items-center'>
                                    <LuBedDouble className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Bedrooms: <strong>2</strong></span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <LuBath className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Attach Bath: <strong>2</strong></span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <MdOutlineBathroom className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Common Bath: <strong>2</strong></span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <MdBalcony className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Balcony: <strong>2</strong></span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <BiSolidCarGarage className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Parking: <strong>Yes</strong></span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <TbStairs className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Floors: <strong>2</strong></span>
                                </div>
                                <div className='flex gap-1 items-center'>
                                    <RiCustomSize className='text-base md:text-lg text-priColor' />
                                    <span className='text-sm md:text-base text-priTextColor mt-1'>Size: <strong>1202</strong> (Sq ft)</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-5 gap-5 pt-5 -mb-2 pb-1'>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Property ID</p>
                                    <p className='text-sm md:text-base text-priTextColor'>84753</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Post date</p>
                                    <p className='text-sm md:text-base text-priTextColor'>14 May 2023</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Available from</p>
                                    <p className='text-sm md:text-base text-priTextColor'>1st May 2023</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Category</p>
                                    <p className='text-sm md:text-base text-priTextColor'>Family</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Property type</p>
                                    <p className='text-sm md:text-base text-priTextColor'>House</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 bg-white rounded-lg p-4 md:p-5 border border-gray-200'>
                            <div className='flex gap-2 items-center border border-gray-200-b pb-3  pt-0'>
                                <BsInfoCircle className='text-base text-priColor' />
                                <p className='text-sm md:text-base text-priTextColor mt-1 font-bold'>Additional information</p>
                            </div>
                            <div className='flex md:flex-row flex-col gap-2 md:gap-20 pt-5'>
                                <div className='w-full md:w-[50%] flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Drawing Room:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Yes</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Generator:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Yes</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Lift:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Yes</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">CCTV Camera:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Yes</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Security:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Yes</p>
                                    </div>
                                </div>
                                <div className='w-full md:w-[50%] flex flex-col gap-2'>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Gas Connection:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Cylinder</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Electricity:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Card</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Floor Type:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">Mosaic</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className="text-sm md:text-base text-priTextColor">Available from:</p>
                                        <p className="text-sm md:text-sm text-priTextColor font-bold">01 Oct, 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5 bg-white rounded-lg p-4 md:p-5 border border-gray-200'>
                            <div className='flex gap-2 items-center border border-gray-200-b pb-3  pt-0'>
                                <IoLocationSharp className='text-base text-priColor' />
                                <p className='text-sm md:text-base text-priTextColor mt-1 font-bold'>Location information</p>
                            </div>
                            <div className='pt-7'>
                                <p className='text-sm md:text-base text-priTextColor'><strong>Short address:</strong> ধানমণ্ডি, রাস্তা- ৩২ (পুরাতন), বাড়ি- ০৩</p>
                            </div>
                            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 pt-7 -mb-2 pb-1'>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Division</p>
                                    <p className='text-sm md:text-base text-priTextColor'>Dhaka</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>District</p>
                                    <p className='text-sm md:text-base text-priTextColor'>Dhaka</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Area / Thana</p>
                                    <p className='text-sm md:text-base text-priTextColor'>Mirpur</p>
                                </div>
                                <div className=''>
                                    <p className='text-sm md:text-base text-secTextColor'>Sub Area</p>
                                    <p className='text-sm md:text-base text-priTextColor'>Kajipara</p>
                                </div>
                            </div>
                            <div>
                                {/* <MapsForToLetPost/> */}
                            </div>
                        </div>
                        <div className='mt-5 bg-white rounded-lg p-4 md:p-5 border border-gray-200'>
                            <div className='flex gap-2 items-center border border-gray-200-b pb-3  pt-0'>
                                <MdOutlineArticle className='text-lg text-priColor' />
                                <p className='text-sm md:text-base text-priTextColor mt-1 font-bold'>Summery</p>
                            </div>
                            <div className='pt-5 text-sm md:text-base'>
                                ছোট ফ্যামিলি এর জন্য ফ্ল্যাট বাসা ভাড়া দেওয়া হবে, <br />
                                সম্পূর্ণ নতুন আংগিকে ডিজাইন করা বাসা সকল আধুনিক সুযোগ সুবিধা এবং ফিটিংস, টাইলস করা। <br />
                                প্রচুর খোলামেলা এবং মনোরম পরিবেশ। <br />
                                * নিচ তলা।<br />
                                * ২ টি রুম। (রান্না ঘর অ্যাটাচড)<br />
                                * ১ টি বাথরুম (লো কমোড)।<br />
                                * সার্বক্ষণিক পানির ব্যবস্থা (ফ্রি)।<br />
                                * পর্যাপ্ত আলো-বাতাস এবং খোলামেলা।<br />
                                * সবার জন্য আলাদা কারেন্টের মিটার ( যতটুকু ব্যবহার, ততটুকু বিল)<br />
                                *লাইনের গ্যাস নেই, সিলিন্ডার গ্যাস ইউজ করতে হবে।<br />
                                ### ভাড়া: ৫০০০ টাকা (ফিক্সড)
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[30%] '>
                        <div className='bg-white border border-gray-200 rounded-lg p-4'>
                            <div className='flex gap-2 items-center justify-center border border-gray-200-b pb-3 pt-0'>
                                <TbHome className='text-xl text-priColor' />
                                <p className='text-base md:text-lg text-priTextColor mt-1 font-bold'>Rent for month</p>
                            </div>
                            <div className='flex flex-col gap-1 items-center py-5'>
                                <p className='text-2xl font-bold text-priColor'>15,000 Tk</p>
                                <p className='text-xs md:text-sm text-priTextColor'>+ (Negotiable)</p>
                            </div>
                            <div className='w-full flex flex-col gap-2'>
                                <div className='flex justify-between items-center'>
                                    <p className="text-sm md:text-base text-priTextColor">Gas Bill:</p>
                                    <p className="text-sm md:text-base text-priTextColor font-bold">1000 Tk</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <p className="text-sm md:text-base text-priTextColor">Service Charge:</p>
                                    <p className="text-sm md:text-base text-priTextColor font-bold">1000 Tk</p>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border border-gray-200 rounded-lg p-4 mt-5'>
                            {/* <h5 className='text-xl font-bold text-priTextColor text-center pb-2'>Contract</h5> */}
                            <div className='flex gap-2 items-center justify-center border border-gray-200-b pb-3 pt-0'>
                                <BiSolidPhoneCall className='text-xl text-priColor' />
                                <p className='text-base md:text-lg text-priTextColor mt-1 font-bold'>Contract Information</p>
                            </div>
                            <div className='pt-5'>
                                <h4 className='text-base text-center font-bold text-priTextColor'>Please login for show the contact information.</h4>
                                <p className='text-sm text-center text-secTextColor pt-2'>Please log in or register to view the full property details. We protect the privacy of owners and do not share contact information with unregistered users.</p>
                            </div>
                            <div className='flex justify-center pb-3'>
                                <div className='flex gap-2 justify-center items-center w-[70%]'>
                                    <button className='bg-priColor hover:bg-priHover w-full pt-2 pb-1.5 text-white text-sm rounded-lg mt-5'>Login</button>
                                    <button className='bg-priColor hover:bg-priHover w-full pt-2 pb-1.5 text-white text-sm rounded-lg mt-5'>Register</button>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white border border-gray-200 rounded-lg p-4 mt-5'>
                            <div className='flex gap-2 items-center justify-center border border-gray-200-b pb-3 pt-0'>
                                <BiSolidPhoneCall className='text-xl text-priColor' />
                                <p className='text-base md:text-lg text-priTextColor mt-1 font-bold'>Contract person</p>
                            </div>
                            <div className="flex flex-col items-center pb-2 pt-5">
                                <div className='w-24 h-24 rounded-full shadow-lg mb-5'>
                                    <Image
                                        src={userImage}
                                        width={96}
                                        height={96}
                                        className="rounded-full shadow w-24 h-24 object-cover"
                                        alt={`Picture of tenant`}
                                        loading="lazy"
                                    />
                                </div>
                                <h5 className="mb-1 text-xl text-priTextColor font-bold dark:text-white flex items-center gap-1">Bonnie Green <span className='-mt-1 text-green-600'><MdVerifiedUser /></span></h5>
                                <div className='flex gap-2'>
                                    <p className="text-base -mt-1 text-secTextColor dark:text-purple-300">User ID:</p>
                                    <p className="text-base text-priColor dark:text-gray-400 -mt-1">20125</p>
                                </div>
                                <div className="pt-5">
                                    <div className='flex gap-1 items-center'>
                                        <MdCall className='text-base text-priColor dark:text-zinc-200 -mt-1' />
                                        <p className=" text-secTextColor dark:text-zinc-200">
                                            <span className="text-priColor dark:text-purple-300">Mobile: </span>
                                            01303263591
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostSharePopup
                onOpen={onSharePostOpen}
                isOpen={isSharePostOpen}
                onOpenChange={onSharePostChange}
            />
        </>
    );
};

export default ToLetDetailsHome;