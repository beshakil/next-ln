/* eslint-disable no-undef */

"use client";

import React from "react";
import { Button, Input, Checkbox, Link, Divider, useDisclosure, CheckboxGroup } from "@heroui/react";
import { Icon } from "@iconify/react";
import PhoneInput from 'react-phone-input-2'
import ButtonComponent from "../GlobalComponent/ButtonComponent";
import SignupImage from "../../assets/svg/signup.svg";
import Image from "next/image";
import OtpVerify from "./OtpVerify";

export default function SignupForm() {
  const { isOpen: isOtpVerifyOpen, onOpen: onOtpVerifyOpen, onOpenChange: onOtpVerifyChange } = useDisclosure();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);
  const [fastName, setFastName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [password_confirmation, setPassword_confirmation] = React.useState('');
  const [errors, setErrors] = React.useState({
    phone: '',
    password: '',
    password_confirmation: '',
  });

  const validateForm = () => {
    let isValid = true;
    let errors = {
      fastName: '',
      lastName: '',
      email: '',
      // phone: '',
      password: '',
      password_confirmation: '',
    };

    // Validate phone number length (max 11 digits)
    // if (!phoneNumber) {
    //   errors.phone = 'Phone number is required';
    //   isValid = false;
    // }
    // else if (phoneNumber.length < 13) {
    //   errors.phone = 'Phone number must be at least 11 digits';
    //   isValid = false;
    // }
    // else if (phoneNumber.length > 13) {
    //   errors.phone = 'Phone number cannot exceed 11 digits';
    //   isValid = false;
    // }

    if (!fastName) {
      errors.fastName = 'Fast name is required';
      isValid = false;
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!email) {
      errors.email = 'Email is required';
      isValid = false;
    }

    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }
    if (!password_confirmation) {
      errors.password_confirmation = 'Password confirmation is required';
      isValid = false;
    }
    if (password !== password_confirmation) {
      errors.password_confirmation = 'Passwords do not match';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate form before submitting
    if (validateForm()) {
      // Handle successful form submission here
      // onOtpVerifyOpen();
      // console.log('Form Submitted');
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: `${fastName} ${lastName}`,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
          device_name: 'web'
        }),
      });


      if (res.ok) {
        router.push('/dashboard');
      } else {
        const data = await res.json();
        setError(data.error || 'Login failed');
      }
    }
  };

  return (
    <>
      <div className="flex h-full w-full items-center justify-center">
        <div className="flex gap-40 items-center pt-16 pb-16 sm:w-auto w-[88%] ">
          <div className="hidden sm:block w-[450px] h-[450px]">
            <Image src={SignupImage} alt="Login Image" className="w-full h-full" />
          </div>
          <div className="flex w-full max-w-md flex-col gap-4 rounded-lg border border-gray-200 sm:p-8 p-5 sm:py-10 py-10 sm:m-5 m-0 bg-white">
            <div className="flex flex-col items-center pb-6">
              {/* <AcmeIcon size={60} /> */}
              <p className="text-xl font-medium">Register Account</p>
              <p className="text-small text-default-500">Create your account to continue</p>
            </div>
            <div className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <div className="w-full">
                  <Input
                    color="primary"
                    placeholder="Fast name"
                    type="text"
                    radius="sm"
                    variant="bordered"
                    value={fastName}
                    onChange={(e) => setFastName(e.target.value)}
                  />
                  {errors.fastName && <p className="text-sm text-red-500">{errors.fastName}</p>}
                </div>
                <div className="w-full">
                  <Input
                    color="primary"
                    placeholder="Last name"
                    type="text"
                    radius="sm"
                    variant="bordered"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                </div>
              </div>

              <div className="w-full">
                <Input
                  color="primary"
                  placeholder="Email address"
                  type="email"
                  radius="sm"
                  variant="bordered"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
              </div>

              {/* <PhoneInput
                inputStyle={{
                  width: '100%',
                  height: '40px',
                  border border-gray-200Radius: '8px',
                }}
                buttonStyle={{ border border-gray-200Radius: "8px 0px 0px 8px" }}
                country={'bd'}
                disableDropdown={true}
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
              /> */}
              {/* {errors.phone && <p className="text-sm text-red-500 -mt-4">{errors.phone}</p>} */}

              <Input
                radius="sm"
                endContent={
                  <button type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <Icon
                        className="pointer-events-none text-2xl text-default-400"
                        icon="solar:eye-closed-linear"
                      />
                    ) : (
                      <Icon
                        className="pointer-events-none text-2xl text-default-400"
                        icon="solar:eye-bold"
                      />
                    )}
                  </button>
                }
                color="primary"
                placeholder="Enter your password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <p className="text-sm text-red-500 -mt-4">{errors.password}</p>}

              <Input
                radius="sm"
                endContent={
                  <button type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                      <Icon
                        className="pointer-events-none text-2xl text-default-400"
                        icon="solar:eye-closed-linear"
                      />
                    ) : (
                      <Icon
                        className="pointer-events-none text-2xl text-default-400"
                        icon="solar:eye-bold"
                      />
                    )}
                  </button>
                }
                color="primary"
                placeholder="Confirm password"
                type={isVisible ? "text" : "password"}
                variant="bordered"
                value={password_confirmation}
                onChange={(e) => setPassword_confirmation(e.target.value)}
              />
              {errors.password_confirmation && <p className="text-sm text-red-500 -mt-4">{errors.password_confirmation}</p>}

              <div className="">
                <CheckboxGroup
                  size="sm"
                  color="primary"
                  defaultValue={["become-user"]}
                  // label="Select cities"
                  orientation="horizontal"
                >
                  <Checkbox value="become-user"><p className="mt-1 text-priTextColor">Become a user</p></Checkbox>
                  <Checkbox value="become-house-owner"><p className="mt-1 text-priTextColor">Become a house owner</p></Checkbox>
                </CheckboxGroup>
              </div>

              <Checkbox className="pb-3 pt-2" size="sm" color="primary">
                <div className="mt-1">
                  I agree with the&nbsp;
                  <Link href="#" size="sm" className="text-priColor hover:text-priColor dark:text-violet-400">
                    Terms
                  </Link>
                  &nbsp; and&nbsp;
                  <Link href="#" size="sm" className="text-priColor hover:text-priColor dark:text-violet-400">
                    Privacy Policy
                  </Link>
                </div>
              </Checkbox>
              <ButtonComponent onClick={handleSubmit} buttonClass={"w-full"} buttonText="Sign Up" />
            </div>
            <p className="text-center text-small text-priTextColor">
              Already have an account?&nbsp;
              <Link href="/login" size="sm" className="text-priColor dark:text-violet-400">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
      <OtpVerify
        isOpen={isOtpVerifyOpen}
        onOpenChange={onOtpVerifyChange}

      />
    </>
  );
}