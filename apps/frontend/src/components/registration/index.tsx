import React, { useState } from 'react';
import FormInput from './components/FormInput';
import { Button, CheckboxLabel, StyledForm, Wrapper } from './styles';
import FormSelect from './components/FormSelect';
import { countries, timezones } from './data/mock';
import CheckBox from './components/CheckBox';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const RegistrationContent: React.FC = () => {
  const [agreement, setAgreement] = useState(false);

  return (
    <Container>
      <Wrapper>
        <StyledForm>
          <FormInput type="email" placeholder="Email" />
          <FormInput type="text" placeholder="Company Name" />
          <FormInput type="text" placeholder="First Name" />
          <FormInput type="text" placeholder="Last Name" />
          <FormSelect options={countries} placeholder="Select Country" />
          <FormSelect options={timezones} placeholder="Select Timezone" />
          <FormInput type="password" placeholder="Password" />
          <FormInput type="password" placeholder="Confirm Password" />

          <CheckBox />
          <Button disabled={!agreement}>Sign Up</Button>
        </StyledForm>
      </Wrapper>
    </Container>
  );
};

export default RegistrationContent;
