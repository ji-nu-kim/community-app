import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LoginLayoutProps {
  children: ReactNode;
}

const HomeContainer = styled.div`
  height: 100%;
  background: linear-gradient(150deg, #ffafbd, #ffe1a0);

  h1 {
    font-size: 2rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    font-family: 'Black Han Sans', sans-serif;
  }

  section {
    padding: 1rem;
    display: grid;
    grid-template-rows: 66px auto;

    .cards-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, 240px);
      justify-content: space-evenly;
    }
  }
`;

function LoginLayout({ children }: LoginLayoutProps) {
  return <HomeContainer>{children}</HomeContainer>;
}

export default LoginLayout;
