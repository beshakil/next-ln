import React, { Suspense } from 'react';
import Loading from '../../../../../components/Loading';
import ViewIncomeDetailsHome from '../../../../../components/Dashboard/Income/ViewIncomeDetailsHome';
import ViewInExpenseDetailsHome from '../../../../../components/Dashboard/Expense/ViewInExpenseDetailsHome';

const incomeData = [
    {
        id: 1,
        date: '2025-04-17',
        account: 'Cash in Hand',
        incomeType: 'Rental Income - ভাড়া আয়  ',
        amount: '1000',
        tenant: 'Mizbah',
        building: 'Vai Vai City Complex',
        method: 'Cash',
        relatedInvoice: 'INV-001'
    },
    {
        id: 2,
        date: '2025-04-10',
        account: 'Bank - BDT',
        incomeType: 'Rental Income - ভাড়া আয় ',
        amount: '3000',
        tenant: 'Ahmed',
        building: 'Vai Vai City Complex',
        method: 'Bkash',
        relatedInvoice: 'INV-001'
    },
    {
        id: 3,
        date: '2025-04-17',
        account: 'Cash in Hand',
        incomeType: 'Rental Income - ভাড়া আয়  ',
        amount: '1000',
        tenant: 'Mizbah',
        building: 'Vai Vai City Complex',
        method: 'Cash',
        relatedInvoice: ''
    },
    {
        id: 4,
        date: '2025-04-17',
        account: 'Cash in Hand',
        incomeType: 'Rental Income - ভাড়া আয়  ',
        amount: '1000',
        tenant: 'Mizbah',
        building: 'Vai Vai City Complex',
        method: 'Cash',
        relatedInvoice: ''
    },
    {
        id: 5,
        date: '2025-04-17',
        account: 'Cash in Hand',
        incomeType: 'Rental Income - ভাড়া আয়  ',
        amount: '1000',
        tenant: 'Mizbah',
        building: 'Vai Vai City Complex',
        method: 'Cash',
        relatedInvoice: ''
    },
    {
        id: 6,
        date: '2025-04-17',
        account: 'Cash in Hand',
        incomeType: 'Rental Income - ভাড়া আয়  ',
        amount: '1000',
        tenant: 'Mizbah',
        building: 'Vai Vai City Complex',
        method: 'Cash',
        relatedInvoice: ''
    },
    {
        id: 7,
        date: '2025-04-17',
        account: 'Cash in Hand',
        incomeType: 'Rental Income - ভাড়া আয়  ',
        amount: '1000',
        tenant: 'Mizbah',
        building: 'Vai Vai City Complex',
        method: 'Cash',
        relatedInvoice: ''
    }
];

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <ViewInExpenseDetailsHome expenseData={incomeData} />
        </Suspense>
    );
};

export default page;