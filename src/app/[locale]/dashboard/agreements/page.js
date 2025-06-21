import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import AgreementHome from '../../../../components/Dashboard/Agreement/AgreementHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <AgreementHome />
        </Suspense>
    );
};

export default page;