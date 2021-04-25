import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LoginLayoutProps {
  children: ReactNode;
}

export const FormContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const MainText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-top: 25vh;
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  & input {
    width: 300px;
    height: 44px;
    border: none;
    border-bottom: 1px solid #000;
    background: transparent;
  }

  & label {
    font-weight: bold;
    color: #777;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .login-btn {
    margin-right: 1rem;
  }
`;

function LoginLayout({ children }: LoginLayoutProps) {
  return <FormContainer>{children}</FormContainer>;
}

export default LoginLayout;
