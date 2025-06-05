import React, { useState, useEffect, ChangeEvent } from 'react';
import { Select } from '../../styles';

interface CountrySelectProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ options, value = '', onChange }) => {
  const [country, setCountry] = useState(value);

  useEffect(() => {
    onChange(country);
  }, [country, onChange]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
  };

  return (
    <Select value={country} onChange={handleChange}>
      <option value="" disabled>
        Select Country
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
};

export default CountrySelect;
