import React, { useState, useEffect } from 'react';
import { Input } from '../../styles';
import { z } from 'zod';

interface Props {
  value?: string;
  onChange: (value: string) => void;
  error?: string;
  showErrors?: boolean; // 👈 новый проп для управления отображением ошибок
}

const companyNameSchema = z.string().trim().min(1, 'Company name is required');

const CompanyNameField: React.FC<Props> = ({ value = '', onChange, error, showErrors = false }) => {
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

  const shouldShowError = showErrors && (error || localError); // 👈 показываем ошибку только если showErrors === true

  return (
    <>
      <Input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        style={{ borderColor: shouldShowError ? 'red' : undefined }}
      />
      {shouldShowError && <div style={{ color: 'red', fontSize: 12 }}>{error || localError}</div>}
    </>
  );
};

export default CompanyNameField;
