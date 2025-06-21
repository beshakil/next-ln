"use client";

import React from 'react';
import { FaBuildingUser, FaMoneyBillWave, FaFileInvoiceDollar, FaUsers } from 'react-icons/fa6';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import DashboardBarChart from './DashboardBarChart';
import DashboardActionOptions from './DashboardActionOptions';
import dynamic from 'next/dynamic';

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const DashboardHomeMain = () => {
    return (
        <div className="sm:p-5 p-3 sm:ml-64 dark:bg-gray-900">
            <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center pb-5 mt-16">
                <div className="sm:flex block gap-5 items-center text-priTextColor dark:text-zinc-200 pb-2 sm:pb-0 sm:w-[40%] mt-1 sm:mt-0">
                    <p className="sm:text-left text-center text-2xl font-bold text-priTextColor">Dashboard overview</p>
                </div>
                <div className="flex gap-3 sm:flex-row flex-col sm:w-[25%] w-full">
                    <div className='w-full'>
                        <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom" 
                        // onChange={(e) => console.log(e)}
                         />
                    </div>
                </div>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-3">
                <div className="w-full   bg-white flex items-center gap-2 sm:gap-3 p-3 border border-gray-200  rounded-lg ">
                    <div className="p-3 rounded-full bg-priColor">
                        <FaBuildingUser className="h-5 w-5 text-white" />
                    </div>
                    <div className=" ">
                        <h4 className="text-xl font-semibold text-priTextColor">40</h4>
                        <div className="text-secTextColor text-base">Total Tenants</div>
                    </div>
                </div>

                <div className="w-full   bg-white flex items-center gap-2 sm:gap-3 sm p-3 border border-gray-200  rounded-lg">
                    <div className="p-3 rounded-full bg-accent">
                        <GiReceiveMoney className="h-5 w-5 text-white" />
                    </div>
                    <div className=" ">
                        <h4 className="text-xl font-semibold text-priTextColor">৳ 109,800</h4>
                        <div className="text-secTextColor text-base">Current Month Income</div>
                    </div>
                </div>

                <div className="w-full   bg-white flex items-center gap-2 sm:gap-3 p-3 border border-gray-200  rounded-lg">
                    <div className="p-3 rounded-full bg-danger">
                        <GiPayMoney className="h-5 w-5 text-white" />
                    </div>
                    <div className=" ">
                        <h4 className="text-xl font-semibold text-priTextColor">৳ 1,000</h4>
                        <div className="text-secTextColor text-base">Current Expense</div>
                    </div>
                </div>

                <div className="w-full   bg-white flex items-center gap-2 sm:gap-3 p-3 border border-gray-200  rounded-lg">
                    <div className="p-3 rounded-full bg-yellow-600">
                        <FaFileInvoiceDollar className="h-5 w-5 text-white" />
                    </div>
                    <div className=" ">
                        <h4 className="text-xl font-semibold text-priTextColor">23</h4>
                        <div className="text-secTextColor text-base">Unpaid Invoice</div>
                    </div>
                </div>

                <div className="w-full   bg-white flex items-center gap-2 sm:gap-3 p-3 border border-gray-200  rounded-lg">
                    <div className="p-3 rounded-full bg-secColor">
                        <FaUsers className="h-5 w-5 text-white" />
                    </div>
                    <div className=" ">
                        <h4 className="text-xl font-semibold text-priTextColor">46</h4>
                        <div className="text-secTextColor text-base">Total Persons</div>
                    </div>
                </div>

                <div className="w-full   bg-white flex items-center gap-2 sm:gap-3 p-3 border border-gray-200  rounded-lg">
                    <div className="p-3 rounded-full bg-[#7828C8]">
                        <FaMoneyBillWave className="h-5 w-5 text-white" />
                    </div>
                    <div className=" ">
                        <h4 className="text-xl font-semibold text-priTextColor">৳ 2,944,670</h4>
                        <div className="text-secTextColor text-base">Current Month Dues</div>
                    </div>
                </div>
            </div>
            <DashboardActionOptions />

            <DashboardBarChart />

        </div>
    );
};

export default DashboardHomeMain;
