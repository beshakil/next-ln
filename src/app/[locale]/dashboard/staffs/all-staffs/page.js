
import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import StaffsHome from '../../../../../components/Dashboard/Staffs/StaffsHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <StaffsHome />
        </Suspense>
    );
};

export default page;