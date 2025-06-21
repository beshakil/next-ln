import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import ParkingHistoryHome from '../../../../../components/Dashboard/Parking/ParkingHistoryHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ParkingHistoryHome/>
    </Suspense>
  );
};

export default page;