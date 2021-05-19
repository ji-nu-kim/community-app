import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .profile-grid {
    display: grid;
    grid-template-rows: 200px auto;
    gap: 0.25rem;
    width: 100%;
    height: 100%;
  }
`;

export const ProfileGridHeader = styled.div`
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  display: grid;
  grid-template-columns: auto 76px;

  .header-left {
    display: flex;
    align-items: center;
    .header-image {
      width: 150px;
      height: 150px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 50%;
        object-fit: cover;
      }

      .header-icon {
        color: #cacaca;
        font-size: 3rem;
      }
    }
    .header-text {
      margin-left: 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 0.75rem;
        color: #039be5;
        font-weight: bold;
      }
      h1 {
        color: #fff;
        font-weight: bold;
      }

      h1 {
        font-size: 2rem;
      }

      .text-country {
        cursor: pointer;
        color: #cdcedf;
        font-size: 0.8rem;
        font-weight: bold;

        :hover {
          color: #e3e3ec;
        }
      }
    }
  }
  .header-right {
    button {
      border: none;
      color: #fff;
      background: rgba(3, 155, 229, 0.7);
      height: 28px;
      font-size: 0.75rem;

      :hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.7);
        background: rgba(3, 155, 229, 0.3);
      }
    }
  }
`;

export const ProfileGridContents = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  padding: 1rem;
  h1 {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2.5rem;
    background: linear-gradient(#108dc7, #ef8e38);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .contents-vertical {
  }

  .contents-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 250px);
  }
  .content-container {
    display: flex;
  }
`;

function ProfileLayout({ children }: ProfileLayoutProps) {
  return <ProfileContainer>{children}</ProfileContainer>;
}

export default ProfileLayout;
