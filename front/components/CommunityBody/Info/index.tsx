import ShowCommunityUserModal from 'components/Modals/ShowCommunityUserModal';
import { ICommunity } from 'interfaces/db';
import React, { useCallback, useState } from 'react';
import { InfoContainer } from './styles';

interface InfoProps {
  singleCommunity: ICommunity;
}

function Info({ singleCommunity }: InfoProps) {
  const [showCommunityUserModal, setShowCommunityUserModal] = useState(false);

  const showCommunityUserModalTrigger = useCallback(() => {
    setShowCommunityUserModal(prev => !prev);
  }, []);

  return (
    <>
      <InfoContainer>
        <div className="info-leader common odd">
          <p>커뮤니티 리더</p>
          <div>
            {singleCommunity.Users.map(
              v => v.id === singleCommunity.OwnerId && v.nickname
            )}
          </div>
        </div>
        <div className="info-description common even">
          <p>커뮤니티 소개</p>
          <div>{singleCommunity.description}</div>
        </div>

        <div className="info-category common odd">
          <p>카테고리</p>
          <div>{singleCommunity.Categories[0].name}</div>
        </div>
        <div className="info-caution common even">
          <p>주의사항</p>
          <div>{singleCommunity.caution}</div>
        </div>
        <div
          className="info-community-user common odd"
          onClick={showCommunityUserModalTrigger}
        >
          <p>커뮤니티 회원</p>
          <div>{singleCommunity.Users.length}명</div>
        </div>
        <div className="info-requirement common even">
          <p>가입조건</p>
          <div>{singleCommunity.requirement}</div>
        </div>
      </InfoContainer>
      {showCommunityUserModal && (
        <ShowCommunityUserModal
          setShowCommunityUserModal={setShowCommunityUserModal}
          singleCommunity={singleCommunity}
        />
      )}
    </>
  );
}

export default Info;
