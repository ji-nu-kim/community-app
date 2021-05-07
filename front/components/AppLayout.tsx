import React, { ReactNode, useState } from 'react';

import NavList from './NavList';
import SideBar from './SideBar';

import UserInfoModal from './Modals/UserInfoModal';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const [userInfoModal, setUserInfoModal] = useState(false);

  return (
    <div>
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
