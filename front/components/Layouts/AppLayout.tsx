import React, { memo, ReactNode, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';

const NavBar = dynamic(() => import('components/NavBar'));
const SideBar = dynamic(() => import('components/SideBar'));
const UserInfoModal = dynamic(() => import('components/Modals/UserInfoModal'));
const NotificationModal = dynamic(() => import('components/Modals/NotificationModal'));

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
  const { me, leaveDone, leaveError } = useSelector(
    (state: RootStateInterface) => state.user
  );
  const [userInfoModal, setUserInfoModal] = useState(false);
  const [notificationModal, setNotificationModal] = useState(false);

  useEffect(() => {
    if (leaveDone) {
      alert('탈퇴처리가 완료되었습니다');
    }
  }, [leaveDone]);

  useEffect(() => {
    if (leaveError) {
      alert(leaveError);
    }
  }, [leaveError]);

  return (
    <div>
      <Global />
      <NavBar
        notices={me?.Notices}
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
          notices={me?.Notices}
        />
      )}
    </div>
  );
}

export default memo(AppLayout);
