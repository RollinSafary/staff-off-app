import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface FirstNameFieldProps {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  showErrors?: boolean; // 👈 добавляем флаг
}

const firstNameSchema = z.string().trim().min(1, 'First name is required');

const FirstNameField: React.FC<FirstNameFieldProps> = ({
  value = '',
  onChange,
  error,
  showErrors = false,
}) => {
  const [firstName, setFirstName] = useState(value);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    onChange(firstName);
    const result = firstNameSchema.safeParse(firstName);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [firstName, onChange]);

  const shouldShowError = showErrors && (error || localError);

  return (
    <>
      <Input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ borderColor: shouldShowError ? 'red' : undefined }}
      />
      {shouldShowError && <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>}
    </>
  );
};
export default FirstNameField;
