import React, { useState } from 'react';
import { Input } from '../styles';
import { SelectProps } from '../types';

const FormSelect: React.FC<SelectProps> = ({ options, placeholder }) => {
  const [value, setValue] = useState('');
  const datalistId = `datalist-${placeholder.replace(/\s+/g, '-')}`;

  return (
    <>
      <Input
        list={datalistId}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <datalist id={datalistId}>
        {options.map((option) => (
          <option key={option} value={option} />
        ))}
      </datalist>
    </>
  );
};

export default FormSelect;
