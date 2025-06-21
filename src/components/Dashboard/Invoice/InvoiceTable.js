"use client";

import React, { useState } from 'react';
import { Input, Tooltip } from '@heroui/react';
import { FaTrashAlt } from "react-icons/fa";
import ButtonComponent from '../../GlobalComponent/ButtonComponent';

const InvoiceTable = () => {
    const [data, setData] = useState([
        { name: 'Base Fare', cost: 35000, discount: 0, editable: false },
        { name: 'Utility Bill', cost: 2000, discount: 0, editable: false },
        { name: 'Water Bill', cost: 3000, discount: 0, editable: false },
        { name: 'Gas Bill', cost: 1000, discount: 0, editable: false },
        { name: 'Wastage Bill', cost: 500, discount: 0, editable: false },
        { name: 'Wellfare Bill', cost: 250, discount: 0, editable: false },
        { name: 'Security Bill', cost: 1000, discount: 0, editable: false },
    ]);

    const columnsName = [
        { name: 'Name', width: '30%' },
        { name: 'Cost', width: '20%' },
        { name: 'Discount', width: '20%' },
        { name: 'Sub Total', width: '20%' },
        { name: 'Action', width: '10%' },
    ];

    const handleChange = (index, field, value) => {
        const updatedData = [...data];
        if (field === 'cost' || field === 'discount') {
            updatedData[index][field] = parseFloat(value) || 0;
        } else {
            updatedData[index][field] = value;
        }
        setData(updatedData);
    };

    const handleAddRow = () => {
        setData([
            ...data,
            { name: '', cost: 0, discount: 0, editable: true }
        ]);
    };

    const handleDeleteRow = (index) => {
        const updatedData = [...data];
        updatedData.splice(index, 1);
        setData(updatedData);
    };

    const totalSubtotal = data.reduce((sum, item) => sum + (item.cost - item.discount), 0);
    const totalDiscount = data.reduce((sum, item) => sum + item.discount, 0);


    return (
        <div className="py-5">
            <div className="overflow-x-auto rounded-lg">
                <table className="w-full bg-white border border-gray-200">
                    <thead className='h-10'>
                        <tr className="bg-gray-100 text-left">
                            {columnsName.map((column, index) => (
                                <th
                                    key={index}
                                    className={`py-2 text-sm px-4 whitespace-nowrap text-priColor`}
                                    style={{
                                        width: column.width,
                                        textAlign: column.name === 'Action' ? 'center' : 'left'
                                    }}
                                >
                                    {column.name}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border border-gray-200-t">
                                <td className={`py-2 px-4 whitespace-nowrap`}>
                                    {item.editable ? (
                                        <Input
                                            className='text-priTextColor'
                                            color="primary"
                                            type="text"
                                            variant="bordered"
                                            radius="sm"
                                            value={item.name}
                                            onChange={(e) => handleChange(index, 'name', e.target.value)}
                                        />
                                    ) : (
                                        <p className=' text-priTextColor text-sm'>{item.name}</p>

                                    )}
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    {item.editable ? (
                                        <Input
                                            className='text-priTextColor'
                                            color="primary"
                                            type="number"
                                            variant="bordered"
                                            radius="sm"
                                            startContent="৳"
                                            value={item.cost}
                                            onChange={(e) => handleChange(index, 'cost', e.target.value)}
                                        />
                                    ) : (
                                        <p className=' text-priTextColor text-sm'>৳ {item.cost.toFixed(2)}</p>
                                    )}
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <Input
                                        className='text-priTextColor text-sm'
                                        color="primary"
                                        type="number"
                                        variant="bordered"
                                        radius="sm"
                                        startContent="৳"
                                        value={item.discount}
                                        onChange={(e) => handleChange(index, 'discount', e.target.value)}
                                    />
                                </td>
                                <td className="py-2 px-4 whitespace-nowrap">
                                    <p className=' text-priTextColor text-sm'>৳ {(item.cost - item.discount).toFixed(2)}</p> </td>
                                <td className="py-2 px-4 text-blue-600 hover:underline cursor-pointer flex justify-center">
                                    <Tooltip className="capitalize" placement="top" color="primary" content={<span className='text-xs text-white'>Delete</span>} showArrow={true}>
                                        <FaTrashAlt
                                            className="text-danger text-lg mt-2.5"
                                            onClick={() => handleDeleteRow(index)}
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                        ))}
                        <tr className="bg-gray-100 font-semibold border border-gray-200-t">
                            <td className="py-2 px-4 text-priTextColor">Total</td>
                            <td className="py-2 px-4 text-priTextColor"></td>
                            <td className="py-2 px-4 text-priTextColor">৳ {totalDiscount.toFixed(2)}</td>
                            <td className="py-2 px-4 text-priTextColor">৳ {totalSubtotal.toFixed(2)}</td>
                            <td className="py-2 px-4 text-priTextColor"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <ButtonComponent
                onClick={handleAddRow}
                buttonClass="w-32 mt-5"
                buttonText="Add Row"
            />
        </div>
    );
};

export default InvoiceTable;


