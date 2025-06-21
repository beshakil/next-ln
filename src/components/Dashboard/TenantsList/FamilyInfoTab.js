import React from 'react';
import { FaArrowTrendUp, FaMoneyBillTrendUp } from 'react-icons/fa6';

const FamilyInfoTab = ({ tenant }) => {

    const familyMembers = tenant?.familyMembers || [];

    return (
        <div className='bg-white border border-gray-200-gray-200 border border-gray-200 rounded-lg dark:bg-gray-800 dark:border border-gray-200-gray-700 p-5 mt-5  '>
            {familyMembers.map((member, index) => (
                <div key={index} className='mt-5 first:mt-0'>
                    <h3 className='text-xl font-bold text-priTextColor dark:text-zinc-200'>Family person {index + 1}:</h3>
                    <ul className="divide-y rounded pb-0 text-gray-600 hover:text-gray-700">
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Name</span>
                            <span className="ml-auto text-priColor">{member.name}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Age</span>
                            <span className="ml-auto text-priColor">{member.age}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Relation</span>
                            <span className="ml-auto text-priColor">{member.relation}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Occupations</span>
                            <span className="ml-auto text-priColor">{member.occupations}</span>
                        </li>
                        <li className="flex items-center py-1.5 text-sm">
                            <span className='text-secTextColor dark:text-purple-300'>Phone</span>
                            <span className="ml-auto text-priColor">{member.phone}</span>
                        </li>
                    </ul>
                </div>
            ))}
        </div >
    );
};

export default FamilyInfoTab;