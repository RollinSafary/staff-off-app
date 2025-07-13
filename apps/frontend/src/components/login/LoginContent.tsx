import React, { useState } from 'react';
import { Button, Wrapper } from '../registration/styles';
import EmailField from '../registration/components/fields/EmailField';
import PasswordField from '../registration/components/fields/PasswordField';
import { IErrors } from '../registration/type';

const LoginContent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<IErrors>({});
  return (
    <Wrapper>
      <EmailField value={email} onChange={setEmail} error={errors.email} />
      <PasswordField value={password} onChange={setPassword} error={errors.password} />
      <Button>Login</Button>
    </Wrapper>
  );
};
export default LoginContent;
