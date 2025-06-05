import React, { useState, ChangeEvent, useEffect } from 'react';
import { Input } from '../../styles';

interface LastNameFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

const LastNameField: React.FC<LastNameFieldProps> = ({ value = '', onChange }) => {
  const [lastName, setLastName] = useState(value);

  useEffect(() => {
    onChange(lastName);
  }, [lastName, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return <Input type="text" placeholder="Last Name" value={lastName} onChange={handleChange} />;
};

export default LastNameField;
