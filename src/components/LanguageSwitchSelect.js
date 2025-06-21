'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTransition, useState } from 'react';
import Image from 'next/image';

import USFlag from '../assets/svg/usaFlag.svg';
import BDFlag from '../assets/svg/bdFlag.svg';

const locales = ['en', 'bn'];

export default function LanguageSwitcherSelect() {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [selectedLocale, setSelectedLocale] = useState(
    pathname.split('/')[1] // get current locale from path
  );

  function handleLocaleChange(locale) {
    if (locale === selectedLocale) return;

    const newPath = pathname.replace(/^\/(en|bn)/, `/${locale}`);
    setSelectedLocale(locale);

    startTransition(() => {
      router.replace(newPath);
    });
  }

  return (
    <div className="flex gap-2">
      {locales
        .filter((locale) => locale === selectedLocale)
        .map((locale) => (
          <button
            key={locale}
            disabled={isPending}
            onClick={() => handleLocaleChange(locale === 'en' ? 'bn' : 'en')} // toggle logic
            className="rounded-full hover:bg-[#EEEEEF] cursor-pointer px-3 py-1 flex gap-2 items-center transition-colors"
          >
            <span className="text-default-500 text-base mt-1">
              {locale.toUpperCase()}
            </span>
            <Image
              src={locale === 'en' ? USFlag : BDFlag}
              alt={locale.toUpperCase()}
              width={20}
              height={20}
            />
          </button>
        ))}
    </div>
  );
}
