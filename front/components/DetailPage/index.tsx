import { UserOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';
import { DetailBg, DetailHeader, DetailMain } from './styles';
import ShowPeopleModal from 'components/Modals/ShowPeopleModal';

interface DetailPageProps {
  singleCommunity: ICommunity;
  setCommunityModifyModal: Dispatch<SetStateAction<boolean>>;
}

function DetailPage({
  singleCommunity,
  setCommunityModifyModal,
}: DetailPageProps) {
  const [showPeopleModal, setShowPeopleModal] = useState(false);
  const [currentNavValue, setCurrentNavValue] = useState('nav-info');

  const communityModifyModalTrigger = useCallback(() => {
    setCommunityModifyModal(prev => !prev);
  }, [setCommunityModifyModal]);

  const showPeopleModalTrigger = useCallback(() => {
    setShowPeopleModal(prev => !prev);
  }, []);

  const onClickNav = useCallback(e => {
    if (e.target.className.split('-')[0] === 'nav') {
      setCurrentNavValue(e.target.className.split(' ')[0]);
    }
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
          <div className="detail-nav" onClick={onClickNav}>
            <div
              className={`nav-info${
                currentNavValue === 'nav-info' ? ' active' : ''
              }`}
            >
              정보
            </div>
            <div
              className={`nav-post${
                currentNavValue === 'nav-post' ? ' active' : ''
              }`}
            >
              게시글
            </div>
          </div>
          {currentNavValue === 'nav-info' ? (
            <>
              <div className="detail-info">
                <div className="info-leader common odd">
                  <p>커뮤니티 리더</p>
                  <div>
                    {singleCommunity.Users.map(
                      v => v.id === singleCommunity.OwnerId && v.nickname
                    )}
                  </div>
                </div>
                <div className="info-description common">
                  <p>커뮤니티 소개</p>
                  <div>{singleCommunity.description}</div>
                </div>
                <div className="info-category common odd">
                  <p>카테고리</p>
                  <div>{singleCommunity.Categories[0].name}</div>
                </div>
                <div className="info-caution common">
                  <p>주의사항</p>
                  <div>{singleCommunity.caution}</div>
                </div>
                <div
                  className="info-people common odd"
                  onClick={showPeopleModalTrigger}
                >
                  <p>커뮤니티 회원</p>
                  <div>{singleCommunity.Users.length}명</div>
                </div>
                <div className="info-requirement common">
                  <p>가입조건</p>
                  <div>{singleCommunity.requirement}</div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{ width: '516px', height: '500px', background: 'coral' }}
              >
                2
              </div>
            </>
          )}
        </DetailMain>
      </div>
      {showPeopleModal && (
        <ShowPeopleModal setShowPeopleModal={setShowPeopleModal} />
      )}
    </DetailBg>
  );
}

export default DetailPage;
