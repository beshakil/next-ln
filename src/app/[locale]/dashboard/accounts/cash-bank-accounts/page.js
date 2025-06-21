import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import CashBankHome from '../../../../../components/Dashboard/Accounts/CashBank/CashBankHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CashBankHome/>
    </Suspense>
  );
};

export default page;