"use client";

import React from "react";
import { Button, Input, Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import PhoneInput from 'react-phone-input-2'
import ButtonComponent from "../GlobalComponent/ButtonComponent";
import LoginImage from "../../assets/svg/login.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {Checkbox} from "@heroui/checkbox";

const LoginForm = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({
    phone: '',
    password: '',
  });

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateForm = () => {
    let isValid = true;
    let errors = {
      phone: '',
      password: '',
    };

    // Validate phone number length (max 11 digits)
    if (!phoneNumber) {
      errors.phone = 'Phone number is required';
      isValid = false;
    }
    else if (phoneNumber.length < 13) {
      errors.phone = 'Phone number must be at least 11 digits';
      isValid = false;
    }
    else if (phoneNumber.length > 13) {
      errors.phone = 'Phone number cannot exceed 11 digits';
      isValid = false;
    }

    // Validate password
    if (!password) {
      errors.password = 'Password is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form before submitting
    if (validateForm()) {
      // Handle successful form submission here
      // console.log('Form Submitted');
    }
  };

  const router = useRouter();

  const handleLogin = async () => {
    // Simulate login API
    const fakeToken = 'demo123';
    setToken(fakeToken);
    router.push('/dashboard');
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex gap-40 items-center pt-16 pb-16 sm:w-auto w-[88%] ">
        <div className="hidden sm:block w-[450px] h-[450px]">
          <Image src={LoginImage} alt="Login Image" className="w-full h-full" />
        </div>
        <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-200 sm:p-8 p-5 sm:py-10 py-10 sm:m-5 m-0 bg-white">
          <div className="flex flex-col items-center pb-6">
            <p className="text-xl font-medium text-priTextColor">Welcome Back</p>
            <p className="text-small text-default-500 secTextColor">Log in to your account to continue</p>
          </div>
          <div className="flex flex-col gap-3">
            {/* Phone Input */}
            <PhoneInput
              inputStyle={{
                width: '100%',
                height: '40px',
                borderRadius: '8px',
              }}
              buttonStyle={{ borderRadius: "8px 0px 0px 8px" }}
              country={'bd'}
              disableDropdown={true}
              // disableCountryCode={true}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
            {errors.phone && <p className="text-sm text-red-500 -mt-2">{errors.phone}</p>}

            {/* Password Input */}
            <Input
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
              name="password"
              placeholder="Enter your password"
              type={isVisible ? "text" : "password"}
              variant="bordered"
              radius="sm"
              size="md"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errors.password && <p className="text-sm text-red-500 -mt-2">{errors.password}</p>}

            <div className="flex text-priTextColor w-full items-center justify-between px-1 py-2">
              <Checkbox name="remember" size="sm" radius="sm" color="primary">
                Remember me
              </Checkbox>
              <Link className="text-priTextColor hover:text-priColor dark:text-violet-400" href="#" size="sm">
                Forgot password?
              </Link>
            </div>
            <ButtonComponent onClick={handleLogin} buttonClass="bg-purple-600 hover:bg-purple-500 w-full" buttonText="Log In" />
            {/* <ButtonComponent onClick={handleSubmit} buttonClass="bg-purple-600 hover:bg-purple-500 w-full" buttonText="Log In" /> */}
          </div>

          <p className="text-center text-small text-priTextColor">
            Need to create an account?&nbsp;
            <Link className="text-priColor dark:text-violet-400" href="/signup" size="sm">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
