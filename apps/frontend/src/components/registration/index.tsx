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
import { IErrors } from './type';
import Header from './components/header';

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
  const [showErrors, setShowErrors] = useState(false);

  const [errors, setErrors] = useState<IErrors>({});

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
      const formattedErrors: IErrors = {};
      const errorFormat = result.error.format();

      for (const key in errorFormat) {
        const errorObj = (errorFormat as any)[key];
        if (errorObj?._errors && errorObj._errors.length > 0) {
          formattedErrors[key as keyof IErrors] = errorObj._errors[0];
        }
      }
      setErrors(formattedErrors);
      setShowErrors(true);

      alert('Please fix validation errors.');
      return;
    }

    setErrors({});
    alert('Form is valid. Submitting...');
  };

  return (
    <Wrapper>
      <Header />
      <StyledForm onSubmit={handleSubmit}>
        <EmailField
          value={email}
          onChange={setEmail}
          error={errors.email}
          showErrors={showErrors}
        />
        <CompanyNameField
          value={companyName}
          onChange={setCompanyName}
          error={errors.companyName}
          showErrors={showErrors}
        />
        <FirstNameField
          value={firstName}
          onChange={setFirstName}
          error={errors.firstName}
          showErrors={showErrors}
        />
        <LastNameField
          value={lastName}
          onChange={setLastName}
          error={errors.lastName}
          showErrors={showErrors}
        />
        <CountrySelect
          options={countries}
          value={country}
          onChange={setCountry}
          error={errors.country}
          showErrors={showErrors}
        />
        <TimezoneSelect
          options={timezones}
          value={timezone}
          onChange={setTimezone}
          error={errors.timezone}
          showErrors={showErrors}
        />
        <PasswordField
          value={password}
          onChange={setPassword}
          error={errors.password}
          showErrors={showErrors}
        />
        <ConfirmPasswordField
          value={confirmPassword}
          originalPassword={password}
          onChange={(val, isValid) => {
            setConfirmPassword(val);
          }}
          error={errors.confirmPassword}
          showErrors={showErrors}
        />

        <CheckBox checked={agreement} onChange={setAgreement} error={errors.agreement} />
        <Button type="submit">Sign Up</Button>
      </StyledForm>
    </Wrapper>
  );
};

export default RegistrationContent;
