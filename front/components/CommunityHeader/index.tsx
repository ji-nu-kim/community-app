import { UserOutlined } from '@ant-design/icons';
import {
  joinCommunityRequestAction,
  leaveCommunityRequestAction,
  removeCommunityRequestAction,
} from 'actions/actionCommunity';
import { ICommunity, IUser, IUserInfo } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer } from './styles';

const JoinUserModal = dynamic(() => import('components/Modals/JoinUserModal'));
const CommunityModifyModal = dynamic(
  () => import('components/Modals/CommunityModifyModal')
);
interface CommunityHeaderProps {
  singleCommunity: ICommunity;
  me: IUser | null;
  communityUser: IUserInfo | undefined;
}

function CommunityHeader({ singleCommunity, me, communityUser }: CommunityHeaderProps) {
  const dispatch = useDispatch();
  const { joinCommunityDone, changeCommunityInfoDone, removeCommunityDone } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [joinUserModal, setJoinUserModal] = useState(false);
  const [showCommunityModifyModal, setShowCommunityModifyModal] = useState(false);
  const communityOwner = me?.id === singleCommunity?.OwnerId;
  const joinUser = singleCommunity.JoinUsers.find(user => user.id === me?.id);

  const communityModifyModalTrigger = useCallback(() => {
    if (communityOwner) {
      setShowCommunityModifyModal(prev => !prev);
    }
  }, [setShowCommunityModifyModal, communityOwner]);

  const onClickJoinButton = useCallback(() => {
    if (!me && confirm('로그인한 유저만 가능합니다. 로그인하시겠습니까?')) {
      return Router.push('/login');
    }

    if (!communityUser && confirm('커뮤니티 가입신청을 하시겠습니까?')) {
      return dispatch(joinCommunityRequestAction({ communityId: singleCommunity.id }));
    }
  }, [singleCommunity, me, communityUser]);

  const onClickLeaveButton = useCallback(async () => {
    if (communityUser && confirm('커뮤니티를 탈퇴하시겠습니까?')) {
      return dispatch(
        leaveCommunityRequestAction({
          communityId: singleCommunity.id,
        })
      );
    }
  }, [singleCommunity, communityUser]);

  const onClickRemoveButton = useCallback(async () => {
    if (communityOwner && confirm('커뮤니티를 삭제하시겠습니까?')) {
      return dispatch(removeCommunityRequestAction({ communityId: singleCommunity.id }));
    }
  }, [communityOwner, singleCommunity]);

  const joinUserModalTrigger = useCallback(() => {
    setJoinUserModal(prev => !prev);
  }, []);

  useEffect(() => {
    if (removeCommunityDone) {
      Router.push('/');
    }
  }, [removeCommunityDone]);

  useEffect(() => {
    if (joinCommunityDone) {
      alert('커뮤니티 가입신청이 완료되었습니다');
    }
  }, [joinCommunityDone]);

  useEffect(() => {
    if (changeCommunityInfoDone) {
      setShowCommunityModifyModal(false);
    }
  }, [changeCommunityInfoDone]);

  return (
    <HeaderContainer>
      <div className="header-left">
        <div className="header-image">
          {singleCommunity.profilePhoto ? (
            <img
              src={singleCommunity.profilePhoto}
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
        {communityOwner && (
          <>
            <div
              className="join-user-icon"
              title="가입신청목록"
              onClick={joinUserModalTrigger}
            >
              <UserOutlined />
              {singleCommunity.JoinUsers.length > 0 && (
                <div className="user-icon-badge">{singleCommunity.JoinUsers.length}</div>
              )}
            </div>
            <div className="button-container">
              <button
                title="수정하기"
                className="modify-button"
                onClick={communityModifyModalTrigger}
              ></button>
              <button
                title="삭제하기"
                className="remove-button"
                onClick={onClickRemoveButton}
              ></button>
            </div>
          </>
        )}
        {communityOwner ? null : communityUser ? (
          <button onClick={onClickLeaveButton} className="leave-button">
            탈퇴하기
          </button>
        ) : joinUser ? (
          <button className="wait-button">가입대기</button>
        ) : (
          <button onClick={onClickJoinButton} className="join-button">
            가입하기
          </button>
        )}
      </div>
      {joinUserModal && (
        <JoinUserModal
          setJoinUserModal={setJoinUserModal}
          singleCommunity={singleCommunity}
        />
      )}

      {showCommunityModifyModal && (
        <CommunityModifyModal setShowCommunityModifyModal={setShowCommunityModifyModal} />
      )}
    </HeaderContainer>
  );
}

export default CommunityHeader;
