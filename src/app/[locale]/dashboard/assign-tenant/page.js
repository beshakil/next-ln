import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import AssignTenantHome from '../../../../components/Dashboard/Floors/AssignTenantHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AssignTenantHome/>
    </Suspense>
  );
};

export default page;