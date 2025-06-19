'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

const locales = ['en', 'bn'];

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const currentLocale = pathname.split('/')[1];

    const handleLocaleChange = (e) => {
        const newLocale = e.target.value;

        const newPathname = pathname.replace(/^\/(en|bn)/, `/${newLocale}`);

        startTransition(() => {
            // router.push triggers proper client navigation
            router.push(newPathname);
        });
    };

    return (
        <select
            onChange={handleLocaleChange}
            disabled={isPending}
            defaultValue={currentLocale}
            className="border p-1 rounded"
        >
            {locales.map((loc) => (
                <option key={loc} value={loc}>
                    {loc === 'en' ? 'English' : 'বাংলা'}
                </option>
            ))}
        </select>
    );
}
