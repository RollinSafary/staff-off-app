import React, { useState } from 'react';
import { registrationSchema } from './validation/schema';
import { countries, timezones } from './data/mock';
import EmailField from './components/fields/EmailField';
import CompanyNameField from './components/fields/CompanyNameField';
import FirstNameField from './components/fields/FirstNameField';
import LastNameField from './components/fields/LastNameField';
import CountrySelect from './components/fields/CountrySelect';
import TimezoneSelect from './components/fields/TimezoneSelect';
import PasswordField from './components/fields/PasswordField';
import ConfirmPasswordField from './components/fields/ConfirmPasswordField';
import CheckBox from './components/CheckBox';
import { Button, StyledForm, Wrapper } from './styles';

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
  companyName?: string;
  country?: string;
  timezone?: string;
  agreement?: string;
};

const RegistrationContent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreement, setAgreement] = useState(false);

  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email,
      password,
      confirmPassword,
      firstName,
      lastName,
      companyName,
      country,
      timezone,
      agreement,
    };

    const result = registrationSchema.safeParse(formData);

    if (!result.success) {
      // Форматируем ошибки для удобного показа
      const formattedErrors: Errors = {};
      const errorFormat = result.error.format();

      for (const key in errorFormat) {
        const errorObj = (errorFormat as any)[key];
        if (errorObj?._errors && errorObj._errors.length > 0) {
          formattedErrors[key as keyof Errors] = errorObj._errors[0];
        }
      }
      setErrors(formattedErrors);
      alert('Please fix validation errors.');
      return;
    }

    setErrors({});
    alert('Form is valid. Submitting...');
    // тут твоя логика отправки формы
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <EmailField value={email} onChange={setEmail} error={errors.email} />
        <CompanyNameField
          value={companyName}
          onChange={setCompanyName}
          error={errors.companyName}
        />
        <FirstNameField value={firstName} onChange={setFirstName} error={errors.firstName} />
        <LastNameField value={lastName} onChange={setLastName} error={errors.lastName} />
        <CountrySelect
          options={countries}
          value={country}
          onChange={setCountry}
          error={errors.country}
        />
        <TimezoneSelect
          options={timezones}
          value={timezone}
          onChange={setTimezone}
          error={errors.timezone}
        />
        <PasswordField value={password} onChange={setPassword} error={errors.password} />
        <ConfirmPasswordField
          value={confirmPassword}
          originalPassword={password}
          onChange={(val, valid) => setConfirmPassword(val)}
          error={errors.confirmPassword}
        />
        <CheckBox checked={agreement} onChange={setAgreement} error={errors.agreement} />
        <Button type="submit">Sign Up</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default RegistrationContent;
