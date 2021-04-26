import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootStateInterface } from '../interfaces/RootState';
import NavList from './NavList';
import SideBar from './SideBar';

import CommunityModal from './Modals/CommunityModal';
import UserInfoModal from './Modals/UserInfoModal';

interface AppLayoutProps {
  children: ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const addCommunityDone = useSelector(
    (state: RootStateInterface) => state.community.addCommunityDone
  );

  const [communityModal, setCommunityModal] = useState(false);
  const [userInfoModal, setUserInfoModal] = useState(false);

  useEffect(() => {
    if (addCommunityDone) {
      setCommunityModal(false);
    }
  }, [addCommunityDone]);

  return (
    <div>
      <NavList
        userInfoModal={userInfoModal}
        setUserInfoModal={setUserInfoModal}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '200px auto' }}>
        <SideBar setCommunityModal={setCommunityModal} />
        <div>{children}</div>
      </div>
      {userInfoModal && <UserInfoModal setUserInfoModal={setUserInfoModal} />}
      {communityModal && (
        <CommunityModal setCommunityModal={setCommunityModal} />
      )}
    </div>
  );
}

export default AppLayout;
