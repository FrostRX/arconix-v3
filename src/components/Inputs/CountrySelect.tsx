/* eslint-disable @next/next/no-img-element */
import Select from "react-select";
import React from "react";
import useCountries from "@/hooks/useCountries";

export type CountrySelectValue = {
  label: string;
  region: string;
  value: string;
};

interface CountrySelectProps {
  onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onChange }) => {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        placeholder="Select your country"
        isClearable
        options={getAll()}
        onChange={(value) => onChange(value as CountrySelectValue)}
        formatOptionLabel={(option: any) => (
          <div className="flex flex-row items-center gap-3">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 rounded-full aspect-[1/1] object-cover"
                src={`https://flagcdn.com/${option.value.toLowerCase()}.svg`}
                alt={`${option.label} flag`}
              />
              <div className=" text-white">
                {option.label},{" "}
                <span className="text-gray-400">{option.region}</span>
              </div>
            </div>
          </div>
        )}
        classNames={{
          valueContainer: () => "text-lg text-white",
          input: () => "text-lg text-white",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 8,
          colors: {
            ...theme.colors,
            neutral0: "#171B2D",
            primary25: "#101323",
            neutral20: "#171B2D",
            // Text colors
            neutral80: "#FFFFFF",
          },
          spacing: {
            ...theme.spacing,
            baseUnit: 4,
            menuGutter: 8,
          },
        })}
      />
    </>
  );
};

export default CountrySelect;
