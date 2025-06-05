import React, { ChangeEvent } from 'react';
import { CheckboxLabel } from '../styles';

interface IAgreementCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

const CheckBox: React.FC<IAgreementCheckboxProps> = ({
  checked,
  onChange,
  label = 'I agree to the terms',
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <CheckboxLabel>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
    </CheckboxLabel>
  );
};

export default CheckBox;
