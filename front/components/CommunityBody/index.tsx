import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';
import { BodyContainer } from './styles';
import { ICommunity, IUser, IUserInfo } from 'interfaces/db';

const Info = dynamic(() => import('./Info'));
const Post = dynamic(() => import('./Post'));
const Meet = dynamic(() => import('./Meet'));

interface CommunityBodyProps {
  singleCommunity: ICommunity;
  me: IUser | null;
  communityUser: IUserInfo | undefined;
}

function CommunityBody({ singleCommunity, me, communityUser }: CommunityBodyProps) {
  const [currentNav, setCurrentNav] = useState('info');

  const onClickNav = useCallback(e => {
    const navName = e.target.className.split('-');
    if (navName[0] === 'nav' && navName[1].length < 5) {
      setCurrentNav(navName[1]);
    }
  }, []);

  return (
    <BodyContainer>
      <div className="body-inner-container">
        <div className="body-nav" onClick={onClickNav}>
          <div className={`nav-info${currentNav === 'info' ? ' active' : ''}`}>정보</div>
          <div className={`nav-post${currentNav === 'post' ? ' active' : ''}`}>
            게시글
          </div>
          <div className={`nav-meet${currentNav === 'meet' ? ' active' : ''}`}>모임</div>
        </div>
        <div className="body-content">
          {currentNav === 'info' && <Info singleCommunity={singleCommunity} />}
          {currentNav === 'post' && (
            <Post singleCommunity={singleCommunity} communityUser={communityUser} />
          )}
          {currentNav === 'meet' && (
            <Meet
              singleCommunity={singleCommunity}
              me={me}
              communityUser={communityUser}
            />
          )}
        </div>
      </div>
    </BodyContainer>
  );
}

export default CommunityBody;
