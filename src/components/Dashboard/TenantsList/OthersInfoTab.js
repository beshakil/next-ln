import React from 'react';
import { FaArrowTrendUp, FaMoneyBillTrendUp } from 'react-icons/fa6';

const OthersInfoTab = ({ tenant }) => {

    const houseKeepers = tenant?.houseKeepers || [];
    const drivers = tenant?.drivers || [];
    const previouslyLeaves = tenant?.previouslyLeaves || [];

    return (
        <div className='bg-white border border-gray-200-gray-200 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border border-gray-200-gray-700 p-5 mt-5'>
            <h3 className='text-xl text-center font-bold text-priTextColor underline dark:text-zinc-200'>Housekeeper Details</h3>
            {houseKeepers.map((housekeeper, index) => (
                <div key={index} className='mt-5 first:mt-0'>
                    <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200'>Housekeeper {index + 1}:</h3>
                    <ul className="divide-y rounded pb-0 text-gray-600 hover:text-gray-700">
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Name</span>
                            <span className="ml-auto text-priColor">{housekeeper.name}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>NID</span>
                            <span className="ml-auto text-priColor">{housekeeper.nid}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Phone</span>
                            <span className="ml-auto text-priColor">{housekeeper.phone}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Address</span>
                            <span className="ml-auto text-priColor">{housekeeper.address}</span>
                        </li>
                    </ul>
                </div>
            ))}
            <h3 className='text-xl text-center font-bold text-priTextColor underline dark:text-zinc-200 mt-3'>Driver Details</h3>
            {drivers.map((driver, index) => (
                <div key={index} className='mt-5 first:mt-0'>
                    <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200'>Driver {index + 1}:</h3>
                    <ul className="divide-y rounded pb-0 text-gray-600 hover:text-gray-700">
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Name</span>
                            <span className="ml-auto text-priColor">{driver.name}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>NID</span>
                            <span className="ml-auto text-priColor">{driver.nid}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Phone</span>
                            <span className="ml-auto text-priColor">{driver.phone}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Address</span>
                            <span className="ml-auto text-priColor">{driver.address}</span>
                        </li>
                    </ul>
                </div>
            ))}
            <h3 className='text-xl text-center font-bold text-priTextColor underline dark:text-zinc-200 mt-3'>Previous Landlord Details</h3>
            {previouslyLeaves.map((leave, index) => (
                <div key={index} className='mt-5 first:mt-0'>
                    <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200'>Previous leave {index + 1}:</h3>
                    <ul className="divide-y rounded pb-0 text-gray-600 hover:text-gray-700">
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Name</span>
                            <span className="ml-auto text-priColor">{leave.name}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Phone</span>
                            <span className="ml-auto text-priColor">{leave.phone}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Address</span>
                            <span className="ml-auto text-priColor">{leave.address}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Leave Date</span>
                            <span className="ml-auto text-priColor">{leave.leaveDate}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Leave Reason</span>
                            <span className="ml-auto text-priColor">{leave.leaveReason}</span>
                        </li>
                    </ul>
                </div>
            ))}
        </div >
    );
};

export default OthersInfoTab;