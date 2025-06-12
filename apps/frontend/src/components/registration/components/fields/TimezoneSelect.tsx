import React, { useState, useEffect } from 'react';
import { Select } from '../../styles';
import { z } from 'zod';

interface TimezoneSelectProps {
  options: { label: string; value: string }[];
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

const timezoneSchema = z.string().min(1, 'Timezone is required');

const TimezoneSelect: React.FC<TimezoneSelectProps> = ({
  options,
  value = '',
  onChange,
  error,
}) => {
  const [timezone, setTimezone] = useState(value);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    onChange(timezone);
    const result = timezoneSchema.safeParse(timezone);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [timezone, onChange]);

  return (
    <>
      <Select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}
        style={{ borderColor: error || localError ? 'red' : undefined }}
      >
        <option value="" disabled>
          Select Timezone
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

export default TimezoneSelect;
