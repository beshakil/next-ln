import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import InspectionsHome from '../../../../components/Dashboard/Inspections/InspectionsHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <InspectionsHome />
        </Suspense>
    );
};

export default page;