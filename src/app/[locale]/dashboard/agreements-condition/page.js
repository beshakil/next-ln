import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import AgreementConditionHome from '../../../../components/Dashboard/Agreement/AgreementConditionHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <AgreementConditionHome />
        </Suspense>
    );
};

export default page;