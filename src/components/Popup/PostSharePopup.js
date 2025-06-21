import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';
import React from 'react';
import { BsXLg, BsFacebook, BsInstagram, BsYoutube, BsTwitter, BsQrCodeScan, BsGithub, BsTiktok } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";

const PostSharePopup = ({ isOpen, onOpenChange }) => {

    
    const handleOnChange = (e) => {
        
    }

    return (
        <Modal size="md" placement={"center"} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-xl">Share post</ModalHeader>
                        <ModalBody>
                            <div className="">
                                <div className='grid grid-cols-2 gap-2 md:gap-4 border border-gray-200-b pb-6 pt-0'>
                                    <div className='flex gap-3 items-center  p-3 md:p-5 rounded-lg hover:text-primary hover:bg-[#EDEFF1] border border-gray-200 pl-4 md:pl-12 cursor-pointer'>
                                        <BsFacebook className='mt-1 text-xl' />
                                        <p className='pt-1 font-medium'>Facebook</p>
                                    </div>
                                    {/* <div className='flex gap-3 items-center p-3 md:p-5 rounded-lg hover:text-primary hover:bg-[#EDEFF1] border border-gray-200  pl-6 md:pl-12 cursor-pointer'>
                                        <BsTwitter className='mt-1 text-xl' />
                                        <p className='pt-1 font-medium'>Twitter</p>
                                    </div> */}
                                    <div className='flex gap-3 items-center p-3 md:p-5 rounded-lg hover:text-primary hover:bg-[#EDEFF1] border border-gray-200 pl-5 md:pl-12 cursor-pointer'>
                                        <MdOutlineMailOutline className='mt-1 text-xl' />
                                        <p className='pt-1 font-medium'>Email</p>
                                    </div>
                                    {/* <div className='flex gap-3 items-center p-3 md:p-5 rounded-lg hover:text-primary hover:bg-[#EDEFF1] border border-gray-200 pl-6 md:pl-12  cursor-pointer'>
                                        <BsQrCodeScan className='mt-1 text-xl' />
                                        <p className='pt-1 font-medium'>QR Code</p>
                                    </div> */}
                                </div>
                                <div className='text-center py-5'>
                                    <h4 className='text-xl font-semibold'>Share page link</h4>
                                    <div className='relative w-full mt-4'>
                                        <input
                                            type="text"
                                            placeholder=""
                                            value="http://localhost:3000/en/to-let/1"
                                            onChange={handleOnChange}
                                            className=" text-base focus:outline-none border border-gray-200-primary border border-gray-200 w-full h-12 bg-[#F9FAFB] pl-3 pt-1 rounded-lg" />
                                        <div
                                            className="absolute top-[8px] right-2 bg-primary text-white shadow-lg h-8 px-2 md:px-3 text-base md:text-lg rounded-lg inline-flex group items-center justify-center cursor-pointer">
                                            <button className="flex items-center gap-2">
                                                <span className='text-sm'> Copy</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className=' bg-boxBgColor rounded-lg border border-gray-200-2 border border-gray-200-primary pt-3 pb-3 mt-6'>
                                        <h5><strong>Tip:</strong> Add this link to your social bios.</h5>
                                        <div className='flex gap-6 justify-center pt-2'>
                                            <BsFacebook className='text-indigo-600 text-2xl' />
                                            <BsYoutube className='text-red-500 text-2xl' />
                                            <BsInstagram className='text-pink-600 text-2xl' />
                                            <BsTiktok className='text-gray-900 text-2xl' />
                                            <BsTwitter className='text-blue-500 text-2xl' />
                                            <BsGithub className='text-gray-900 text-2xl' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default PostSharePopup;