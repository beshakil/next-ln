
import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import StaffRolesHome from '../../../../../components/Dashboard/Staffs/StaffRolesHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <StaffRolesHome />
        </Suspense>
    );
};

export default page;