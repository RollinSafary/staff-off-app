import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface LastNameFieldProps {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  showErrors?: boolean;
}

const lastNameSchema = z.string().trim().min(1, 'Last name is required');

const LastNameField: React.FC<LastNameFieldProps> = ({
  value = '',
  onChange,
  error,
  showErrors = false,
}) => {
  const [lastName, setLastName] = useState(value);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    onChange(lastName);
    const result = lastNameSchema.safeParse(lastName);
    setLocalError(result.success ? null : result.error.errors[0].message);
  }, [lastName, onChange]);

  const shouldShowError = showErrors && (error || localError);

  return (
    <>
      <Input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ borderColor: shouldShowError ? 'red' : undefined }}
      />
      {shouldShowError && <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>}
    </>
  );
};

export default LastNameField;
