"use client";

import React, { useEffect, useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
    Switch
} from "@heroui/react";
import ButtonComponent from "../../GlobalComponent/ButtonComponent";
import GEOSelect from "../../GlobalComponent/GEOSelect";
import Image from "next/image";
import { BiCloudUpload } from "react-icons/bi";
import buildingOne from "../../../assets/webp/buildingOne.webp"
import { MdCancel } from "react-icons/md";
import { useTranslations } from "next-intl";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { floorOptions } from '../../../data/floors';
import dynamic from "next/dynamic";

const SelectOptionComponent = dynamic(
    () => import('../../GlobalComponent/SelectOptionComponent'),
    { ssr: false }
);

const buildingList = [
    { value: 1, label: 'Building 1' },
    { value: 2, label: 'Building 2' },
    { value: 3, label: 'Building 3' },
    { value: 4, label: 'Building 4' },
]


export default function AddEditFloor({ isOpen, onOpen, onOpenChange, selectedFloor }) {
    const t = useTranslations("addEditBuilding");
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

    //   useEffect(() => {
    //     if (divisionData && divisionData.divisions && Array.isArray(divisionData.divisions)) {
    //         const formattedDivisions = divisionData.divisions.map(division => ({
    //             value: division.id,
    //             label: `${division.name} (${division.bn_name})`,
    //         }));
    //         setDivisions(formattedDivisions);
    //     }
    // }, []);


    const customStyles = {
        control: (base, state) => ({
            ...base,
            border border-gray-200: state.isFocused ? '2px solid #A1A1A9' : '2px solid #E4E4E7',
            '&:hover': {
                border border-gray-200: state.isFocused ? '2px solid black' : '2px solid #A1A1A9'
            },
            fontSize: '14px',
            cursor: 'pointer',
            border border-gray-200Radius: '8px',
            border border-gray-200Color: state.isFocused ? '#A1A1A9' : '#E4E4E7',
            boxShadow: state.isFocused ? 'none' : 'none',
        })
    }

    return (
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} size={"sm"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{selectedFloor ? "Update floors & flat" : "Add floors & flat"}</ModalHeader>
                        <ModalBody>
                            <div className="flex sm:flex-col flex-col items-center gap-3 -mt-2">
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">Building select</p>
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
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">Flat name</p>
                                    <Input
                                        name="name"
                                        placeholder="Example: 1A, 1B, 1C"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                    />
                                </div>
                            </div>
                            {/* <div className="mt-2">
                                <Switch size="sm" color="primary" isSelected={isSelectedToLet} onValueChange={setIsSelectedToLet}>
                                    To-let
                                </Switch>
                            </div> */}
                        </ModalBody>
                        <ModalFooter className="pb-6">
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={selectedFloor ? "Update" : t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}