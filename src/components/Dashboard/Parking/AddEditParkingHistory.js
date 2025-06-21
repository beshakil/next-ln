"use client";

import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Switch
} from "@heroui/react";
import ButtonComponent from "../../GlobalComponent/ButtonComponent";
import { useTranslations } from "next-intl";
import makeAnimated from 'react-select/animated';
import { floorOptions } from '../../../data/floors';
import dynamic from "next/dynamic";

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


export default function AddEditParkingHistory({ isOpen, onOpen, onOpenChange, selectedParkingHistory }) {
    const t = useTranslations("addEditBuilding");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const [isSelectedToLet, setIsSelectedToLet] = React.useState(false);
    const [floors, setFloors] = useState([]);

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    const animatedComponents = makeAnimated();

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
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} scrollBehavior={scrollBehavior} size={"xl"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{selectedParkingHistory ? "Edit parking history" : "Add parking history"}</ModalHeader>
                        <ModalBody>
                            <div className="flex sm:flex-col flex-col items-center gap-3 -mt-2 w-full">
                                <div className="flex sm:flex-row flex-col gap-3 w-full">
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Select building</p>
                                        <SelectOptionComponent options={buildingList} placeholder="Select a building" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Floor select</p>
                                        <SelectOptionComponent options={floors} placeholder="Select a floor" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                </div>
                                <div className="flex sm:flex-row flex-col gap-3 w-full">
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Flat select</p>
                                        <SelectOptionComponent options={flatOptions} placeholder="Select a flat" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                    <div className="w-full">
                                        <p className="text-priColor dark:text-purple-300 text-base">Tenant select</p>
                                        <SelectOptionComponent options={tenantOptions} placeholder="Select a user" menuPlacement="bottom"
                                        // onChange={(e) => console.log(e)}
                                        />
                                    </div>
                                </div>

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
                                <div className="flex justify-start w-full items-center">
                                    <Switch size="sm" color="primary" isSelected={isSelectedToLet} onValueChange={setIsSelectedToLet}>
                                        <p className="text-priColor dark:text-purple-300 text-base mt-0.5">Currently present</p>
                                    </Switch>
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter className="pb-6">
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={selectedParkingHistory ? "Update" : t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}