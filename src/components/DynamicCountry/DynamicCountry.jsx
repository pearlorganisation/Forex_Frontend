import React from "react";
import instance from "../../api/api";
import { useDebouncedCallback } from "use-debounce";
import AsyncSelect from "react-select/async";
import { Controller } from "react-hook-form";

const DynamicCountry = ({ data, lbl, control, name, rules, placeholder }) => {

    const countryOption = data?.map((country) => ({
        value: country.Countryname,
        label: (
            <div className="flex items-center space-x-2">
                <img
                    src={country.CountryLogo}
                    alt={country.Countryname}
                    className="w-5 h-5"
                />
                <span>{`${country.Countryname} (${country.CountryCode})`}</span>
            </div>
        ),
    }));
    const loadOptions = async (inputValue) => {
        try {
            const response = await instance.get(
                `/api/Forex/GetCityCountryList?SearchValue=${inputValue}&Type=Country`
            ); // Call API to fetch city list
            console.log(response?.data, "response");
            return response?.data?.map((country) => ({
                value: country.Name,
                label: (
                    <div className="flex items-center space-x-2">
                        <img
                            src={country.CountryLogo}
                            alt={country.Name}
                            className="w-5 h-5"
                        />
                        <span>{`${country.Name} (${country.Code})`}</span>
                    </div>
                ),
            }));
        } catch (error) {
            console.error("Error fetching cities:", error);
            return [];
        }
    };

    return (
        <div className="space-y-1.5">
            <label className="text-sm font-medium">
                {lbl || `Select Country*`}
            </label>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field, fieldState }) => {
                    return <AsyncSelect
                        {...field}
                        loadOptions={loadOptions}
                        defaultOptions={countryOption}
                        placeholder={placeholder || "Search for a city..."}
                        classNamePrefix="react-select"
                    />
                }}
            />

        </div>
    );
};

export default DynamicCountry;
