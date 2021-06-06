import { UserOutlined } from '@ant-design/icons';
import {
  joinCommunityRequestAction,
  leaveCommunityRequestAction,
} from 'actions/actionCommunity';
import { sendNotificationRequestAction } from 'actions/actionUser';
import CommunityModifyModal from 'components/Modals/CommunityModifyModal';
import JoinUserModal from 'components/Modals/JoinUserModal';
import { ICommunity, IUser } from 'interfaces/db';
import { RootStateInterface } from 'interfaces/RootState';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderContainer } from './styles';

interface CommunityHeaderProps {
  singleCommunity: ICommunity;
  me: IUser | null;
}

function CommunityHeader({ singleCommunity, me }: CommunityHeaderProps) {
  const dispatch = useDispatch();
  const { joinCommunityDone } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const [joinUserModal, setJoinUserModal] = useState(false);
  const [communityModifyModal, setCommunityModifyModal] = useState(false);
  const communityOwner = me?.id === singleCommunity.OwnerId;
  const communityUser = singleCommunity.Users.map(
    user => user.id === me?.id
  ).length;

  const communityModifyModalTrigger = useCallback(() => {
    setCommunityModifyModal(prev => !prev);
  }, [setCommunityModifyModal]);

  const onClickJoin = useCallback(() => {
    if (!me) {
      const confirmLogin = confirm(
        '로그인한 유저만 가능합니다. 로그인하시겠습니까?'
      );
      if (confirmLogin) {
        return Router.push('/login');
      }
    }

    if (me) {
      const confirmJoin = confirm('커뮤니티 가입신청을 하시겠습니까?');
      if (confirmJoin) {
        dispatch(
          joinCommunityRequestAction({ communityId: singleCommunity.id })
        );
      }
    }
  }, [singleCommunity, me]);

  const onClickLeave = useCallback(() => {
    if (me) {
      const confirmLeave = confirm('커뮤니티를 탈퇴하시겠습니까?');

      if (confirmLeave) {
        dispatch(
          leaveCommunityRequestAction({ communityId: singleCommunity.id })
        );
        dispatch(
          sendNotificationRequestAction({
            title: `${singleCommunity.communityName} 커뮤니티를 탈퇴했습니다`,
            userId: me.id,
          })
        );
      }
    }
  }, [singleCommunity, me]);

  const joinUserModalTrigger = useCallback(() => {
    setJoinUserModal(prev => !prev);
  }, []);

  useEffect(() => {
    if (joinCommunityDone) {
      alert('커뮤니티 가입신청이 완료되었습니다');
    }
  }, [joinCommunityDone]);

  return (
    <HeaderContainer>
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
        {communityOwner && (
          <>
            <div className="join-user-icon" onClick={joinUserModalTrigger}>
              <UserOutlined />
              {singleCommunity.JoinUsers.length > 0 && (
                <div className="user-icon-badge">
                  {singleCommunity.JoinUsers.length}
                </div>
              )}
            </div>
            <button
              className="insert-button"
              onClick={communityModifyModalTrigger}
            >
              수정하기
            </button>
          </>
        )}
        {communityOwner ? null : communityUser ? (
          <button onClick={onClickLeave}>탈퇴하기</button>
        ) : (
          <button onClick={onClickJoin}>가입하기</button>
        )}
      </div>
      {joinUserModal && (
        <JoinUserModal
          setJoinUserModal={setJoinUserModal}
          singleCommunity={singleCommunity}
        />
      )}

      {communityModifyModal && (
        <CommunityModifyModal
          setCommunityModifyModal={setCommunityModifyModal}
        />
      )}
    </HeaderContainer>
  );
}

export default CommunityHeader;
