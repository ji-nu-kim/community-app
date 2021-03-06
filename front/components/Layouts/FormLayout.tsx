import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SignUpLayoutProps {
  children: ReactNode;
}

export const FormContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(to right, #fbcac9, #8ca6ce);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
    margin-bottom: 2rem;
  }

  label {
    font-weight: bold;
    color: #777;
  }

  .select-category {
    margin-top: 0.5rem;
    background: transparent;

    ::-webkit-scrollbar {
      width: 0;
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

export const TextAreaContainer = styled.div`
  margin-bottom: 1rem;
  textarea {
    border: 1px solid #000;
    background: transparent;
    margin-top: 0.5rem;
    width: 300px;
    height: 100px;
    resize: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function SignUpLayout({ children }: SignUpLayoutProps) {
  return <FormContainer>{children}</FormContainer>;
}

export default SignUpLayout;
