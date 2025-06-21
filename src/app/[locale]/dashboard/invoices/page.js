import React, { Suspense } from 'react';
import Loading from '../../../../components/Loading';
import InvoiceListHome from '../../../../components/Dashboard/Invoice/InvoiceListHome';

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <InvoiceListHome/>
    </Suspense>
  );
};

export default page;