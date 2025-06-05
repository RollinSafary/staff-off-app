import React, { useState, ChangeEvent, useEffect } from 'react';
import { Input } from '../../styles';

interface CompanyNameFieldProps {
  value?: string;
  onChange: (value: string) => void;
}

const CompanyNameField: React.FC<CompanyNameFieldProps> = ({ value = '', onChange }) => {
  const [companyName, setCompanyName] = useState(value);

  useEffect(() => {
    onChange(companyName);
  }, [companyName, onChange]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  return (
    <Input type="text" placeholder="Company Name" value={companyName} onChange={handleChange} />
  );
};

export default CompanyNameField;
