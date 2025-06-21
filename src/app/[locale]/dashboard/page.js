import React, { Suspense } from 'react';
import Loading from '../../../components/Loading';
import DashboardHomeMain from '../../../components/Dashboard/DashBoardHome/DashboardHomeMain';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <DashboardHomeMain />
    </Suspense>
  );
};

export default page;