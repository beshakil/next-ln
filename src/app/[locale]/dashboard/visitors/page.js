import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import VisitorsHome from '../../../../components/Dashboard/Visitors/VisitorsHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <VisitorsHome />
        </Suspense>
    );
};

export default page;