"use client";

import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "@heroui/react";
import ButtonComponent from "../../GlobalComponent/ButtonComponent";
import { MdCancel, MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useTranslations } from "next-intl";
import FamilyMemberForm from "./FamilyMemberForm";
import DriversFrom from "./DriversFrom";
import HouseKeeperFrom from "./HouseKeeperFrom";
import PreviousLeaveFrom from "./PreviousLeaveFrom";
import Image from "next/image";
import { BiCloudUpload } from "react-icons/bi";
import buildingOne from "../../../assets/webp/buildingOne.webp"
import dynamic from "next/dynamic";

const CalenderComponent= dynamic(
    () => import('../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const genderOptions = [
    { value: '1', label: 'Male' },
    { value: '2', label: 'Female' },
]

const maritalStatusOptions = [
    { value: '1', label: 'Single' },
    { value: '2', label: 'Married' },
    { value: '3', label: 'Divorced' },
]

const religionOptions = [
    { value: '1', label: 'Islam' },
    { value: '2', label: 'Hindu' },
    { value: '3', label: 'Christian' },
    { value: '4', label: 'Buddhist' },
    { value: '5', label: 'Others' },
]

export default function AddEditTenants({ isOpen, onOpen, onOpenChange, selectedTenant }) {
    const [birthDate, setBirthDate] = useState(null);
    const t = useTranslations("addEditBuilding");
    //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [emergencyContactFrom, setEmergencyContactFrom] = useState(true);


    return (
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} scrollBehavior={"inside"} size={"5xl"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{selectedTenant ? "Edit Tenant" : "Add Tenant"}</ModalHeader>
                        <ModalBody>
                            <div className="flex gap-3">
                                <div className="flex items-center justify-center sm:w-[80%] w-[70%] mb-3">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border border-gray-200-2 border border-gray-200-gray-300 border border-gray-200-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border border-gray-200-gray-600 dark:hover:border border-gray-200-gray-500">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <BiCloudUpload className="w-8 h-8 text-gray-500 dark:text-gray-400" />
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">{t('clickToUpload')}</span>
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF
                                            </p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>
                                <div className="relative border border-gray-200-lg sm:w-[20%] w-[30%] h-[128px]">
                                    <Image
                                        src={buildingOne}
                                        width={260}
                                        height={170}
                                        className="rounded-lg w-full h-[128px] object-cover"
                                        alt={`Picture of building`}
                                        style={{
                                            objectFit: "cover",
                                            border border-gray-200Radius: "12px",
                                        }}
                                        loading="lazy"
                                    />
                                    <MdCancel className="text-2xl absolute -top-2 -right-2 text-red-500 rounded-full bg-white cursor-pointer" />
                                </div>
                            </div>
                            <p className="text-priColor dark:text-purple-300 text-base">Personal Information (Same as NID)</p>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder="Tenants full name"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Fathers name"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Mothers name"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 labelCSSNone">
                                <CalenderComponent
                                    selectedDate={birthDate}
                                    setSelectedDate={setBirthDate}
                                    placeholderText="Date of birth"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Blood group"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="NID number"
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 labelCSSNone">
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Address"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <p className="text-priColor dark:text-purple-300 text-base">Basic Information</p>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                <SelectOptionComponent options={genderOptions} placeholder="Gender" menuPlacement="bottom" 
                                // onChange={(e) => console.log(e)}
                                 />
                                <SelectOptionComponent options={maritalStatusOptions} placeholder="Marital status" menuPlacement="bottom" 
                                // onChange={(e) => console.log(e)}
                                 />
                                <SelectOptionComponent options={religionOptions} placeholder="Religion" menuPlacement="bottom" 
                                // onChange={(e) => console.log(e)}
                                 />
                            </div>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3">
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder="Email address"
                                    type="email"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Phone number"
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Passport number"
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3">
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder="Present address"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder="Working address"
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>

                            <div className="flex gap-1 items-center cursor-pointer text-priColor dark:text-purple-300" onClick={() => setEmergencyContactFrom(!emergencyContactFrom)}>
                                <p className="text-priColor dark:text-purple-300 text-base">Emergency Contact </p>
                                {emergencyContactFrom ? <MdKeyboardArrowUp className='text-2xl -mt-1' /> : <MdKeyboardArrowDown className='text-2xl -mt-1' />}
                            </div>
                            {
                                emergencyContactFrom &&
                                <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                    <Input
                                        className=" w-full"
                                        name="totalFloor"
                                        placeholder="Name"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                    />
                                    <Input
                                        className="w-full"
                                        name="unit"
                                        placeholder="Relation"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                    />
                                    <Input
                                        className="w-full"
                                        name="unit"
                                        placeholder="Address"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                    />
                                    <Input
                                        className="w-full"
                                        name="unit"
                                        placeholder="Phone"
                                        type="number"
                                        radius="sm"
                                        variant="bordered"
                                    />
                                </div>
                            }
                            <FamilyMemberForm />
                            <DriversFrom />
                            <HouseKeeperFrom />
                            <PreviousLeaveFrom />
                        </ModalBody>
                        <ModalFooter className="pb-6">
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={selectedTenant ? "Update tenant" : t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}