import React, { useState, ChangeEvent, useEffect } from 'react';
import { Input } from '../../styles';

interface FirstNameFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

const FirstNameField: React.FC<FirstNameFieldProps> = ({ value = '', onChange }) => {
  const [firstName, setFirstName] = useState(value);

  useEffect(() => {
    onChange(firstName);
  }, [firstName, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  return <Input type="text" placeholder="First Name" value={firstName} onChange={handleChange} />;
};

export default FirstNameField;
