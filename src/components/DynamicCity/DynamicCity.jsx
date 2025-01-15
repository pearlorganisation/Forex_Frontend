import React from "react";
import { Controller } from "react-hook-form";
import instance from "../../api/api";
import AsyncSelect from "react-select/async";

const DynamicCity = ({ data, lbl, control, name, rules }) => {
  const cityOptions = data?.cityLists?.map((city) => ({
    value: city.Cityname,
    label: city.Cityname,
  }));

  const loadOptions = async (inputValue) => {
    try {
      const response = await instance.get(
        `/api/Forex/GetCityCountryList?SearchValue=${inputValue}&Type=City`
      );
      return response?.data?.map((city) => {
        return {
          value: city?.Name,
          label: city?.Name,
        };
      });
    } catch (error) {
      console.error("Error fetching cities:", error);
      return [];
    }
  };



  return (
    <div className="space-y-1.5">
      <label className="text-sm font-medium">
        {lbl || `Select City*`}
      </label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <>
            <AsyncSelect
              {...field}
              loadOptions={loadOptions}
              defaultOptions={cityOptions}
              placeholder={data?.citywatermark || "Search for a city..."}
              classNamePrefix="react-select"

            />
            {/* {fieldState?.error && (
              <p className="text-red-500 text-xs">{fieldState?.error?.message}</p>
            )} */}
          </>
        )}
      />
    </div>
  );
};

export default DynamicCity;
