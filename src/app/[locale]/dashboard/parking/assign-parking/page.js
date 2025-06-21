import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import AssignParkingHome from '../../../../../components/Dashboard/Parking/AssignParkingHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <AssignParkingHome/>
    </Suspense>
  );
};

export default page;