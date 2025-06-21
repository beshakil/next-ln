
import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import MechanicsTypeHome from '../../../../../components/Dashboard/Mechanics/MechanicsTypeHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <MechanicsTypeHome />
        </Suspense>
    );
};

export default page;