import React, { useCallback, useState } from 'react';
import { BodyContainer } from './styles';
import { ICommunity } from 'interfaces/db';
import Info from './Info';
import Post from './Post';
import Meet from './Meet';

interface CommunityBodyProps {
  singleCommunity: ICommunity;
}

function CommunityBody({ singleCommunity }: CommunityBodyProps) {
  const [currentNav, setCurrentNav] = useState('info');

  const onClickNav = useCallback(e => {
    const navName = e.target.className.split('-');
    if (navName[0] === 'nav') {
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
          {currentNav === 'post' && <Post singleCommunity={singleCommunity} />}
          {currentNav === 'meet' && <Meet singleCommunity={singleCommunity} />}
        </div>
      </div>
    </BodyContainer>
  );
}

export default CommunityBody;
