import React from 'react';
import { FaBuildingUser } from 'react-icons/fa6';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import { GrUserPolice, GrVmMaintenance } from 'react-icons/gr';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { MdOutlineAddHomeWork } from 'react-icons/md';
import { TbFileInvoice, TbMessage2, TbReport } from 'react-icons/tb';

const DashboardActionOptions = () => {
    return (
        <div className="grid sm:grid-cols-5 grid-cols-2 sm:gap-4 gap-3 bg-white sm:p-5 p-3 border border-gray-200  rounded-lg mt-5  ">
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-gray-700">
                    <MdOutlineAddHomeWork className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">To-let Post</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-priColor">
                    <FaBuildingUser className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Tenants</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-pink-500">
                    <TbFileInvoice className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Invoice</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-accent">
                    <GiReceiveMoney className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Income</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-danger">
                    <GiPayMoney className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Expense</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-[#221C7D]">
                    <GrUserPolice className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Police Verify</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-secColor">
                    <GrVmMaintenance className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Maintenance</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-[#7828C8]">
                    <HiMiniUserGroup className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Visitor</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-emerald-600">
                    <TbMessage2 className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">SMS</div>
                </div>
            </div>
            <div className="w-full   bg-white flex flex-col items-center gap-2 sm:gap-3 pb-3 pt-5 border border-gray-200  rounded-lg ">
                <div className="p-3 rounded-full bg-yellow-600">
                    <TbReport className="h-5 w-5 text-white" />
                </div>
                <div className=" ">
                    <div className="text-secTextColor text-base">Report</div>
                </div>
            </div>


        </div>
    );
};

export default DashboardActionOptions;