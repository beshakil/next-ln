import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import HousekeeperHome from '../../../../components/Dashboard/Housekeeper/HousekeeperHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <HousekeeperHome />
        </Suspense>
    );
};

export default page;