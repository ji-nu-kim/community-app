import React from 'react';
import styled from 'styled-components';

interface FormErrorMessageProps {
  errorMessage: string;
}

const ErrorMessageStyle = styled.div`
  padding-left: 5px;
  color: red;
`;

function FormErrorMessage({ errorMessage }: FormErrorMessageProps) {
  return <ErrorMessageStyle>{errorMessage}</ErrorMessageStyle>;
}

export default FormErrorMessage;
