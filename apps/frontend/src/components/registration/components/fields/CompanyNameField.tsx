import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface CompanyNameFieldProps {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
}

const companyNameSchema = z.string().trim().min(1, 'Company name is required');

const CompanyNameField: React.FC<CompanyNameFieldProps> = ({ value = '', onChange, error }) => {
  const [companyName, setCompanyName] = useState(value);
  const [localError, setLocalError] = useState<string | null>(null);

  useEffect(() => {
    onChange(companyName);
    const result = companyNameSchema.safeParse(companyName);
    if (!result.success) {
      setLocalError(result.error.errors[0].message);
    } else {
      setLocalError(null);
    }
  }, [companyName, onChange]);

  return (
    <>
      <Input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        style={{ borderColor: error || localError ? 'red' : undefined }}
      />
      {(error || localError) && (
        <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>
      )}
    </>
  );
};

export default CompanyNameField;
