
import { Icon } from "@iconify/react";
import NavBarMenuList from "./NavBarMenuList";
import { FaHome } from "react-icons/fa";
import LanguageSwitcherSelect from "../LanguageSwitchSelect";
import Link from "next/link";

export default function NavbarHeader() {

  return (
    <div className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center container mx-auto max-w-7xl h-16">
        <Link href="/" className="flex ms-4 md:me-24 items-center gap-2">
          <FaHome className='text-xl sm:text-2xl -mt-1' />
          <span className="text-xl font-semibold sm:text-2xl dark:text-zinc-200">BariBhara</span>
        </Link>

        <NavBarMenuList />

        <div className="flex items-center gap-2">
          <LanguageSwitcherSelect />
          <Link
            className=" bg-priColor font-medium text-zinc-200 py-1.5 px-4 rounded-lg"
            href="/login"
          >
            <span>Login</span>
          </Link>

          <Link
            className="bg-priColor font-medium text-zinc-200 py-1.5 px-4 rounded-lg"
            href="/dashboard"
          >
            <span>Dashboard</span>

          </Link>
        </div>
      </div>
    </div>
  );
};
