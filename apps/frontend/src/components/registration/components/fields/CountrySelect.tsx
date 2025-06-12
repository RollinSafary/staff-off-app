import React, { useState, useEffect } from 'react';
import { Select } from '../../styles';
import { z } from 'zod';

interface CountrySelectProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

const countrySchema = z.string().min(1, 'Country is required');

const CountrySelect: React.FC<CountrySelectProps> = ({ options, value = '', onChange, error }) => {
  const [country, setCountry] = useState(value);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    onChange(country);
    const result = countrySchema.safeParse(country);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [country, onChange]);

  return (
    <>
      <Select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        style={{ borderColor: error || localError ? 'red' : undefined }}
      >
        <option value="" disabled>
          Select Country
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </Select>
      {(error || localError) && (
        <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>
      )}
    </>
  );
};

export default CountrySelect;
