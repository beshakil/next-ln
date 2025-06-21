import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import CreateInvoiceHome from '../../../../components/Dashboard/Invoice/CreateInvoiceHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CreateInvoiceHome/>
    </Suspense>
  );
};

export default page;