import React, { useState, useEffect, ChangeEvent } from 'react';
import { Select } from '../../styles';

interface TimezoneSelectProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
}

const TimezoneSelect: React.FC<TimezoneSelectProps> = ({ options, value = '', onChange }) => {
  const [timezone, setTimezone] = useState(value);

  useEffect(() => {
    onChange(timezone);
  }, [timezone, onChange]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTimezone(e.target.value);
  };

  return (
    <Select value={timezone} onChange={handleChange}>
      <option value="" disabled>
        Select Timezone
      </option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Select>
  );
};

export default TimezoneSelect;
