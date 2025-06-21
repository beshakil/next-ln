import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import MaintenanceHome from '../../../../components/Dashboard/Maintenance/MaintenanceHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <MaintenanceHome />
        </Suspense>
    );
};

export default page;