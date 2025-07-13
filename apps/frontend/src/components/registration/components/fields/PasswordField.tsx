import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface PasswordFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showErrors?: boolean;
}

const passwordSchema = z.string().trim().min(8, 'Password must be at least 8 characters');

const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  onChange,
  error,
  showErrors = false,
}) => {
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const result = passwordSchema.safeParse(value);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [value]);

  const shouldShowError = showErrors && (error || localError); // 👈 контролируем отображение

  return (
    <>
      <Input
        type="password"
        placeholder="Password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ borderColor: shouldShowError ? 'red' : undefined }}
      />
      {shouldShowError && <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>}
    </>
  );
};

export default PasswordField;
