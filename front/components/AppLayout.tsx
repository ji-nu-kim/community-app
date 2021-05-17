import React, { ReactNode, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import NavList from './NavList';
import SideBar from './SideBar';
import UserInfoModal from './Modals/UserInfoModal';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 0 !important;
  }
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;
interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const [userInfoModal, setUserInfoModal] = useState(false);

  return (
    <div>
      <Global />
      <NavList
        userInfoModal={userInfoModal}
        setUserInfoModal={setUserInfoModal}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '200px auto' }}>
        <SideBar />
        <div>{children}</div>
      </div>
      {userInfoModal && <UserInfoModal setUserInfoModal={setUserInfoModal} />}
    </div>
  );
}

export default AppLayout;
