import React, { ChangeEvent } from 'react';
import { CheckboxLabel } from '../styles';

interface IAgreementCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  error?: string;
}

const CheckBox: React.FC<IAgreementCheckboxProps> = ({ checked, onChange, label, error }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <>
      <CheckboxLabel>
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <span>{label || 'I agree to the terms and conditions'}</span>
      </CheckboxLabel>
      {error && <div style={{ color: 'red', fontSize: 12 }}>{error}</div>}
    </>
  );
};

export default CheckBox;
