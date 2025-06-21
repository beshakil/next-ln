"use client";

import React from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Input,
} from "@heroui/react";
import ButtonComponent from "../../GlobalComponent/ButtonComponent";
import { useTranslations } from "next-intl";
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


export default function AddEditSlot({ isOpen, onOpen, onOpenChange, selectedParkingSlot }) {
    const t = useTranslations("addEditBuilding");
    //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} size={"sm"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{selectedParkingSlot ? "Update slot" : "Add slot"}</ModalHeader>
                        <ModalBody>
                            <div className="flex sm:flex-col flex-col items-center gap-3 -mt-2">
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">Building select</p>
                                    <SelectOptionComponent options={buildingList}
                                        placeholder="Select a building"
                                        menuPlacement="bottom"
                                    // onChange={(e) => console.log(e)}
                                    />
                                </div>
                                <div className="w-full">
                                    <p className="text-priColor dark:text-purple-300 text-base">Slot name</p>
                                    <Input
                                        color="primary"
                                        placeholder="Example: P-1, P-2, P-3"
                                        type="text"
                                        radius="sm"
                                        variant="bordered"
                                    />
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter className="pb-6">
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={selectedParkingSlot ? "Update" : t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}