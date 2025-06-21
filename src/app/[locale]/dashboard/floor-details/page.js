import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import FloorsDetailsHome from '../../../../components/Dashboard/Floors/FloorsDetailsHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FloorsDetailsHome/>
    </Suspense>
  );
};

export default page;