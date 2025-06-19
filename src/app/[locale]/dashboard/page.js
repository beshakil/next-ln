import { useTranslations } from 'next-intl';
import React from 'react'

export default function Dashboard() {
    const t = useTranslations('Dashboard');
    return (
        <div className='text-2xl font-bold text-center mt-10'>{t('title')}</div>
    )
}
