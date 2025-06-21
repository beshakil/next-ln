import React, { Suspense } from 'react';
import { toLetData } from '../../../../data/toLets';
import ToLetDetailsHome from '../../../../components/ToLetPage/ToLetDetailsHome';
import Loading from '../../../../components/Loading';

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ToLetDetailsHome toLetData={toLetData} />
        </Suspense>
    );
};

export default page;