"use client";

import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Switch,
    RadioGroup,
    Radio,
    Textarea
} from "@heroui/react";
import dynamic from 'next/dynamic';
import ButtonComponent from "../../GlobalComponent/ButtonComponent";
import { useTranslations } from "next-intl";
import { floorOptions } from '../../../data/floors';

const CalenderComponent = dynamic(
    () => import('../../GlobalComponent/CalenderComponent'),
    { ssr: false }
);

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const flatOptions = [
    { value: '1', label: '1A' },
    { value: '2', label: '1B' },
    { value: '3', label: '2A' },
    { value: '4', label: '2B' },
]

const tenantOptions = [
    { value: '1', label: 'Tenant 1' },
    { value: '2', label: 'Tenant 2' },
    { value: '3', label: 'Tenant 3' },
    { value: '4', label: 'Tenant 4' },
]

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]

const vehicleOptions = [
    { value: 1, label: 'Car' },
    { value: 2, label: 'CNG' },
    { value: 3, label: 'Motorcycle' },
    { value: 4, label: 'Others' },
]


export default function AddEditAssignParking({ isOpen, onOpen, onOpenChange, selectedAssignFlat }) {
    const t = useTranslations("addEditBuilding");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [isSelectedToLet, setIsSelectedToLet] = React.useState(false);
    const [floors, setFloors] = useState([]);

    const [ownerType, setOwnerType] = useState("tenant");

    useEffect(() => {
        if (Array.isArray(floorOptions)) {
            const formattedFloors = floorOptions.map((floor) => ({
                value: floor.value,
                label: `${floor.label} (${floor.bn_name})`,
            }));
            setFloors(formattedFloors);
        }
    }, [floorOptions]);



    return (
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} scrollBehavior={"inside"} size={"3xl"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{selectedAssignFlat ? 'Edit assign parking' : 'Assign parking'}</ModalHeader>
                        <ModalBody>
                            <div className="w-full">
                                <p className="text-priColor dark:text-purple-300 text-base">Select building</p>
                                <SelectOptionComponent
                                    options={buildingList}
                                    placeholder="Select a building"
                                    menuPlacement="bottom"
                                />
                            </div>
                            <div className="flex sm:flex-col flex-col items-center gap-3 w-full">
                                <div className="flex sm:flex-row flex-col gap-3 w-full">
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Car type</p>
                                        <SelectOptionComponent
                                            options={vehicleOptions}
                                            placeholder="Select car type"
                                            menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Monthly rent cost</p>
                                        <Input
                                            className="w-full"
                                            name="rent"
                                            placeholder="Rent cost"
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            color="primary"
                                        />
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-3 w-full">
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">License number</p>
                                        <Input
                                            className="w-full"
                                            name="rent"
                                            placeholder="Enter license number"
                                            type="number"
                                            radius="sm"
                                            variant="bordered"
                                            color="primary"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Color</p>
                                        <Input
                                            className="w-full"
                                            name="rent"
                                            placeholder="Ex: red, blue, green, etc."
                                            type="text"
                                            radius="sm"
                                            variant="bordered"
                                            color="primary"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">Select owner type</p>
                                    <RadioGroup
                                        color="primary"
                                        orientation="horizontal"
                                        value={ownerType}
                                        onValueChange={setOwnerType}
                                    >
                                        <Radio value="tenant">
                                            <p className="text-[#1F2937] mt-[4px]">Tenant</p>
                                        </Radio>
                                        <Radio value="others">
                                            <p className="text-[#1F2937] mt-[4px]">Others owner</p>
                                        </Radio>
                                    </RadioGroup>
                                </div>
                                {ownerType === "tenant" ? (
                                    <>
                                        <div className="flex sm:flex-row flex-col gap-3 w-full">
                                            <div className="w-full">
                                                <p className="text-priColor dark:text-purple-300 text-base">Floor select</p>
                                                <SelectOptionComponent
                                                    options={floors}
                                                    placeholder="Select a floor"
                                                    menuPlacement="top"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <p className="text-priColor dark:text-purple-300 text-base">Flat select</p>
                                                <SelectOptionComponent
                                                    options={flatOptions}
                                                    placeholder="Select a flat"
                                                    menuPlacement="top"
                                                // onChange={(e) => console.log(e)}
                                                />
                                            </div>
                                            <div className="w-full">
                                                <p className="text-priColor dark:text-purple-300 text-base">Tenant select</p>
                                                <SelectOptionComponent
                                                    options={tenantOptions}
                                                    placeholder="Select a user"
                                                    menuPlacement="top"
                                                // onChange={(e) => console.log(e)}
                                                />
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex sm:flex-row flex-col gap-3 w-full">
                                            <div className="w-full">
                                                <p className="text-priColor dark:text-purple-300 text-base">Owner name</p>
                                                <Input
                                                    className="w-full"
                                                    name="rent"
                                                    placeholder="Enter license number"
                                                    type="text"
                                                    radius="sm"
                                                    variant="bordered"
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <p className="text-priColor dark:text-purple-300 text-base">Mobile number</p>
                                                <Input
                                                    className="w-full"
                                                    name="rent"
                                                    placeholder="Enter mobile number"
                                                    type="number"
                                                    radius="sm"
                                                    variant="bordered"
                                                    color="primary"
                                                />
                                            </div>
                                            <div className="w-full">
                                                <p className="text-priColor dark:text-purple-300 text-base">NID number</p>
                                                <Input
                                                    className="w-full"
                                                    name="rent"
                                                    placeholder="Enter nid number"
                                                    type="number"
                                                    radius="sm"
                                                    variant="bordered"
                                                    color="primary"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <p className="text-priColor dark:text-purple-300 text-base">Address</p>
                                            <Textarea
                                                className="col-span-12 md:col-span-6"
                                                labelPlacement="outside"
                                                placeholder="Enter address"
                                                variant={"bordered"}
                                                radius="sm"
                                                color="primary"
                                            />
                                        </div>
                                    </>
                                )}
                                <div className="flex sm:flex-row flex-col gap-3 w-full">
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">Start date<span className='text-danger'>*</span></p>
                                        <CalenderComponent
                                            selectedDate={startDate}
                                            setSelectedDate={setStartDate}
                                            placeholderText={"dd/MM/yyyy"}
                                        />
                                    </div>
                                    <div className="w-full labelCSS">
                                        <p className="text-priColor dark:text-purple-300 text-base">End date</p>
                                        <CalenderComponent
                                            selectedDate={endDate}
                                            setSelectedDate={setEndDate}
                                            placeholderText={"dd/MM/yyyy"}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-start w-full items-center py-1">
                                    <Switch size="sm" color="primary" isSelected={isSelectedToLet} onValueChange={setIsSelectedToLet}>
                                        <p className="text-priColor dark:text-purple-300 text-base mt-0.5">Currently present</p>
                                    </Switch>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter className="pb-6">
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={selectedAssignFlat ? 'Update' : t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}