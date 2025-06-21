import { Modal, ModalBody, ModalContent, ModalHeader } from '@heroui/react';
import React from 'react';

const StaffRolesDetailsPopup = ({ isOpen, onOpenChange, selectedStaffRole }) => {
    return (
        <Modal size="md" placement={"center"} scrollBehavior='inside' isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className='m-5'>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            Staff role details
                        </ModalHeader>
                        <ModalBody>
                            <div className="pb-3 -mt-2">

                                <ul className="divide-y sm:w-full w-full rounded">
                                    <li className="flex items-center py-1.5 text-sm">
                                        <span className='text-priColor dark:text-purple-300'>Role Name:</span>
                                        <span className="ml-auto text-right">{selectedStaffRole?.roleName}</span>
                                    </li>
                                    <li className="flex items-center py-1.5 text-sm">
                                        <p className='text-priColor dark:text-purple-300 text-justify'>Description:
                                            <span className="ml-auto text-left text-priTextColor"> {selectedStaffRole.descriptions}</span>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default StaffRolesDetailsPopup;