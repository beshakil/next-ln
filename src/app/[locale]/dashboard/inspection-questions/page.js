import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import InspectionQuestionHome from '../../../../components/Dashboard/Inspections/InspectionQuestionHome';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <InspectionQuestionHome />
        </Suspense>
    );
};

export default page;