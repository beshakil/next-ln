"use client";

import React from 'react';
import clsx from "clsx";
import { usePathname } from 'next/navigation';
import { useTranslations } from "next-intl";
import NextLink from "next/link";
import { link as linkStyles } from "@heroui/theme";

const NavBarMenuList = () => {

    const t = useTranslations("TopMenuList");
    const currentPath = usePathname();

    const menuList = [
        { href: "/", label: t("home") },
        { href: "/to-let", label: t("toLet") },
        { href: "/blogs", label: t("blogs") },
        { href: "/about", label: t("aboutUs") },
    ];

    const isActive = (href) => {
        const regex = new RegExp(`^(/\\w+)?${href}$`);
        return regex.test(currentPath);
    };

    return (
        <div className="hidden md:block">
            <ul className="flex gap-4 justify-start ml-2">
                {menuList.map((item) => (
                    <div key={item.href}>
                        <NextLink
                            className={clsx(
                                linkStyles({ color: "foreground" }),
                                isActive(item.href) ? "text-priColor dark:text-purple-300 font-medium" : "text-zinc-600 dark:text-zinc-200",
                            )}
                            href={item.href}
                        >
                            {item.label}
                        </NextLink>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default NavBarMenuList;