"use client";

import dynamic from 'next/dynamic';
import React from 'react';

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DashboardBarChart = () => {
    const [chartData, setChartData] = React.useState({
        series: [
            {
                name: 'Income',
                data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 40, 51, 45],
            },
            {
                name: 'Expense',
                data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 106, 90, 99],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: true,
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    borderRadius: 5,
                    borderRadiusApplication: 'end',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 4,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            yaxis: {
                title: {
                    text: '৳ (TaKa)',
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: (val) => `৳ ${val} TK`,
                },
            },
        },
    });

    return (
        <div className="py-5 pl-3 bg-white rounded-lg dark:bg-gray-900 mt-5 border border-gray-200">
            <h3 className='text-xl text-priTextColor dark:text-zinc-200 text-center font-bold'>Monthly Incomes / Expenses</h3>
            <Chart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={350}
            />
        </div>
    );
};

export default DashboardBarChart;
