import React from "react";
import styled from "styled-components";

const FormInput = ({ placeholder, type, register, errors }) => {
  return (
    <>
      <Input placeholder={placeholder} type={type} {...register} />
      {errors && <ErrorMessage>{errors.message}</ErrorMessage>}
    </>
  );
};

export default FormInput;

const Input = styled.input`
  background-color: #f3f3f3;
  width: 305px;
  height: 60px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  font-size: 14px;
  padding-left: 10px;

  &::placeholder {
    color: #959595;
  }

  &:focus {
    outline: none;
  }
`;

const ErrorMessage = styled.div`
  color: #ff4545;
  font-size: 12px;
`;
