"use client";

import React from "react";
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
import Image from "next/image";
import { BiCloudUpload } from "react-icons/bi";
import buildingOne from "../../../assets/webp/buildingOne.webp"
import { MdCancel } from "react-icons/md";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

const GEOSelect = dynamic(
    () => import('../../GlobalComponent/GEOSelect'),
    { ssr: false }
);


export default function BuildingAddEdit({ isOpen, onOpen, onOpenChange, selectedBuilding }) {
    const t = useTranslations("addEditBuilding");
    //   const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [scrollBehavior, setScrollBehavior] = React.useState("inside");
    const [isSelectedLift, setIsSelectedLift] = React.useState(true);
    const [isSelectedSecurity, setIsSelectedSecurity] = React.useState(false);
    const [isSelectedGenerator, setIsSelectedGenerator] = React.useState(false);
    const [isSelectedSecurityCam, setIsSelectedSecurityCam] = React.useState(false);

    return (
        <Modal isOpen={isOpen} isDismissable={false} isKeyboardDismissDisabled={true} scrollBehavior={scrollBehavior} size={"5xl"} placement={"center"} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">{selectedBuilding ? "Edit Building" : t("addBuilding")}</ModalHeader>
                        <ModalBody>
                            <p className="text-priColor dark:text-purple-300 text-base">{t("basicInfo")}</p>
                            <div className="flex gap-3">
                                <div className="flex items-center justify-center sm:w-[80%] w-[70%] mb-3">
                                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500">
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
                                <div className="relative border-lg sm:w-[20%] w-[30%] h-[128px]">
                                    <Image
                                        src={buildingOne}
                                        width={260}
                                        height={170}
                                        className="rounded-lg w-full h-[128px] object-cover"
                                        alt={`Picture of building`}
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "12px",
                                        }}
                                        loading="lazy"
                                    />
                                    <MdCancel className="text-2xl absolute -top-2 -right-2 text-red-500 rounded-full bg-white cursor-pointer" />
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col items-center gap-3 -mt-2">
                                <Input
                                    name="name"
                                    placeholder={t('buildingName')}
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <p className="text-priColor dark:text-purple-300 text-base">{t('address')}</p>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                <Input
                                    className="sm:w-[25%] w-full"
                                    name="address"
                                    placeholder={t('streetAddress')}
                                    type="text"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <div className="sm:w-[75%] w-full">
                                    <GEOSelect />
                                </div>
                            </div>
                            <p className="text-priColor dark:text-purple-300 text-base">{t('floorDetails')}</p>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder={t('totalFloor')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('unitPerFloor')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <p className="text-priColor dark:text-purple-300 text-base">{t('billDetails')}</p>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder={t("avgBaseFare")}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('avgUtilityBill')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('avgWaterBill')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('avgGasBill')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3">
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('avgWastageBill')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('avgWelfareBill')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className="w-full"
                                    name="unit"
                                    placeholder={t('avgSecurityBill')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <p className="text-priColor dark:text-purple-300 text-base">{t('optionalDetails')}</p>
                            <div className="flex sm:flex-row flex-col w-full items-center gap-3 -mt-2">
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder={t('totalParking')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                                <Input
                                    className=" w-full"
                                    name="totalFloor"
                                    placeholder={t('AvgFare')}
                                    type="number"
                                    radius="sm"
                                    variant="bordered"
                                />
                            </div>
                            <div className="grid sm:grid-cols-5 grid-cols-2 w-full items-center gap-3 mt-2">
                                <Switch size="sm" color="primary" isSelected={isSelectedLift} onValueChange={setIsSelectedLift}>
                                    {t('lift')}
                                </Switch>
                                <Switch size="sm" color="success" isSelected={isSelectedGenerator} onValueChange={setIsSelectedGenerator}>
                                    {t('generator')}
                                </Switch>
                                <Switch size="sm" color="warning" isSelected={isSelectedSecurity} onValueChange={setIsSelectedSecurity}>
                                    {t('security')}
                                </Switch>
                                <Switch size="sm" color="danger" isSelected={isSelectedSecurityCam} onValueChange={setIsSelectedSecurityCam}>
                                    {t('cctv')}
                                </Switch>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <ButtonComponent buttonClass={"bg-red-600 hover:bg-red-500 w-auto"} buttonText={t("cancel")} onClick={onClose} />
                            <ButtonComponent buttonClass={"bg-purple-600 hover:bg-purple-500 w-auto"} buttonText={selectedBuilding ? "Update building" : t("save")} onClick={onClose} />
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}