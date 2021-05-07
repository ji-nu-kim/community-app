import { UserOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DetailBg, DetailHeader, DetailMain } from './styles';
import CommunitymodifyModal from 'components/Modals/CommunityModifyModal';

interface DetailPageProps {
  singleCommunity: ICommunity;
}

function DetailPage({ singleCommunity }: DetailPageProps) {
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const { changeCommunityInfoDone } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [communityModifyModal, setCommunityModifyModal] = useState(false);

  useEffect(() => {
    if (changeCommunityInfoDone) {
      setCommunityModifyModal(false);
    }
  }, [changeCommunityInfoDone]);

  const communityModifyModalTrigger = useCallback(() => {
    setCommunityModifyModal(prev => !prev);
  }, []);

  return (
    <DetailBg bg={`http://localhost:3065/${singleCommunity.profilePhoto}`}>
      <div className="detail-grid">
        <DetailHeader>
          <div className="header-left">
            <div className="header-image">
              {singleCommunity.profilePhoto ? (
                <img
                  src={`http://localhost:3065/${singleCommunity.profilePhoto}`}
                  width="150"
                  height="150"
                  alt="profile-image"
                />
              ) : (
                <UserOutlined className="header-icon" />
              )}
            </div>
            <div className="header-text">
              <p>커뮤니티정보</p>
              <h1>{singleCommunity.communityName}</h1>
              <h2>{singleCommunity.country}</h2>
            </div>
          </div>
          <div className="header-right">
            <button onClick={communityModifyModalTrigger}>수정하기</button>
          </div>
        </DetailHeader>
        <DetailMain>
          <div className="detail-info">
            <h1>커뮤니티 상세정보</h1>
            <div>커뮤니티 리더</div>
            <div>
              {singleCommunity.Users.map(
                v => v.id === singleCommunity.OwnerId && v.nickname
              )}
            </div>
            <div>커뮤니티 설명</div>
            {singleCommunity.description}
            <div>카테고리</div>
            <div>{singleCommunity.Categories[0].name}</div>
            <div>주의사항</div>
            <div>{singleCommunity.caution}</div>
            <div>가입조건</div>
            <div>{singleCommunity.requirement}</div>
          </div>
          <div>2</div>
        </DetailMain>
      </div>
      {communityModifyModal && (
        <CommunitymodifyModal
          setCommunityModifyModal={setCommunityModifyModal}
        />
      )}
    </DetailBg>
  );
}

export default DetailPage;
