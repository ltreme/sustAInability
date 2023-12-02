import React, { useState, useEffect } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export interface Country {
  name: string;
  flag: string;
  region: string;
}

interface CountrySelectorProps {
  onChange: (country: Country | null) => void;
  value: Country | null;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({
  onChange,
  value,
}) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(
          data.map((country: any) => ({
            name: country.name.common,
            flag: country.flags.svg,
            region: country.region,
          }))
        );
      });
  }, []);

  const handleOnChange = (_: React.SyntheticEvent, value: Country | null) => {
    onChange(value);
  };

  return (
    <Autocomplete
      options={countries}
      getOptionLabel={(option: Country) => option.name}
      renderOption={(props, option: Country) => (
        <li {...props}>
          <img
            src={option.flag}
            alt={option.name}
            style={{ width: 24, height: 16, marginRight: 8 }}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {value && (
            <img
              src={value.flag}
              alt={value.name}
              style={{ width: 24, height: 16, marginRight: 8 }}
            />
          )}
          <TextField {...params} label="Select Country" />
        </Box>
      )}
      onChange={handleOnChange}
      value={value}
    />
  );
};

export default CountrySelector;
