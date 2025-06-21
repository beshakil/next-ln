import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import ViewInvoiceDetailsHome from '../../../../../components/Dashboard/Invoice/ViewInvoiceDetailsHome';

const invoiceData = [
    { id: 1, invoiceNumber: 'INV-001', tenant: 'John Doe', rentOf: 'April 2025', grandTotal: '1,200', totalDue: '0', status: 'Paid' },
    { id: 2, invoiceNumber: 'INV-002', tenant: 'Jane Smith', rentOf: 'April 2025', grandTotal: '1,500', totalDue: '300', status: 'Partially Paid' },
    { id: 3, invoiceNumber: 'INV-003', tenant: 'Mike Johnson', rentOf: 'March 2025', grandTotal: '1,100', totalDue: '1,100', status: 'Unpaid' },
    { id: 4, invoiceNumber: 'INV-004', tenant: 'Emily Brown', rentOf: 'April 2025', grandTotal: '950', totalDue: '0', status: 'Paid' },
    { id: 5, invoiceNumber: 'INV-005', tenant: 'Chris Evans', rentOf: 'April 2025', grandTotal: '1,300', totalDue: '1,300', status: 'Unpaid' },
    { id: 6, invoiceNumber: 'INV-004', tenant: 'Emily Brown', rentOf: 'April 2025', grandTotal: '950', totalDue: '0', status: 'Paid' },
    { id: 7, invoiceNumber: 'INV-005', tenant: 'Chris Evans', rentOf: 'April 2025', grandTotal: '1,300', totalDue: '1,300', status: 'Unpaid' }
];

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ViewInvoiceDetailsHome invoiceData={invoiceData} />
        </Suspense>
    );
};

export default page;