import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import TenantsHome from '../../../../components/Dashboard/TenantsList/TenantsHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <TenantsHome/>
    </Suspense>
  );
};

export default page;