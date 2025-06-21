
import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import MechanicsHome from '../../../../../components/Dashboard/Mechanics/MechanicsHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <MechanicsHome />
        </Suspense>
    );
};

export default page;