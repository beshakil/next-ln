import React from 'react';
import { FaUsers } from "react-icons/fa";
import { FaArrowTrendUp, FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsSignpost } from "react-icons/bs";
import { GiMoneyStack, GiTakeMyMoney } from "react-icons/gi";

const GeneralTabCon = ({ building }) => {
    return (
        <div className=''>
            <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-5">
                <div className="px-5 sm:py-5 py-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-500">
                            <FaUsers className='text-2xl' />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-priTextColor">12</div>
                            <div className="text-secTextColor">Total Tenant</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 sm:py-5 py-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-100 text-indigo-500">
                            <BsSignpost className='text-2xl' />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-priTextColor">2</div>
                            <div className="text-secTextColor">To-let</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 sm:py-5 py-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-500">
                            <FaArrowTrendUp className='text-3xl' />
                        </div>
                        <div>

                            <div className="text-xl sm:text-2xl font-bold text-priTextColor">৳ 98100.90</div>
                            <div className="text-secTextColor">Total Collection</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 sm:py-5 py-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
                            <FaMoneyBillTrendUp className='text-2xl' />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-priTextColor">৳ 7520.100</div>
                            <div className="text-secTextColor">Monthly Total Collection</div>
                        </div>
                    </div>
                </div>

                <div className="px-5 sm:py-5 py-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-500">
                            <GiMoneyStack className='text-3xl' />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-priTextColor !font-sans">৳ 2100.00</div>
                            <div className="text-secTextColor">This month total Collection</div>
                        </div>
                    </div>
                </div>
                <div className="px-5 sm:py-5 py-3 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500">
                            <GiTakeMyMoney className='text-[26px]' />
                        </div>
                        <div>
                            <div className="text-xl sm:text-2xl font-bold text-priTextColor !font-sans">৳ 2100.00</div>
                            <div className="text-secTextColor">This month total Due</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white border border-gray-200-gray-200 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border border-gray-200-gray-700 p-5 mt-5  '>
                <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200'>General Information:</h3>
                <div className="sm:pt-1 pt-0">
                    <ul className="divide-y w-full rounded px-1 sm:pt-2 pt-0 text-gray-600 hover:text-gray-700">
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Name:</span>
                            <span className="ml-auto text-priColor">{building?.buildingName}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Address:</span>
                            <span className="ml-auto text-priColor">{building?.location}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Division:</span>
                            <span className="ml-auto text-priColor">{building?.division}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>District:</span>
                            <span className="ml-auto text-priColor">{building?.district}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Thana/Upazila:</span>
                            <span className="ml-auto text-priColor">{building?.thana}</span>
                        </li>
                    </ul>
                </div>
                <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200 mt-6'>Floor Rent Details:</h3>
                <ul className="divide-y w-full rounded px-1 sm:pt-2 pt-0 text-gray-600 hover:text-gray-700">
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Total Floor:</span>
                        <span className="ml-auto text-priColor">30</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Unit Per Floor:</span>
                        <span className="ml-auto text-priColor">30</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Total Flat:</span>
                        <span className="ml-auto text-priColor">30</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Base Fare:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Utility Bill:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Water Bill:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Gas Bill:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Wastage Bill:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Wellfare Bill:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Security Bill:</span>
                        <span className="ml-auto text-priColor">30000</span>
                    </li>
                </ul>

                <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200 mt-6'>Parking Details:</h3>
                <ul className="divide-y w-full rounded px-1 sm:pt-2 pt-0 text-gray-600 hover:text-gray-700">
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Parking Available:</span>
                        <span className="ml-auto text-priColor">30</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Total Parking Slot:</span>
                        <span className="ml-auto text-priColor">30</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Average Fare:</span>
                        <span className="ml-auto text-priColor">30</span>
                    </li>
                </ul>

                <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200 mt-6'>Others:</h3>
                <ul className="divide-y rounded px-1 sm:pt-2 pt-0 text-gray-600 hover:text-gray-700">
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Lift Available:</span>
                        <span className="ml-auto text-priColor">Yes</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Generator Available:</span>
                        <span className="ml-auto text-priColor">Yes</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">Security Available:</span>
                        <span className="ml-auto text-priColor">Yes</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className="text-secTextColor dark:text-purple-300">CCTV Camera:</span>
                        <span className="ml-auto text-priColor">Yes</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default GeneralTabCon;