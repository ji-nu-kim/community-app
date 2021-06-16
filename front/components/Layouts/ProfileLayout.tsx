import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ProfileLayoutProps {
  children: ReactNode;
}

const ProfileContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  width: 100%;
  height: 100%;
`;

export const ProfileHeader = styled.div`
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
        font-size: 2rem;
      }

      .text-country {
        cursor: pointer;
        color: #cdcedf;
        font-size: 0.8rem;
        font-weight: bold;

        :hover {
          color: #039be5;
        }
      }
    }
  }
  .header-right {
    button {
      border: none;
      color: #fff;
      background: #039be5;
      height: 28px;
      font-size: 0.75rem;

      :hover {
        cursor: pointer;
        background: #007bb8;
      }
    }
  }
`;

export const ProfileContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 1rem;
  gap: 1rem;
  h1 {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2rem;
    color: hotpink;
    margin-bottom: 1rem;
  }
  .cards-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  }
`;

function ProfileLayout({ children }: ProfileLayoutProps) {
  return <ProfileContainer>{children}</ProfileContainer>;
}

export default ProfileLayout;
