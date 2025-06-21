"use client"

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
} from "@heroui/react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DashSideMenuList from "./DashSideMenuList";

export default function DashMobileSideBar() {

    const { isOpen: isOpenMobileMenu, onOpen: onOpenMobileMenu, onClose: onCloseMobileMenu } = useDisclosure();

    return (
        <>
            <button onClick={onOpenMobileMenu} className="text-gray-500 inline-flex items-center rounded sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <HiOutlineMenuAlt2 className='w-8 h-8 p-1 text-2xl ' />
            </button>

            <Drawer isOpen={isOpenMobileMenu} size={"xs"} placement={"left"} onClose={onCloseMobileMenu}>
                <DrawerContent>
                    {(onClose) => (
                        <>
                            <DrawerHeader className="flex flex-col gap-1">Drawer Title</DrawerHeader>
                            <DrawerBody>
                                <DashSideMenuList isOpenMobileMenu={isOpenMobileMenu} />
                            </DrawerBody>
                            {/* <DrawerFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </DrawerFooter> */}
                        </>
                    )}
                </DrawerContent>
            </Drawer>
        </>
    );
}
