import React, { useState } from 'react';

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

const RegistrationContent: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);

  const [companyName, setCompanyName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [country, setCountry] = useState('');
  const [timezone, setTimezone] = useState('');

  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const [agreement, setAgreement] = useState(false);

  const isFormValid = isEmailValid && isPasswordValid && isConfirmPasswordValid && agreement;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fix errors and accept the agreement.');
      return;
    }
    alert('Form submitted!');
    // your submit logic here
  };

  return (
    <Wrapper>
      <StyledForm onSubmit={handleSubmit}>
        <EmailField
          value={email}
          onChange={(val, valid) => {
            setEmail(val);
            setIsEmailValid(valid);
          }}
        />
        <CompanyNameField value={companyName} onChange={setCompanyName} />
        <FirstNameField value={firstName} onChange={setFirstName} />
        <LastNameField value={lastName} onChange={setLastName} />
        <CountrySelect options={countries} value={country} onChange={setCountry} />
        <TimezoneSelect options={timezones} value={timezone} onChange={setTimezone} />
        <PasswordField
          value={password}
          onChange={(val, valid) => {
            setPassword(val);
            setIsPasswordValid(valid);
          }}
        />
        <ConfirmPasswordField
          value={confirmPassword}
          originalPassword={password}
          onChange={(val, valid) => {
            setConfirmPassword(val);
            setIsConfirmPasswordValid(valid);
          }}
        />
        <CheckBox checked={agreement} onChange={setAgreement} />
        <Button type="submit" disabled={!isFormValid}>
          Sign Up
        </Button>
      </StyledForm>
    </Wrapper>
  );
};

export default RegistrationContent;
