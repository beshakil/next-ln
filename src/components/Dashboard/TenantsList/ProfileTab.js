import React from 'react';
import { FaArrowTrendUp, FaMoneyBillTrendUp } from 'react-icons/fa6';
import { GiMoneyStack, GiTakeMyMoney } from 'react-icons/gi';

const ProfileTab = ({ tenant }) => {
    return (
        <div className=''>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-5">
                <div className="p-5 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-fuchsia-100 text-fuchsia-500">
                            <FaArrowTrendUp className='text-3xl' />
                        </div>
                        <div>
                            <div className="text-2xl font-bold  text-priTextColor">98100.90</div>
                            <div className="text-zinc-500">Monthly payable amount</div>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600">
                            <FaMoneyBillTrendUp className='text-2xl' />
                        </div>
                        <div>
                            <div className="text-2xl font-bold  text-priTextColor">7520.100</div>
                            <div className="text-zinc-500">Total bill</div>
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-500">
                            <GiMoneyStack className='text-3xl' />
                        </div>
                        <div>
                            <div className="text-2xl font-bold  text-priTextColor !font-sans">2100.00</div>
                            <div className="text-zinc-500">Total paid</div>
                        </div>
                    </div>
                </div>
                <div className="p-5 bg-white rounded-lg   border border-gray-200-gray-200 border border-gray-200">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500">
                            <GiTakeMyMoney className='text-[26px]' />
                        </div>
                        <div>
                            <div className="text-zinc-500">Balance</div>
                            <div className="text-2xl font-bold  text-priTextColor !font-sans">2100.00</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white border border-gray-200-gray-200 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border border-gray-200-gray-700 p-5 mt-5  '>
                <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200'>General Information:</h3>
                <ul className="divide-y rounded pt-2 pb-0 text-gray-600 hover:text-gray-700">
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Name</span>
                        <span className="ml-auto text-priColor">{tenant?.name}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Falters Name</span>
                        <span className="ml-auto text-priColor">{tenant?.fathersName}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Mothers Name</span>
                        <span className="ml-auto text-priColor">{tenant?.mothersName}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Email</span>
                        <span className="ml-auto text-priColor">{tenant?.email}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Phone</span>
                        <span className="ml-auto text-priColor">{tenant?.phone}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Passport number</span>
                        <span className="ml-auto text-priColor">{tenant?.passportNumber}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Date of birth</span>
                        <span className="ml-auto text-priColor">{tenant?.dateOfBirth}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Gender</span>
                        <span className="ml-auto text-priColor">{tenant?.gender}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Blood Group</span>
                        <span className="ml-auto text-priColor">{tenant?.bloodGroup}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Marital Status</span>
                        <span className="ml-auto text-priColor">{tenant?.maritalStatus}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Working Address</span>
                        <span className="ml-auto text-priColor">{tenant?.workingAddress}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Religion</span>
                        <span className="ml-auto text-priColor">{tenant?.religion}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Educational Status</span>
                        <span className="ml-auto text-priColor">{tenant?.educationStatus}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Present Address</span>
                        <span className="ml-auto text-priColor">{tenant?.presentAddress}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Permanent Address</span>
                        <span className="ml-auto text-priColor">{tenant?.permanentAddress}</span>
                    </li>
                </ul>

                <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200 mt-6'>Emergency Contracts:</h3>
                <ul className="divide-y rounded pt-2 pb-0 text-gray-600 hover:text-gray-700">
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Name</span>
                        <span className="ml-auto text-priColor">{tenant?.emergencyContact[0]?.name}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Relation</span>
                        <span className="ml-auto text-priColor">{tenant?.emergencyContact[0]?.relation}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Address</span>
                        <span className="ml-auto text-priColor">{tenant?.emergencyContact[0]?.address}</span>
                    </li>
                    <li className="flex items-center py-1.5 text-sm">
                        <span className='text-secTextColor dark:text-purple-300'>Phone</span>
                        <span className="ml-auto text-priColor">{tenant?.emergencyContact[0]?.phone}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileTab;