import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface EmailFieldProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  showErrors?: boolean;
}

const emailSchema = z.string().trim().email('Please enter a valid email address');

const EmailField: React.FC<EmailFieldProps> = ({ value, onChange, error, showErrors = false }) => {
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const result = emailSchema.safeParse(value);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [value]);

  const shouldShowError = showErrors && (error || localError);

  return (
    <>
      <Input
        type="email"
        placeholder="Email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ borderColor: shouldShowError ? 'red' : undefined }}
      />
      {shouldShowError && <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>}
    </>
  );
};

export default EmailField;
