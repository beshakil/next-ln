"use client";

import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { IoCalendarNumberOutline } from 'react-icons/io5';
import { IoMdCloseCircle, IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { getYear, getMonth } from "date-fns";

const range = (start, end, step = 1) => {
    let output = [];
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

const CalenderComponent = ({ selectedDate, setSelectedDate, showTimeInput, placeholderText, popperPlacement }) => {
    const datePickerRef = useRef(null);

    const [years, setYears] = useState([]);

    useEffect(() => {
        const currentYear = getYear(new Date());
        setYears(range(2000, currentYear + 1));
    }, []);

    const handleCalendarOpen = () => {
        if (datePickerRef.current) {
            datePickerRef.current.setOpen(true);
        }
    };

    const handleClearDate = () => {
        setSelectedDate(null);
    };

    if (years.length === 0) {
        return null; // or some loading spinner if you want
    }

    return (
        <div className='w-full relative'>
            <DatePicker
                ref={datePickerRef}
                className='w-full text-sm shadow-sm h-10 border border-gray-200-2 border border-gray-200-[#E4E4E7] hover:border border-gray-200-[#A1A1AA] rounded-lg px-2 py-1 focus:outline-none focus:border border-gray-200-priColor placeholder:text-[#71717A]'
                toggleCalendarOnIconClick
                dateFormat={showTimeInput ? "dd/MM/yyyy h:mm aa" : "dd/MM/yyyy"}
                placeholderText={placeholderText}
                popperPlacement={popperPlacement}
                showTimeInput={showTimeInput}
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dayClassName={(date) => {
                    const isToday = date.toDateString() === new Date().toDateString();
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

                    if (isSelected) {
                        return "!bg-priColor !text-white !rounded-md";
                    }
                    if (isToday) {
                        return "!bg-[#BAD9F1] !text-black !rounded-md";
                    }
                    return undefined;
                }}
                renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
                    <div className='!m-[10px] !flex !justify-center !gap-[10px] !items-center'>
                        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                            <IoIosArrowDropleftCircle className='text-priColor text-2xl' />
                        </button>

                        <select
                            className='text-sm p-1 border border-gray-200-2 border border-gray-200-[#E4E4E7] hover:border border-gray-200-[#A1A1AA] rounded-md focus:outline-none focus:border border-gray-200-priColor'
                            value={getYear(date)}
                            onChange={({ target: { value } }) => changeYear(Number(value))}
                        >
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>

                        <select
                            className='text-sm p-1 border border-gray-200-2 border border-gray-200-[#E4E4E7] hover:border border-gray-200-[#A1A1AA] rounded-md focus:outline-none focus:border border-gray-200-priColor'
                            value={months[getMonth(date)]}
                            onChange={({ target: { value } }) =>
                                changeMonth(months.indexOf(value))
                            }
                        >
                            {months.map((month) => (
                                <option key={month} value={month}>
                                    {month}
                                </option>
                            ))}
                        </select>

                        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            <IoIosArrowDroprightCircle className='text-priColor text-2xl' />
                        </button>
                    </div>
                )}
            />
            <div>
                {selectedDate && (
                    <IoMdCloseCircle
                        onClick={handleClearDate}
                        className="absolute top-2.5 right-10 text-danger text-xl cursor-pointer"
                    />
                )}
                <IoCalendarNumberOutline
                    onClick={handleCalendarOpen}
                    className="absolute top-2.5 right-3 text-priColor text-xl cursor-pointer"
                />
            </div>
        </div>
    );
};

export default CalenderComponent;
