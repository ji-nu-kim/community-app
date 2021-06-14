import React, { useCallback, useState } from 'react';
import { BodyContainer } from './styles';
import { ICommunity } from 'interfaces/db';
import Info from './Info';
import Post from './Post';
import Meet from './Meet';
import { RootStateInterface } from 'interfaces/RootState';
import { useSelector } from 'react-redux';

interface CommunityBodyProps {
  singleCommunity: ICommunity;
}

function CommunityBody({ singleCommunity }: CommunityBodyProps) {
  const [currentNav, setCurrentNav] = useState('info');
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const communityUser = singleCommunity.Users.find(user => user.id === me?.id);

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
