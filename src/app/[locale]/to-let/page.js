
import React, { Suspense } from 'react';
import Loading from '../../../components/Loading';
import ToLetPageHome from '../../../components/ToLetPage/ToLetPageHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ToLetPageHome />
    </Suspense>
  );
};

export default page;