
"use client";

import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const SelectOptionComponent = ({ options, placeholder, menuPlacement, onChange, value }) => {

    const animatedComponents = makeAnimated();
    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    const customStyles = {
        
        control: (base, state) => ({
            ...base,
            border: state.isFocused ? '2px solid #3F51B5' : '2px solid #E4E4E7',
            '&:hover': {
                border: state.isFocused ? '2px solid #3F51B5' : '2px solid #A1A1A9'
            },
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '8px',
            borderColor: state.isFocused ? '#3F51B5' : '#E4E4E7',
            boxShadow: state.isFocused ? 'none' : 'none',
        })
    }

    return (
        <Select
            className="basic-single w-full !z-10"
            classNamePrefix="select"
            isClearable={isClearable}
            isSearchable={isSearchable}
            isDisabled={isDisabled}
            options={options}
            value={value}
            components={animatedComponents}
            styles={customStyles}
            placeholder={<div>{placeholder}</div>}
            menuPlacement={menuPlacement}
            onChange={onChange}
        />
    );
};

export default SelectOptionComponent;