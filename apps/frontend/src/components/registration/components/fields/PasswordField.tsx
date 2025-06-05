import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';

interface PasswordFieldProps {
  value: string;
  onChange: (value: string, isValid: boolean) => void;
}

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

const PasswordField: React.FC<PasswordFieldProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const isValid = passwordRegex.test(value);
    setError(
      isValid || value === ''
        ? ''
        : 'Password must be 8+ chars, include uppercase, number and special char'
    );
    onChange(value, isValid);
  }, [value, onChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, passwordRegex.test(e.target.value));
  };

  return (
    <>
      <Input
        type="password"
        placeholder="Password"
        value={value}
        onChange={handleChange}
        style={{ borderColor: error ? 'red' : undefined }}
      />
      {error && <div style={{ color: 'red', fontSize: 12 }}>{error}</div>}
    </>
  );
};

export default PasswordField;
