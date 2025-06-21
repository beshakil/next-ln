"use client";

import React, { useEffect, useState } from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Textarea,
    Checkbox
} from "@heroui/react";
import ButtonComponent from '../../GlobalComponent/ButtonComponent';
import dynamic from 'next/dynamic';
const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const questions = [
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

const options = [
    "Very Satisfied",
    "Satisfied",
    "Neutral",
    "Dissatisfied",
    "Very Dissatisfied",
];

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const StartInspection = ({ isOpen, onOpenChange, onConfirm, }) => {

    const [building, setBuilding] = useState(null);
    const [answers, setAnswers] = useState({});

    const handleAnswerChange = (questionIndex, answer) => {
        setAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    };

    return (
        <Modal size="3xl" placement="center" scrollBehavior="inside" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="m-5">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            Start Inspection
                        </ModalHeader>
                        <ModalBody>
                            <div className="w-full pb-2 -mt-2">
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base mb-1">Select building</p>
                                    <SelectOptionComponent
                                        options={buildingList}
                                        placeholder="Select a building"
                                        menuPlacement="bottom"
                                        onChange={(e) => setBuilding(e)}
                                    />
                                </div>

                                <div className="w-full pt-4 flex flex-col gap-6">
                                    {questions.map((question, index) => (
                                        <div key={index}>
                                            <p className="text-priColor dark:text-purple-300 text-base mb-2">{question}</p>
                                            <div className="flex flex-col gap-2">
                                                {options.map((option, i) => (
                                                    <Checkbox
                                                        key={i}
                                                        color="primary"
                                                        isSelected={answers[index] === option}
                                                        onValueChange={() => handleAnswerChange(index, option)}
                                                    >
                                                        <p className="text-priTextColor dark:text-purple-300 mt-1 text-sm">{option}</p>
                                                    </Checkbox>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='w-full pt-4'>
                                    <p className="text-priColor dark:text-purple-300 text-base">Additional Comment</p>
                                    <Textarea
                                        className="col-span-12 md:col-span-6 !min-h-20"
                                        placeholder="Enter additional comment"
                                        variant={"bordered"}
                                        radius="sm"
                                        color="primary"
                                    />
                                </div>
                            </div>

                            <div className="flex gap-2 justify-end pb-3 pt-4">
                                <ButtonComponent
                                    onClick={onClose}
                                    buttonClass="border border-gray-200 bg-transparent border border-gray-200-purple-500 !text-priColor hover:!bg-purple-500 hover:!text-zinc-50"
                                    buttonText="Cancel"
                                />
                                <ButtonComponent
                                    onClick={() => onConfirm({ building, answers })}
                                    buttonClass=""
                                    buttonText="Save Inspection"
                                />
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default StartInspection;