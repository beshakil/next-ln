import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import OutLoanHome from '../../../../../components/Dashboard/Accounts/OutLoan/OutLoanHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <OutLoanHome/>
    </Suspense>
  );
};

export default page;