import React, { memo, ReactNode, useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import NavBar from '../NavBar';
import SideBar from '../SideBar';
import UserInfoModal from '../Modals/UserInfoModal';
import NotificationModal from '../Modals/NotificationModal';
import { useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';

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
  const Notices = useSelector((state: RootStateInterface) => state.user.me?.Notices);
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  return (
    <div>
      <Global />
      <NavBar
        notices={Notices}
        userInfoModal={userInfoModal}
        setUserInfoModal={setUserInfoModal}
        setNotificationModal={setNotificationModal}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '200px auto' }}>
        <SideBar />
        <div>{children}</div>
      </div>
      {userInfoModal && <UserInfoModal setUserInfoModal={setUserInfoModal} />}
      {notificationModal && (
        <NotificationModal
          setNotificationModal={setNotificationModal}
          notices={Notices}
        />
      )}
    </div>
  );
}

export default memo(AppLayout);
