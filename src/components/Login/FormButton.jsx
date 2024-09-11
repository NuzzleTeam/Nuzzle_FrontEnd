import React from "react";
import styled from "styled-components";

const FormButton = ({ children, onClick, selected }) => {
  return (
    <Button selected={selected} onClick={onClick}>
      {children}
    </Button>
  );
};

export default FormButton;

const Button = styled.button`
  background-color: ${({ selected }) => (selected ? "#FFB1D0" : "#F3F3F3")};
  color: ${({ selected }) => (selected ? "#353535" : "#959595")};
  width: 100px;
  height: 57px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 14px;
`;
