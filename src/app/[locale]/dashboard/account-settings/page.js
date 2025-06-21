import React, { Suspense } from 'react';
import MyAccountHome from '../../../../components/Dashboard/AccountSettings/MyAccountHome';
import Loading from '../../../../components/Loading';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <MyAccountHome />
        </Suspense>
    );
};

export default page;