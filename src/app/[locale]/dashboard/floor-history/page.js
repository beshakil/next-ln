import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import FloorHistoryHome from '../../../../components/Dashboard/Floors/FloorHistoryHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <FloorHistoryHome/>
    </Suspense>
  );
};

export default page;