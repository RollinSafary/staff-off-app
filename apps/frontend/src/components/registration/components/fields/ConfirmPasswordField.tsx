import React, { useState, useEffect, ChangeEvent } from 'react';
import { Input } from '../../styles';

interface ConfirmPasswordFieldProps {
  value?: string;
  originalPassword: string;
  onChange: (value: string, isValid: boolean) => void;
}

const ConfirmPasswordField: React.FC<ConfirmPasswordFieldProps> = ({
  value = '',
  originalPassword,
  onChange,
}) => {
  const [confirmPassword, setConfirmPassword] = useState(value);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    validate(confirmPassword);
  }, [confirmPassword, originalPassword]);

  const validate = (val: string) => {
    if (!val) {
      setError('Please confirm your password');
      onChange(val, false);
    } else if (val !== originalPassword) {
      setError('Passwords do not match');
      onChange(val, false);
    } else {
      setError(null);
      onChange(val, true);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={handleChange}
      />
      {error && <div style={{ color: 'red', fontSize: 12 }}>{error}</div>}
    </>
  );
};

export default ConfirmPasswordField;
