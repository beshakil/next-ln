"use client";

import React from 'react';
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    InputOtp
} from "@heroui/react";
import ButtonComponent from '../GlobalComponent/ButtonComponent';
import { toast } from 'react-toastify';

const OtpVerify = ({ isOpen, onOpenChange }) => {
    const [value, setValue] = React.useState("");
    const [isInvalid, setIsInvalid] = React.useState(false);

    const handleVerify = (onClose) => {
        if (value === "123456") {
            toast.success("OTP Verified Successfully!");
            onClose(); // Close the modal
        } else {
            setIsInvalid(true); // Show error
            toast.error("Incorrect OTP. Please try again!");
        }
    };

    return (
        <Modal size="sm" placement="center" isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="m-5">
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1 text-priColor dark:text-purple-300 text-lg">
                            OTP Verification
                        </ModalHeader>
                        <ModalBody>
                            <div className="pb-2">
                                <div className="flex flex-col gap-3 justify-center pt-2">
                                    <div>
                                        <h1 className="text-xl font-semibold text-center mb-1 text-priColor">Enter OTP</h1>
                                        <p className="text-secTextColor text-center">Code sent to +880-123456789</p>
                                    </div>
                                    <div className="flex justify-center">
                                        <InputOtp
                                            className="otpInputClass"
                                            classNames={{
                                                segmentWrapper: "gap-x-2",
                                                segment: ["border border-gray-200-default-200"],
                                            }}
                                            color="primary"
                                            variant="bordered"
                                            size="md"
                                            length={6}
                                            value={value}
                                            isRequired
                                            isInvalid={isInvalid}
                                            errorMessage={isInvalid ? "Invalid OTP code" : ""}
                                            onValueChange={(newValue) => {
                                                setValue(newValue);
                                                setIsInvalid(false); // Clear error while typing
                                            }}
                                        />
                                    </div>
                                    <div className="flex justify-between pb-5">
                                        <button className="text-sm font-medium rounded text-secTextColor">
                                            {"Didn't receive code?"}
                                        </button>
                                        <button className="text-sm font-medium rounded text-priColor hover:text-secColor">
                                            Resend OTP (00:00:36)
                                        </button>
                                    </div>
                                </div>
                                <div className="pb-5">
                                    <ButtonComponent
                                        onClick={() => handleVerify(onClose)}
                                        buttonClass="w-full pt-0.5"
                                        buttonText="Verify"
                                    />
                                </div>
                            </div>
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default OtpVerify;
