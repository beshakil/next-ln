import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import BuildingDetail from '../../../../../components/Dashboard/Buildings/BuildingDetail';  
import { buildings } from '../../../../../data/buildings';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BuildingDetail buildings={buildings}/>
    </Suspense>
  );
};

export default page;