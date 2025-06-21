import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import ParkingDetailsHome from '../../../../../components/Dashboard/Parking/ParkingDetailsHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ParkingDetailsHome/>
    </Suspense>
  );
};

export default page;