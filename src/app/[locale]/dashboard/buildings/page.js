import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import BuildingList from '../../../../components/Dashboard/Buildings/BuildingList';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BuildingList/>
    </Suspense>
  );
};

export default page;