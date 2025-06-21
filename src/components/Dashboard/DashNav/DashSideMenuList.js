"use client";
import React, { useState } from 'react';
import { FaHome, FaParking } from 'react-icons/fa';
import { BsBuildingsFill, BsBuildingFillGear, BsBuildings } from "react-icons/bs";
import { LuSquareParking } from "react-icons/lu";
import { usePathname } from 'next/navigation';
import { IoIosArrowDown, IoIosArrowUp, IoMdSettings } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { useTranslations } from "next-intl";
import { TbBuildingCog, TbFileInvoice, TbMessageDots, TbReport } from "react-icons/tb";
import { FaBuildingUser, FaUserGroup } from "react-icons/fa6";
import { GiPayMoney, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { MdBrowserUpdated, MdOutlineAccountBalance, MdOutlineAddHomeWork, MdOutlineDocumentScanner } from 'react-icons/md';
import { GrVmMaintenance, GrUserWorker, GrUserPolice } from "react-icons/gr";
import { BiSolidCarMechanic } from 'react-icons/bi';
import { IoDocumentLockOutline, IoDocumentsOutline, IoPlayCircleOutline, IoSettingsOutline } from 'react-icons/io5';
import { TiInfoOutline } from "react-icons/ti";
import { HiMiniUserGroup, HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { SiFlatpak } from "react-icons/si";
import Link from 'next/link';

const DashSideMenuList = ({ isOpenMobileMenu }) => {
    const t = useTranslations("DashBoardSideList");
    // const [openSubmenu, setOpenSubmenu] = useState({ floors: false, invoice: false });
    const [openSubmenuFloor, setOpenSubmenuFloor] = useState("");
    const [openSubmenuInvoice, setOpenSubmenuInvoice] = useState("");
    const [openSubmenuIncome, setOpenSubmenuIncome] = useState("");
    const [openSubmenuExpense, setOpenSubmenuExpense] = useState("");
    const [openSubmenuAccount, setOpenSubmenuAccount] = useState("");
    const [openSubmenuStaffs, setOpenSubmenuStaffs] = useState("");
    const [openSubmenuInspections, setOpenSubmenuInspections] = useState("");
    const [openSubmenuParking, setOpenSubmenuParking] = useState("");

    const [openSubmenuAgreement, setOpenSubmenuAgreement] = useState("");

    const [openSubmenuMechanics, setOpenSubmenuMechanics] = useState("");

    const pathname = usePathname();

    const isActive = (basePath) => {
        // Remove locale prefix like /en or /bn
        const cleanedPath = pathname.replace(/^\/(en|bn|fr|es)/, '');

        // Exact match
        if (cleanedPath === basePath) return true;

        // Only match nested routes if they truly belong under basePath
        return cleanedPath.startsWith(`${basePath}/`);
    };

    return (
        <div className={`${isOpenMobileMenu ? 'px-0' : 'px-5'} hh-full h-[calc(100%-50px)] pb-4 overflow-y-auto bg-white dark:bg-gray-800`}>
            <h3 className='my-4 text-sm leading-[20px] text-secTextColor'>Menu</h3>

            <Link href='/dashboard' className={`flex text-[15px] h-8 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard') && !isActive('/dashboard/buildings') && !isActive('/dashboard/floor-details') && !isActive('/dashboard/assign-tenant') && !isActive('/dashboard/floor-history') && !isActive('/dashboard/create-invoice') && !isActive('/dashboard/invoices') && !isActive('/dashboard/tenants') && !isActive('/dashboard/incomes') && !isActive('/dashboard/add-income') && !isActive('/dashboard/expenses') && !isActive('/dashboard/add-expense') && !isActive('/dashboard/accounts') && !isActive('/dashboard/police-verification') && !isActive('/dashboard/maintenance') && !isActive('/dashboard/staffs/all-staffs') && !isActive('/dashboard/staffs/staff-roles') && !isActive('/dashboard/mechanics/all-mechanics') && !isActive('/dashboard/mechanics/mechanic-type') && !isActive('/dashboard/housekeeper') && !isActive('/dashboard/visitors') && !isActive('/dashboard/agreements') && !isActive('/dashboard/agreements-condition') && !isActive('/dashboard/inspection-questions') && !isActive('/dashboard/inspections') && !isActive('/dashboard/to-let') && !isActive('/dashboard/parking') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <RxDashboard /> <span className='mt-1'>{t("dashboard")}</span>
            </Link>

            <Link href='/dashboard/buildings' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/buildings') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <HiOutlineBuildingOffice2 className='text-lg' /> <span className='mt-1.5 -ml-0.5'>{t("buildings")}</span>
            </Link>

            <div>
                <div onClick={() => setOpenSubmenuFloor(!openSubmenuFloor)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/floor-details') || isActive('/dashboard/assign-tenant') || isActive('/dashboard/floor-history') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <TbBuildingCog className='text-lg' /> <span className='mt-1'>{t("floors")}</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuFloor ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuFloor &&
                    <>
                        <Link href='/dashboard/floor-details' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/floor-details') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>{t("floorDetails")}</span>
                        </Link>
                        <Link href='/dashboard/assign-tenant' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/assign-tenant') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>{t("assignTenant")}</span>
                        </Link>
                        <Link href='/dashboard/floor-history' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/floor-history') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>{t("floorHistory")}</span>
                        </Link>
                    </>
                }
            </div>

            <Link href='/dashboard/tenants' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/tenants') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <FaBuildingUser className='text-lg' /> <span className='mt-1.5'>Tenants</span>
            </Link>

            <div>
                <div onClick={() => setOpenSubmenuParking(!openSubmenuParking)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/parking/parking-slots') || isActive('/dashboard/parking/assign-parking') || isActive('/dashboard/parking/parking-history') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <LuSquareParking className='text-lg' /> <span className='mt-1'>Parking</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuParking ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuParking &&
                    <>
                        <Link href='/dashboard/parking/parking-slots' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/parking/parking-slots') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>Parking Slots</span>
                        </Link>
                        <Link href='/dashboard/parking/assign-parking' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/parking/assign-parking') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>Assign Parking</span>
                        </Link>
                        <Link href='/dashboard/parking/parking-history' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/parking/parking-history') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>Parking History</span>
                        </Link>
                    </>
                }
            </div>

            <Link href='#' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/to-let') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <MdOutlineAddHomeWork className='text-lg'/> <span className='mt-1'>To-let</span>
            </Link>

            <h3 className='my-4 ml-0 text-sm leading-[20px] text-secTextColor'>Finance</h3>
            <div>
                <div onClick={() => setOpenSubmenuInvoice(!openSubmenuInvoice)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/create-invoice') || isActive('/dashboard/invoices') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <TbFileInvoice /> <span className='mt-1.5'>Invoices</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuInvoice ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuInvoice &&
                    <>
                        <Link href='/dashboard/create-invoice' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/create-invoice') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Create invoice</span>
                        </Link>
                        <Link href='/dashboard/invoices' className={`mt-1 flex h-8 text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/invoices') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Invoice list</span>
                        </Link>
                    </>
                }
            </div>

            <div>
                <div onClick={() => setOpenSubmenuIncome(!openSubmenuIncome)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/incomes') || isActive('/dashboard/add-income') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <GiReceiveMoney /> <span className='mt-1'>Incomes</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuIncome ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuIncome &&
                    <>
                        <Link href='/dashboard/incomes' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/incomes') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>All incomes</span>
                        </Link>
                        <Link href='/dashboard/add-income' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/add-income') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Add Income</span>
                        </Link>
                    </>
                }
            </div>

            <div>
                <div onClick={() => setOpenSubmenuExpense(!openSubmenuExpense)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/expenses') || isActive('/dashboard/add-expense') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <GiPayMoney className='text-base mt-1' /> <span className='mt-1'>Expenses</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuExpense ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuExpense &&
                    <>
                        <Link href='/dashboard/expenses' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/expenses') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>All expenses</span>
                        </Link>
                        <Link href='/dashboard/add-expense' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/add-expense') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1.5'>Add expense</span>
                        </Link>
                    </>
                }
            </div>

            <div>
                <div onClick={() => setOpenSubmenuAccount(!openSubmenuAccount)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/accounts') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <MdOutlineAccountBalance className='text-base mt-1' /> <span className='mt-1'>Accounts</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuAccount ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuAccount &&
                    <>
                        <Link href='/dashboard/accounts/cash-bank-accounts' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/accounts/cash-bank-accounts') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Cash & Bank</span>
                        </Link>
                        <Link href='/dashboard/accounts/outloan-accounts' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/accounts/outloan-accounts') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Outloan account</span>
                        </Link>
                        {/* <Link href='/dashboard/add-expense' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/add-expense') ? 'bg-boxBgColor text-priColor' : ''}`}>
                                <span className='mt-1.5'>Outloan account</span>
                            </Link>
                            <Link href='/dashboard/add-expense' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/add-expense') ? 'bg-boxBgColor text-priColor' : ''}`}>
                                <span className='mt-1.5'>Special Account</span>
                            </Link>
                            <Link href='/dashboard/add-expense' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/add-expense') ? 'bg-boxBgColor text-priColor' : ''}`}>
                                <span className='mt-1.5'>A/C to A/C Transfer</span>
                            </Link> */}
                    </>
                }
            </div>

            <h3 className='my-4 ml-0 text-sm leading-[20px] text-secTextColor'>Services</h3>

            <Link href='/dashboard/police-verification' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/police-verification') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <GrUserPolice className='' /> <span className='mt-1'>Police verification</span>
            </Link>

            <Link href='/dashboard/maintenance' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/maintenance') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <GrVmMaintenance className='mt-0.5' /> <span className='mt-1'>Maintenance</span>
            </Link>


            <div>
                <div onClick={() => setOpenSubmenuStaffs(!openSubmenuStaffs)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/staffs/all-staffs') || isActive('/dashboard/staffs/staff-roles') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <GrUserWorker className='text-base mt-0.5' /> <span className='mt-1'>Staffs</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuStaffs ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuStaffs &&
                    <>
                        <Link href='/dashboard/staffs/all-staffs' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/staffs/all-staffs') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>All Staffs</span>
                        </Link>
                        <Link href='/dashboard/staffs/staff-roles' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/staffs/staff-roles') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Staff roles</span>
                        </Link>
                    </>
                }
            </div>

            <Link href='/dashboard/housekeeper' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/housekeeper') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <FaUserGroup className='mt-0.5' /> <span className='mt-1'>Housekeeper</span>
            </Link>

            <div>
                <div onClick={() => setOpenSubmenuMechanics(!openSubmenuMechanics)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/mechanics/all-mechanics') || isActive('/dashboard/mechanics/mechanic-type') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <BiSolidCarMechanic className='text-base mt-0.5' /> <span className='mt-1'>Mechanics</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuMechanics ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuMechanics &&
                    <>
                        <Link href='/dashboard/mechanics/all-mechanics' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/mechanics/all-mechanics') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>All Mechanics</span>
                        </Link>
                        <Link href='/dashboard/mechanics/mechanic-type' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/mechanics/mechanic-type') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Mechanic type</span>
                        </Link>
                    </>
                }
            </div>

            <Link href='/dashboard/visitors' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/visitors') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <HiMiniUserGroup className='text-[17px]' /> <span className='mt-1'>Visitors</span>
            </Link>
            <Link href='/dashboard/visitors' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/visitors') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <TbMessageDots className='text-[17px]' /> <span className='mt-1'>SMS</span>
            </Link>
            <Link href='/dashboard/visitors' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/visitors') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <TbReport className='text-[17px]' /> <span className='mt-1'>Reports</span>
            </Link>

            <h3 className='my-4 ml-0 text-sm leading-[20px] text-secTextColor'>Others</h3>

            <div>
                <div onClick={() => setOpenSubmenuAgreement(!openSubmenuAgreement)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/agreements') || isActive('/dashboard/agreements-condition') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <IoDocumentLockOutline className='text-base mt-0.5' /> <span className='mt-1'>Agreements</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuAgreement ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuAgreement &&
                    <>
                        <Link href='/dashboard/agreements' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/agreements') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Agreement list</span>
                        </Link>
                        <Link href='/dashboard/agreements-condition' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/agreements-condition') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>All conditions</span>
                        </Link>
                    </>
                }
            </div>

            <div>
                <div onClick={() => setOpenSubmenuInspections(!openSubmenuInspections)} className={`mt-1 h-8 flex text-[15px] cursor-pointer justify-between items-center hover:opacity-100 px-4 pt-0.5 pb-1 hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/inspections') || isActive('/dashboard/inspection-questions') ? 'bg-boxBgColor text-priColor' : 'text-priTextColor'}`}>
                    <div className={`flex gap-3 items-center`}>
                        <TiInfoOutline className='text-base mt-0.5' /> <span className='mt-1'>Inspections</span>
                    </div>
                    <div className='mr-1'>
                        {openSubmenuInspections ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                {
                    openSubmenuInspections &&
                    <>
                        <Link href='/dashboard/inspections' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/inspections') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Inspections list</span>
                        </Link>
                        <Link href='/dashboard/inspection-questions' className={`mt-1 h-8 flex text-[15px] ml-10 cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/inspection-questions') ? 'bg-boxBgColor text-priColor' : ''}`}>
                            <span className='mt-1'>Add questions</span>
                        </Link>
                    </>
                }
            </div>
            <Link href='/dashboard/visitors' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/visitors') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <SiFlatpak className='text-[17px]' /> <span className='mt-1'>Flat sale</span>
            </Link>
            <Link href='/dashboard/visitors' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/visitors') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <IoDocumentsOutline className='text-[17px]' /> <span className='mt-1'>Document manager</span>
            </Link>

            <h3 className='my-4 ml-0 text-sm leading-[20px] text-secTextColor'>Settings</h3>
            
            <Link href='/dashboard/account-settings' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/account-settings') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <IoSettingsOutline className='mt-0.5' /> <span className='mt-1'>Account settings</span>
            </Link>
            <Link href='/dashboard/account-settings' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('/dashboard/account-settings') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <GiTakeMyMoney className='mt-0.5' /> <span className='mt-1'>Budget management</span>
            </Link>
            <Link href='#' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('#') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <MdBrowserUpdated className='mt-0.5' /> <span className='mt-1'>System development</span>
            </Link>
            <Link href='#' className={`mt-1 h-8 flex text-[15px] cursor-pointer items-center gap-3 hover:opacity-100 px-4 pt-0.5 pb-1 text-priTextColor hover:text-priColor rounded-lg dark:text-zinc-200 hover:bg-boxBgColor dark:hover:bg-gray-700 group ${isActive('#') ? 'bg-boxBgColor text-priColor' : ''}`}>
                <IoPlayCircleOutline className='mt-0.5' /> <span className='mt-1'>Tutorial</span>
            </Link>

        </div>
    );
};

export default DashSideMenuList;