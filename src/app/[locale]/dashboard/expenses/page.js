import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import ExpenseListHome from '../../../../components/Dashboard/expense/ExpenseListHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ExpenseListHome/>
    </Suspense>
  );
};

export default page;