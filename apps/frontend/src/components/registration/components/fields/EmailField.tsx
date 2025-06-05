import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';

interface EmailFieldProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EmailField: React.FC<EmailFieldProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const isValid = emailRegex.test(value);
    setError(isValid || value === '' ? '' : 'Invalid email format');
    onChange(value, isValid);
  }, [value, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, emailRegex.test(e.target.value));
  };

  return (
    <>
      <Input
        type="email"
        placeholder="Email"
        value={value}
        onChange={handleChange}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && <div style={{ color: 'red', fontSize: 12 }}>{error}</div>}
    </>
  );
};

export default EmailField;
