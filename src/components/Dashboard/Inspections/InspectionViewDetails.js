import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import React from 'react';

const InspectionViewDetails = ({ isOpen, onOpenChange, selectedInspection }) => {

    const questionList = [
        "১. সিসিটিভি ক্যামেরা ও নিরাপত্তা ব্যবস্থা ঠিক আছে?",
        "২. বাড়ির বাইরের অংশ যেমন বারান্দা ও সিঁড়ির অবস্থা কেমন?",
        "৩. ফায়ার সেফটি ব্যবস্থা আছে?",
        "৪. গ্যাস লাইন ও সিলিন্ডারের নিরাপত্তা ব্যবস্থা ঠিক আছে?",
        "৫. রান্নাঘরের অবস্থা কেমন?",
        "৬. সেপ্টিক ট্যাংক ও ড্রেনেজ ব্যবস্থা ঠিক আছে?",
        "৭. পানির লাইন ও পাইপ ঠিক আছে?",
        "৮. বাথরুম ও টয়লেট ব্যবস্থার অবস্থা কেমন?",
        "৯. বাড়ির দরজা এবং জানালার অবস্থা কেমন?",
        "১০. বিদ্যুৎ ব্যবস্থা ঠিকমতো কাজ করছে?",
        "১১. বাড়ির দেয়ালগুলোর অবস্থা কেমন?",
        "১২. ছাদের অবস্থা কেমন?",
        "১৩. বাড়ির মূল কাঠামো কি ভালো অবস্থায় আছে?",
        "১৪. গাড়ি পার্কিং ও প্রবেশপথ ঠিক আছে?",
        "১৫. বাড়ির আশেপাশের পরিবেশ কেমন?",
    ];

    return (
        <Modal size="2xl" placement={"center"} scrollBehavior='inside' isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            Inspection details
                        </ModalHeader>
                        <ModalBody>
                            <p className='text-priColor dark:text-purple-300 text-base sm:text-xl text-center pb-1'>Response of Inspection 2025-04-25</p>
                            <div className="pb-3 -mt-2">
                                <div className='overflow-x-auto'>
                                    <table className="w-full text-xs sm:text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-base rounded-md h-10 text-gray-700 bg-boxBgColor dark:bg-gray-700 dark:text-gray-400">
                                            <th className="sm:px-6 px-2 py-3 text-sm whitespace-nowrap text-priTextColor">Inspection Question</th>
                                            <th className="sm:px-6 px-2 py-3 text-sm whitespace-nowrap text-priTextColor">Answer</th>
                                        </thead>
                                        <tbody>
                                            {questionList.map((question, index) => (
                                                <tr key={index} className="bg-white border border-gray-200-b dark:bg-gray-800 dark:border border-gray-200-gray-700">
                                                    <td className="sm:px-6 px-2 sm:py-4 py-2 text-priTextColor">
                                                        <p className="sm:w-auto w-32 word-break">{question} </p>
                                                    </td>
                                                    <td className="whitespace-nowrap sm:px-6 px-2 sm:py-4 py-2 text-priTextColor">
                                                        <p className="word-break">
                                                            {selectedInspection?.answers?.[index] || "Not answered"}
                                                        </p>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter></ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default InspectionViewDetails;