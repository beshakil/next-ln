import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import CreateIncomeHome from '../../../../components/Dashboard/Income/CreateIncomeHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CreateIncomeHome/>
    </Suspense>
  );
};

export default page;