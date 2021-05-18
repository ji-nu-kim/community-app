import { ICommunity } from 'interfaces/db';
import Link from 'next/link';
import React, { memo, useCallback, useState } from 'react';
import { CommunityCardContainer, CardWrapper } from './styles';

interface CommunityCardProps {
  communities: ICommunity[];
}

function CommunityCard({ communities }: CommunityCardProps) {
  const [showCommunityInfo, setShowCommunityInfo] = useState(false);
  const [currentCard, setCurrentCard] = useState('');

  const onMouseIn = useCallback(e => {
    setCurrentCard(e.target.outerText);
    setShowCommunityInfo(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setShowCommunityInfo(false);
  }, []);

  return (
    <CommunityCardContainer>
      {communities.map(v => (
        <Link key={v.id} href={`/community/${v.id}`}>
          <a>
            <CardWrapper
              onMouseEnter={onMouseIn}
              onMouseLeave={onMouseOut}
              img={
                v.profilePhoto
                  ? `http://localhost:3065/${v.profilePhoto}`
                  : null
              }
            >
              <div className="card-title">{v.communityName}</div>
              {showCommunityInfo && v.communityName === currentCard && (
                <div className="card-info">
                  <div className="info-country">지역: {v.country}</div>
                  <div className="info-category">
                    카테고리: {v.Categories[0].name}
                  </div>
                  <div className="info-users">회원수: {v.Users.length}명</div>
                </div>
              )}
            </CardWrapper>
          </a>
        </Link>
      ))}
    </CommunityCardContainer>
  );
}

export default memo(CommunityCard);
