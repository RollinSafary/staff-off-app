import styled from 'styled-components';
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  gap: 8px;

  @media (max-width: 600px) {
    padding: 15px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.08);
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 10px 0;
`;

export const Button = styled.button`
  padding: 12px;
  background-color: rgb(179, 0, 255);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 10px;
  }
`;
