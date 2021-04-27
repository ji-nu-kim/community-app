import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SignUpLayoutProps {
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

  label {
    font-weight: bold;
    color: #777;
  }
`;

export const MainText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(to right, #fbcac9, #8ca6ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

export const ProfileImgContainer = styled.div`
  width: 300px;
  margin-bottom: 1rem;

  .img-delete-btn {
    vertical-align: top;
    cursor: pointer;
    border: none;
    background: transparent;
    font-size: 0.75rem;
    font-weight: bold;
    color: #6495ed;
    :hover {
      color: #82aeff;
    }
  }

  .img-input-btn {
    margin-top: 0.5rem;
    position: relative;
    width: 50px;
    height: 50px;

    img {
      position: absolute;
      top: -1px;
      left: -1px;
      border-radius: 50%;
    }
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  input {
    width: 300px;
    height: 44px;
    border: none;
    border-bottom: 1px solid #000;
    background: transparent;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SignUpLayout({ children }: SignUpLayoutProps) {
  return <FormContainer>{children}</FormContainer>;
}

export default SignUpLayout;
