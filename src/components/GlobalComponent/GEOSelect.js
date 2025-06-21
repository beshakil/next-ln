"use client";

import React, { useEffect, useState } from 'react';
import makeAnimated from 'react-select/animated';

import divisionData from '../../data/geoJson/bd-divisions.json';
import divisionDistrict from '../../data/geoJson/bd-districts.json';
import divisionThana from '../../data/geoJson/bd-upazilas.json';
import dhakaCity from '../../data/geoJson/dhaka-city.json';
import { useTranslations } from "next-intl";
import dynamic from 'next/dynamic';

const Select = dynamic(
    () => import('react-select'),
    { ssr: false }
);


const GEOSelect = () => {
    const [divisions, setDivisions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [thanas, setThanas] = useState([]);
    const [dhakaCities, setDhakaCities] = useState([]);

    const [selectedDivision, setSelectedDivision] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedDhakaCity, setSelectedDhakaCity] = useState(null);

    const [isClearable, setIsClearable] = useState(true);
    const [isSearchable, setIsSearchable] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);
    const t = useTranslations("addEditBuilding");


    const animatedComponents = makeAnimated();

    useEffect(() => {
        if (divisionData && divisionData.divisions && Array.isArray(divisionData.divisions)) {
            const formattedDivisions = divisionData.divisions.map(division => ({
                value: division.id,
                label: `${division.name} (${division.bn_name})`,
            }));
            setDivisions(formattedDivisions);
        }
    }, []);

    useEffect(() => {
        if (selectedDivision) {
            const filteredDistricts = divisionDistrict.districts.filter(district => district.division_id === selectedDivision.value);
            const formattedDistricts = filteredDistricts.map(district => ({
                value: district.id,
                label: `${district.name} (${district.bn_name})`,
            }));
            setDistricts(formattedDistricts);
            setSelectedDistrict(null);
            setThanas([]);
            setDhakaCities([]);
        }
    }, [selectedDivision]);

    useEffect(() => {
        if (selectedDistrict) {
            const filteredThanas = divisionThana.upazilas.filter(thana => thana.district_id === selectedDistrict.value);
            const formattedThanas = filteredThanas.map(thana => ({
                value: thana.id,
                label: `${thana.name} (${thana.bn_name})`,
            }));
            setThanas(formattedThanas);
        }
    }, [selectedDistrict]);

    useEffect(() => {
        if (selectedDivision && selectedDivision.value === "3" && selectedDistrict) {
            const filteredCities = dhakaCity.dhaka.filter(city => city.district_id === selectedDistrict.value);
            const formattedCities = filteredCities.map(city => ({
                value: city.name,
                label: `${city.name} (${city.bn_name})`,
            }));
            setDhakaCities(formattedCities);
        }
    }, [selectedDivision, selectedDistrict]);

    const customStyles = {
        control: (base, state) => ({
            ...base,
            border: state.isFocused ? '2px solid #A1A1A9' : '2px solid #E4E4E7',
            '&:hover': {
                border: state.isFocused ? '2px solid black' : '2px solid #A1A1A9'
            },
            fontSize: '14px',
            cursor: 'pointer',
            borderRadius: '8px',
            borderColor: state.isFocused ? '#A1A1A9' : '#E4E4E7',
            boxShadow: state.isFocused ? 'none' : 'none',
        })
    }

    return (
        <div className="flex sm:flex-row flex-col gap-2">
            <Select
                className="basic-single w-full"
                classNamePrefix="select"
                isClearable={isClearable}
                isSearchable={isSearchable}
                isDisabled={isDisabled}
                name="division"
                options={divisions}
                components={animatedComponents}
                onChange={setSelectedDivision}
                styles={customStyles}
                placeholder={t('selectDivision')}
                menuPlacement="auto"
            />

            <Select
                className="basic-single w-full"
                classNamePrefix="select"
                isDisabled={isDisabled || !selectedDivision}
                isClearable={isClearable}
                isSearchable={isSearchable}
                name="district"
                options={districts}
                components={animatedComponents}
                onChange={setSelectedDistrict}
                placeholder={t('selectDistrict')}
                styles={customStyles}
                menuPlacement="auto"
            />

            {selectedDivision?.value === "3" && selectedDistrict?.value === "1" ?
                <Select
                    className="basic-single w-full"
                    classNamePrefix="select"
                    isDisabled={isDisabled || !selectedDistrict}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                    name="dhaka-city"
                    options={dhakaCities}
                    components={animatedComponents}
                    onChange={setSelectedDhakaCity}
                    placeholder="Select a Dhaka city"
                    styles={customStyles}
                    menuPlacement="auto"
                /> :
                <Select
                    className="basic-single w-full"
                    classNamePrefix="select"
                    isDisabled={isDisabled || !selectedDistrict}
                    isClearable={isClearable}
                    isSearchable={isSearchable}
                    name="thana"
                    options={thanas}
                    components={animatedComponents}
                    placeholder={t('selectThana')}
                    styles={customStyles}
                    menuPlacement="auto"
                />
            }
        </div>
    );
};

export default GEOSelect;
