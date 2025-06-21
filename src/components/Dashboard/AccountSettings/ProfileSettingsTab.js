"use client"

import React from 'react';
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import { TbUpload } from 'react-icons/tb';
import { Input } from '@heroui/react';
import PhoneInput from 'react-phone-input-2';
import { Icon } from "@iconify/react";
import Image from 'next/image';
import userImage from '../../../assets/jpg/userImage.jpeg'

const ProfileSettingsTab = () => {

    const [isVisible, setIsVisible] = React.useState(false);
    const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const confirmToggleVisibility = () => setIsConfirmVisible(!isConfirmVisible);
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [errors, setErrors] = React.useState({
        phone: '',
        password: '',
    });

    return (
        <div className='mt-5'>
            <div className='block md:flex lg:flex gap-5'>
                <div className='w-full md:w-full lg:w-[50%] '>
                    <div className='bg-white rounded-lg border border-gray-200 p-5 md:p-5 lg:p-10'>
                        <div className='pb-5'>
                            <h3 className=' text-xl md:text-xl lg:text-2xl text-priTextColor dark:text-zinc-200 font-bold'>Account Information</h3>
                            <p className='text-secTextColor text-sm md:text-base lg:text-base'>Edit your profile quickly</p>
                        </div>
                        <div className='flex gap-5 items-center justify-start py-3'>
                            <div className="flex sm:w-20 sm:h-20 w-16 h-16 rounded-full">
                                <Image
                                    src={userImage}
                                    width={80}
                                    height={80}
                                    className="rounded-full sm:w-20 sm:h-20 w-16 h-16 object-cover"
                                    alt={`Picture of user`}
                                    loading="lazy"
                                />
                            </div>
                            <div className='mt-2'>
                                <ButtonComponent
                                    onClick={() => { }}
                                    buttonClass="!h-8 !px-4"
                                    buttonText="Upload"
                                    startContent={<TbUpload className='text-base' />}
                                />
                                <p className='text-secTextColor text-sm md:text-base lg:text-base mt-2'>Upload an image 512x512 or larger.</p>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className='flex gap-2 md:gap-5 lg:gap-5 items-center'>
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">First name</p>
                                    <Input
                                        color='primary'
                                        name="name"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder='First name'
                                        value={'John'}
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">Last name</p>
                                    <Input
                                        color='primary'
                                        name="name"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                        placeholder='Last name'
                                        value={'Doe'}
                                    />
                                </div>
                            </div>
                            <div className="w-full mt-5">
                                <p className="text-priColor dark:text-purple-300 text-base">Email</p>
                                <Input
                                    color='primary'
                                    name="name"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                    placeholder='Last name'
                                    value={'admin@gmail.com'}
                                />
                            </div>
                            <div className="w-full mt-5">
                                <p className="text-priColor dark:text-purple-300 text-base">Phone number</p>
                                <PhoneInput
                                    inputStyle={{
                                        width: '100%',
                                        height: '40px',
                                        border border-gray-200Radius: '8px',
                                    }}
                                    buttonStyle={{ border border-gray-200Radius: "8px 0px 0px 8px" }}
                                    country={'bd'}
                                    disableDropdown={true}
                                    placeholder="Enter your phone number"
                                    value={phoneNumber}
                                    onChange={setPhoneNumber}
                                />
                                {errors.phone && <p className="text-sm text-red-500 -mt-4">{errors.phone}</p>}
                            </div>
                            <div className='mt-5 flex justify-end'>
                                <ButtonComponent
                                    onClick={() => { }}
                                    buttonClass="!px-6"
                                    buttonText="Update now"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-full lg:w-[50%] '>
                    <div className='bg-white rounded-lg border border-gray-200 p-5 md:p-5 lg:p-10'>
                        <div className='pb-5'>
                            <h3 className='text-xl md:text-xl lg:text-2xl text-priTextColor dark:text-zinc-200 font-bold'>Password</h3>
                        </div>
                        <div className=''>
                            <div className="w-full">
                                <p className="text-priColor dark:text-purple-300 text-base">New password</p>
                                <Input
                                    radius="sm"
                                    endContent={
                                        <button type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <Icon
                                                    className="pointer-events-none text-2xl text-default-400"
                                                    icon="solar:eye-closed-linear"
                                                />
                                            ) : (
                                                <Icon
                                                    className="pointer-events-none text-2xl text-default-400"
                                                    icon="solar:eye-bold"
                                                />
                                            )}
                                        </button>
                                    }
                                    color="primary"
                                    placeholder="Enter your password"
                                    type={isVisible ? "text" : "password"}
                                    variant="bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <p className="text-sm text-red-500 -mt-4">{errors.password}</p>}
                            </div>
                            <div className="w-full mt-5">
                                <p className="text-priColor dark:text-purple-300 text-base">Re-type new password</p>
                                <Input
                                    radius="sm"
                                    endContent={
                                        <button type="button" onClick={confirmToggleVisibility}>
                                            {isConfirmVisible ? (
                                                <Icon
                                                    className="pointer-events-none text-2xl text-default-400"
                                                    icon="solar:eye-closed-linear"
                                                />
                                            ) : (
                                                <Icon
                                                    className="pointer-events-none text-2xl text-default-400"
                                                    icon="solar:eye-bold"
                                                />
                                            )}
                                        </button>
                                    }
                                    color="primary"
                                    placeholder="Enter your password"
                                    type={isConfirmVisible ? "text" : "password"}
                                    variant="bordered"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.password && <p className="text-sm text-red-500 -mt-4">{errors.password}</p>}
                            </div>
                            <div className='mt-5 flex justify-end'>
                                <ButtonComponent
                                    onClick={() => { }}
                                    buttonClass="!px-6"
                                    buttonText="Update password"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg border border-gray-200 p-5 md:p-5 lg:p-10 mt-5 w-full md:w-full lg:w-[49.2%]'>
                <div className='pb-5'>
                    <h3 className='text-xl md:text-xl lg:text-2xl text-priTextColor dark:text-zinc-200 font-bold'>Delete Account</h3>
                </div>
                <div className=' bg-red-100 p-5 rounded-lg'>
                    <p className='text-red-500 text-sm'>Are you sure you want to delete your account?</p>
                    <p className='text-red-500 text-sm'>Once you delete your account, there is no going back. Please be certain.</p>
                </div>
                <div className='mt-8 flex justify-end'>
                    <ButtonComponent
                        onClick={() => { }}
                        buttonClass="!px-6 !bg-red-500 hover:!bg-red-600 !h-9"
                        buttonText="Delete account"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfileSettingsTab;