import React, { useState } from 'react';
import { CheckboxLabel, Input } from '../styles';

export default function CheckBox() {
  const [agreement, setAgreement] = useState(false);

  return (
    <CheckboxLabel>
      <Input type="checkbox" checked={agreement} onChange={() => setAgreement(!agreement)} />
      <span>I agree to the Terms and Conditions</span>
    </CheckboxLabel>
  );
}
