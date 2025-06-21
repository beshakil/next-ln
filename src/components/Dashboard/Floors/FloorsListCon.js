
import React from 'react';
import ActionBtnComponent from '../../GlobalComponent/ActionBtnComponent';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';


const FloorsListCon = ({ filteredFloors, handleEditClick, onDeleteWarningChange }) => {


    return (
        <>
            <div className="">
                {filteredFloors.length > 0 ? (
                    filteredFloors.map((floor, index) => (
                        <div key={index} className='my-6'>
                            <h3 className='sm:text-2xl text-xl text-priTextColor dark:text-zinc-200 text-center font-bold mb-1'>{floor.floor}</h3>
                            <div className="grid sm:gap-5 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                                {floor.flats.map((flat, flatIndex) => (
                                    <div key={flatIndex} className="w-auto bg-white border border-gray-200 lg:p-5 md:p-5 p-3 pt-0 md:pt-5 lg:pt-5 border border-gray-200-gray-200 rounded-lg dark:bg-gray-900 dark:border border-gray-200-gray-700">
                                        <div className='w-auto m-auto mt-1 md:mt-0 lg:mt-0 relative flex flex-row sm:flex-col gap-3 sm:gap-0 items-center sm:items-start'>
                                            <div className={`flex sm:m-auto m-0 items-center justify-center sm:text-3xl text-2xl font-bold sm:w-20 w-16 sm:h-20 h-16 rounded-full bg-boxBgColor text-priHover mt-0 sm:mt-0`}>
                                                {flat.id}
                                            </div>
                                            <div>
                                                <div className='pt-2 sm:pt-4 pb-0 sm:pb-2'>
                                                    <h2 className='text-priColor dark:text-purple-300 text-sm sm:text-xl font-bold text-left leading-6 sm:leading-7'>Shopno Chura</h2>
                                                </div>
                                                <div>
                                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Floor: <span className='text-priColor dark:text-purple-300'>{floor.floor}</span></p>
                                                    <p className='text-secTextColor leading-6 sm:leading-7 dark:text-purple-300 text-sm sm:text-base'>Flat No: <span className='text-priColor dark:text-purple-300'>{flat.id}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex justify-center gap-3 pt-2">
                                            <ActionBtnComponent
                                                onClick={() => handleEditClick(flat)}
                                                buttonClass="!text-white w-full !px-2.5 !py-1.5 !text-xs !bg-green-500 hover:!bg-green-600"
                                                buttonText={"Edit"}
                                                startContent={<FaEdit className='text-white text-base -mt-0.5 cursor-pointer' />}
                                            />
                                            <ActionBtnComponent
                                                onClick={onDeleteWarningChange}
                                                buttonClass="!text-white w-full !px-2.5 !py-1.5 !text-xs !bg-red-500 hover:!bg-red-600"
                                                buttonText={"Delete"}
                                                startContent={<FaTrashAlt className='text-white text-xs -mt-0.5 cursor-pointer' />}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='text-zinc-600 dark:text-zinc-200 font-bold text-center py-20'>No floors found.</p>
                )}
            </div>
        </>
    );
};

export default FloorsListCon;
