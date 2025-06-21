import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import { tenantsData } from '../../../../../data/tenants';
import TenantDetails from '../../../../../components/Dashboard/TenantsList/TenantDetails';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <TenantDetails tenantsData={tenantsData}/>
    </Suspense>
  );
};

export default page;