import React from 'react';
import { Input } from '../styles';

interface InputProps {
  type: string;
  placeholder: string;
}

const FormInput: React.FC<InputProps> = ({ type, placeholder }) => {
  return <Input type={type} placeholder={placeholder} />;
};

export default FormInput;
