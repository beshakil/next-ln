import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import CreateExpenseHome from '../../../../components/Dashboard/Expense/CreateExpenseHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CreateExpenseHome/>
    </Suspense>
  );
};

export default page;