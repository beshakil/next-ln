import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import AgreementDetailsHome from '../../../../../components/Dashboard/Agreement/AgreementDetailsHome';

const agreementData = [
    {
        id: 1,
        tenantName: 'Abdul Karim',
        building: 'ABC',
        floor: '1st Floor',
        flat: 'A-3',
        agreementNumber: 'AG-001',
        startDate: '2025-01-01',
        endDate: '2025-12-31',
    },
    {
        id: 2,
        tenantName: 'Rahima Khatun',
        building: 'DEF',
        floor: '2nd Floor',
        flat: 'B-2',
        agreementNumber: 'AG-002',
        startDate: '2025-02-01',
        endDate: '2026-01-31',
    }
];

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <AgreementDetailsHome agreementData={agreementData} />
        </Suspense>
    );
};

export default page;