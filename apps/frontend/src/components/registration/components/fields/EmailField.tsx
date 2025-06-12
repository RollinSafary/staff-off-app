import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const emailSchema = z.string().trim().email('Please enter a valid email address');

const EmailField: React.FC<EmailFieldProps> = ({ value, onChange, error }) => {
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const result = emailSchema.safeParse(value);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [value]);

  return (
    <>
      <Input
        type="email"
        placeholder="Email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ borderColor: error || localError ? 'red' : undefined }}
      />
      {(error || localError) && (
        <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>
      )}
    </>
  );
};

export default EmailField;
