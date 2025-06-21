"use client"
import { GoArrowSwitch } from "react-icons/go";
import { TbMessageDots } from "react-icons/tb";
import { IoSettingsOutline, IoBookmarkOutline } from "react-icons/io5";
import { MdManageHistory, MdOutlineSwitchAccount } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar } from "@heroui/react";
import Image from "next/image";
import userImage from '../../../assets/jpg/userImage.jpeg'
import Link from "next/link";

export default function DashNavProfile() {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <div className="w-12 h-12">
            <Image
              src={userImage}
              alt="user-image"
              width={0} height={0} sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="w-full rounded-full object-cover object-center cursor-pointer border-3 border-priColor"
            />
          </div>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat" className="settingsDropdownMenu">
          <DropdownItem key="profile">
            <div
              className={`top-full w-[240px] divide-y divide-stroke divide-gray-200 overflow-hidden rounded-lg bg-white dark:divide-dark-3 dark:bg-dark-2 border border-gray-200 shadow`}
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="relative aspect-square w-10 rounded-full">
                  <Image
                    width={40}
                    height={40}
                    src={userImage}
                    alt="account"
                    className="w-full rounded-full object-cover object-center"
                  />
                  {/* <span className="absolute -right-0.5 -top-0.5 block h-3.5 w-3.5 rounded-full border-2 border-white bg-green dark:border-dark"></span> */}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark dark:text-white">
                    Andrio Miller
                  </p>
                  <p className="text-sm text-body-color dark:text-dark-6">
                    miller@company.com
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <MdOutlineSwitchAccount className="w-4 h-4" />
                    Account type: <span className="font-bold text-green-600">Owner</span>
                  </span>
                </Link>
                <Link
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <MdManageHistory className="w-4 h-4" />
                    Subscriptions: <span className="font-bold text-green-600">Free</span>
                  </span>
                </Link>
                <Link
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <IoSettingsOutline className="w-4 h-4" />
                    Settings
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <GoArrowSwitch className="w-4 h-4" />
                    Switch account
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <IoBookmarkOutline className="w-4 h-4" />
                    All plans
                  </span>
                </Link>
                <Link
                  href="#0"
                  className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5"
                >
                  <span className="flex items-center gap-2">
                    <TbMessageDots className="w-4 h-4" />
                    Help & Feedback
                  </span>
                </Link>
              </div>
              <div>
                <button className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-medium text-dark hover:bg-boxBgColor dark:text-white dark:hover:bg-white/5">
                  <span className="flex items-center gap-2">
                    <BiLogOut className="w-4 h-4" />
                    Log out
                  </span>
                </button>
              </div>
            </div>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}