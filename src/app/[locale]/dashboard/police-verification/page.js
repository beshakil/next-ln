import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import TenantsListForPolice from '../../../../components/Dashboard/PoliceVerification/TenantsListForPolice';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <TenantsListForPolice/>
    </Suspense>
  );
};

export default page;