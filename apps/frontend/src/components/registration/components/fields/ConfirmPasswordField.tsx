import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface ConfirmPasswordFieldProps {
  value?: string;
  originalPassword: string;
  onChange: (value: string, isValid: boolean) => void;
  error?: string;
}

const confirmPasswordSchema = z.string().trim().min(8, 'Password must be at least 8 characters');

const ConfirmPasswordField: React.FC<ConfirmPasswordFieldProps> = ({
  value = '',
  originalPassword,
  onChange,
  error,
}) => {
  const [confirmPassword, setConfirmPassword] = useState(value);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    const result = confirmPasswordSchema.safeParse(confirmPassword);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
      onChange(confirmPassword, false);
    } else if (confirmPassword.trim() !== originalPassword.trim()) {
      setLocalError('Passwords do not match');
      onChange(confirmPassword, false);
    } else {
      setLocalError(null);
      onChange(confirmPassword, true);
    }
  }, [confirmPassword, originalPassword, onChange]);

  return (
    <>
      <Input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ borderColor: error || localError ? 'red' : undefined }}
      />
      {(error || localError) && (
        <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>
      )}
    </>
  );
};

export default ConfirmPasswordField;
