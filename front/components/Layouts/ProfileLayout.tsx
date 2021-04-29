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
    grid-template-rows: 20% 30% 50%;
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
      h1,
      h2 {
        color: #fff;
        font-weight: bold;
      }

      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1rem;
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

export const ProfileGridCategory = styled.div``;

function ProfileLayout({ children }: ProfileLayoutProps) {
  return <ProfileContainer>{children}</ProfileContainer>;
}

export default ProfileLayout;
