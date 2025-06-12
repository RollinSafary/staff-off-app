import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface PasswordFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const passwordSchema = z.string().trim().min(8, 'Password must be at least 8 characters');

const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange, error }) => {
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const result = passwordSchema.safeParse(value);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [value]);

  return (
    <>
      <Input
        type="password"
        placeholder="Password"
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

export default PasswordField;
