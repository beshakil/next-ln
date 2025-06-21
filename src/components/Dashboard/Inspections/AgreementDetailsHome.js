"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { IoArrowBackOutline, IoClose, IoCopyOutline, IoEye } from 'react-icons/io5';
import Image from 'next/image';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { MdCancel, MdClose, MdLocalPrintshop, MdPayment, MdPayments } from 'react-icons/md';
import { FaEdit, FaSms, FaTrashAlt } from 'react-icons/fa';
import { Input } from '@heroui/react';
import { FiSearch } from 'react-icons/fi';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';

const AgreementDetailsHome = ({ agreementData }) => {

    const [agreementState, setAgreementState] = useState(agreementData);

    const pathname = usePathname();
    const id = pathname.split('/').pop();

    // console.log("pathname", pathname);

    // console.log("id", id);

    const agreement = agreementState.find((b) => b.id === parseInt(id));

    if (!agreement) {
        return <p>agreement not found!</p>;
    }

    const handleBack = () => {
        // eslint-disable-next-line no-undef
        window.history.back();
    };

    return (

        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="flex gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[50%]">
                    <IoArrowBackOutline className='text-3xl cursor-pointer' onClick={handleBack} />
                    <p className="sm:text-left text-center text-2xl font-bold">Agreement Details - {agreement.id}</p>
                </div>
                <div className='relative flex items-center'>
                    <input
                        readOnly
                        aria-label="Search"
                        placeholder={""}
                        className='bg-purple-50 sm:w-96 w-full dark:bg-gray-900 dark:text-zinc-200 text-sm py-2.5 rounded-s-lg pl-3 pr-2'
                        radius="sm"
                        value="http://localhost:3000/dashboard/invoices/1"
                    />
                    <button className='bg-purple-600 hover:bg-purple-500 rounded-e-lg py-2.5 px-3 flex gap-1'>
                        <IoCopyOutline className="text-base text-zinc-50 dark:text-zinc-200" />
                        <span className='text-sm text-zinc-50 whitespace-nowrap'>Copy Link</span>
                    </button>
                </div>

            </div>
            <div className='pb-2 flex gap-2 flex-wrap'>
                <ActionBtnComponent
                    // onClick={console.log("clicked")}
                    buttonClass="!text-white !px-3 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                    buttonText="Print"
                    startContent={<MdLocalPrintshop className='text-white text-base -mt-0.5 cursor-pointer' />}
                />
            </div>

            <div className=" mx-auto p-10 bg-white my-3 rounded-lg shadow border border-gray-200-gray-200 border border-gray-200 dark:bg-gray-800">
                {/* Header */}
                <p className='text-2xl text-priTextColor font-bold text-center mt-2 underline'>বাড়ি ভাড়া চুক্তিপত্র</p>
                <div className="flex justify-between items-center mt-8">
                    <div>
                        <p className="font-bold text-priTextColor">ভাড়াটিয়ার তথ্য :</p>
                        <p className='text-priColor mt-0.5'>নাম: <span className='text-priTextColor'>Test user one</span></p>
                        <p className='text-priColor mt-0.5'>পরিচয় পত্র নাম্বার: <span className='text-priTextColor'>0123456789</span></p>
                        <p className='text-priColor mt-0.5'>পিতা: <span className='text-priTextColor'>Mozammel haq</span></p>
                        <p className='text-priColor mt-0.5'>স্থায়ী ঠিকানা: <span className='text-priTextColor'>Uttara,Dhaka, 1230</span></p>
                        <p className='text-priColor mt-0.5'>মোবাইল নম্বর: <span className='text-priTextColor'>0123456789</span></p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-priTextColor">বাড়ির মালিকের তথ্য :</p>
                        <p className='text-priColor mt-0.5'>নাম: <span className='text-priTextColor'>Test user one</span></p>
                        <p className='text-priColor mt-0.5'>পরিচয় পত্র নাম্বার: <span className='text-priTextColor'>0123456789</span></p>
                        <p className='text-priColor mt-0.5'>পিতা: <span className='text-priTextColor'>Mozammel haq</span></p>
                        <p className='text-priColor mt-0.5'>স্থায়ী ঠিকানা: <span className='text-priTextColor'>Uttara,Dhaka, 1230</span></p>
                        <p className='text-priColor mt-0.5'>মোবাইল নম্বর: <span className='text-priTextColor'>0123456789</span></p>
                    </div>
                </div>

                <p className='text-2xl text-priTextColor font-bold text-center mt-2 underline'>চুক্তির বিবরণ</p>

                {/* Invoice Table */}
                <div className="-mx-4 mt-8 flow-root sm:mx-0">
                    <p className='font-bold text-priTextColor'>১. ভাড়ার বিবরণ:</p>
                    <table className="min-w-full">
                        <colgroup>
                            <col className="w-2/3 sm:w-4/5" />
                            <col className="w-1/3 sm:w-1/5" />
                        </colgroup>
                        <thead className="border border-gray-200-b border border-gray-200-gray-300 text-priColor">
                            <tr>
                                <th className="py-3.5 pl-4 pr-3 text-left text-base font-semibold text-priColor sm:pl-0">বিবরণ</th>
                                <th className="py-3.5 pl-3 pr-4 text-right text-base font-semibold sm:pr-0">টাকার পরিমাণ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">মৌলিক ভাড়া</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 5,000.00</td>
                            </tr>

                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">ইউটিলিটি বিল</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 5,000.00</td>
                            </tr>

                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">পানি বিল</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">গ্যাস বিল</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">আবর্জনা বিল</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">কল্যাণ তহবিল</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                            <tr className="border border-gray-200-b border border-gray-200-gray-200">
                                <td className="max-w-0 py-2 pl-4 pr-3 text-sm sm:pl-0">
                                    <div className="font-medium text-priColor">নিরাপত্তা বিল</div>
                                </td>
                                <td className="py-2 pl-3 pr-4 text-right text-sm text-priTextColor sm:pr-0">৳ 500.00</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='font-bold text-priTextColor pt-5'>২. ভাড়া পরিশোধের তারিখ: প্রতিমাসের 1 তারিখ।</p>
                    <p className='font-bold text-priTextColor pt-2'>৩. অগ্রিম পরিশোধ: 1000000।</p>
                    <p className='font-bold text-priTextColor pt-2'>৪. চুক্তির মেয়াদ: 2025-02-16 থেকে 2025-02-16 পর্যন্ত।</p>
                    <p className='font-bold text-priTextColor pt-2'>৫. চুক্তি বাতিলের প্রক্রিয়া:</p>
                    <p className='text-2xl text-priTextColor font-bold text-center mt-2 underline'>শর্তাবলী</p>
                    <div>
                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>ফার্নিচার ব্যবহার :</p>
                            <ul>
                                <li>- ক্ষতির জন্য ভাড়াটিয়া দায়বদ্ধ থাকবেন।</li>
                                <li>- যদি বাড়িতে ফার্নিচার দেওয়া থাকে, তবে তা সঠিকভাবে ব্যবহার করতে হবে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>বাড়ির চাবি সংক্রান্ত নীতি :</p>
                            <ul>
                                <li>- নতুন চাবি তৈরি করতে হলে মালিকের অনুমতি নিতে হবে।</li>
                                <li>- বাড়ির চাবি ভাড়াটিয়ার কাছে থাকবে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>আইনি সুরক্ষা :</p>
                            <ul>
                                <li>- চুক্তি সংক্রান্ত যে কোন বিরোধের নিষ্পত্তি হবে বাংলাদেশের প্রচলিত আইনের অধীনে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>অতিরিক্ত ব্যক্তি বসবাস :</p>
                            <ul>
                                <li>- মালিকের অনুমতি ছাড়া অতিরিক্ত ব্যক্তি বাড়িতে থাকতে পারবেন না।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>নতুন সংস্কার বা রক্ষণাবেক্ষণ :</p>
                            <ul>
                                <li>- বাড়ির রক্ষণাবেক্ষণের খরচ মালিক বহন করবেন।</li>
                                <li>- তবে, ভাড়াটিয়া যদি কোন ক্ষতি করে, তা ভাড়াটিয়াকে মেরামত করতে হবে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>অতিরিক্ত বিদ্যুৎ সংযোগ :</p>
                            <ul>
                                <li>- ভাড়াটিয়া নতুন কোনো বিদ্যুৎ সংযোগ বা বৈদ্যুতিক যন্ত্রপাতি ইনস্টল করতে চাইলে মালিকের অনুমতি নিতে হবে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>ইনস্পেকশন নীতি :</p>
                            <ul>
                                <li>- জরুরি প্রয়োজনে অনুমতি ছাড়াই পরিদর্শন করা যাবে।</li>
                                <li>- মালিক আগাম নোটিশ দিয়ে বাড়ি পরিদর্শনের অধিকার রাখেন।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>অগ্নি-নির্বাপক ব্যবস্থা :</p>
                            <ul>
                                <li>- যে কোন দুর্ঘটনার জন্য ভাড়াটিয়া দায়বদ্ধ হবেন।</li>
                                <li>- ভাড়াটিয়াকে বাড়ির অগ্নি-নির্বাপক যন্ত্রপাতি সঠিকভাবে ব্যবহার করতে হবে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>শান্তি-শৃঙ্খলা বজায় রাখা :</p>
                            <ul>
                                <li>- আশপাশের প্রতিবেশীর শান্তি বিঘ্নিত হলে চুক্তি বাতিল করা হতে পারে।</li>
                                <li>- ভাড়াটিয়া বাড়িতে কোনো অবৈধ কার্যক্রম বা অসামাজিক আচরণ করতে পারবেন না।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>বাড়ি পরিস্কার পরিচ্ছন্নতা :</p>
                            <ul>
                                <li>- ভাড়াটিয়াকে ভাড়ার সময় বাড়ি পরিষ্কার রাখতে হবে।</li>
                                <li>- চুক্তি শেষে বাড়ি মালিকের কাছে একই অবস্থায় ফেরত দিতে হবে।</li>
                            </ul>
                        </div>

                        <div className='mb-2'>
                            <p className='text-priTextColor text-lg font-bold'>পোষা প্রাণী সংক্রান্ত নীতি :</p>
                            <ul>
                                <li>- অনুমতি ছাড়া পোষা প্রাণী রাখা যাবে না।</li>
                                <li>- পোষা প্রাণী রাখার জন্য মালিকের অনুমতি নিতে হবে।</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex justify-between px-40 mt-40 mb-20'>
                        <div className='border border-gray-200-t'>
                            <p className='text-priTextColor text-lg font-bold'>গৃহমালিকের স্বাক্ষর</p>
                        </div>
                        <div className='border border-gray-200-t'>
                            <p className='text-priTextColor text-lg font-bold'>ভাড়াটিয়ার স্বাক্ষর</p>
                        </div>
                    </div>
                </div>


                {/* Footer */}
                <div className="border border-gray-200-t-2 pt-4 text-xs text-priTextColor text-center mt-16">
                    Generated By BariBhara App
                </div>
            </div>
        </div>
    );
};

export default AgreementDetailsHome;