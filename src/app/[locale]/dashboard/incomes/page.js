import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import IncomeListHome from '../../../../components/Dashboard/Income/IncomeListHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <IncomeListHome/>
    </Suspense>
  );
};

export default page;