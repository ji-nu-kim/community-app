import { CloseCircleOutlined } from '@ant-design/icons';
import {
  acceptCommunityRequestAction,
  refuseCommunityRequestAction,
} from 'actions/actionCommunity';
import { sendNotificationRequestAction } from 'actions/actionUser';
import { ICommunity } from 'interfaces/db';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  ModalExternal,
  ModalContainer,
  ModalBody,
  ModalHeader,
} from './styles';

interface JoinUserModalProps {
  setJoinUserModal: Dispatch<SetStateAction<boolean>>;
  singleCommunity: ICommunity;
}

function JoinUserModal({
  setJoinUserModal,
  singleCommunity,
}: JoinUserModalProps) {
  const dispatch = useDispatch();
  const { JoinUsers } = singleCommunity;

  const closeJoinUserModal = useCallback(() => {
    setJoinUserModal(false);
  }, [setJoinUserModal]);

  const onClickAccept = useCallback(
    (userId: number) => () => {
      // 승인절차
      // 1. 커뮤니티에 가입시킨다
      dispatch(
        acceptCommunityRequestAction({
          communityId: singleCommunity.id,
          userId,
        })
      );
      // 2. 임시DB에 저장된 유저정보를 제거한다
      dispatch(
        refuseCommunityRequestAction({
          communityId: singleCommunity.id,
          userId,
        })
      );
      // 3. 유저에게 가입되었다는 알림 메시지를 보낸다
      dispatch(
        sendNotificationRequestAction({
          title: `${singleCommunity.communityName} 커뮤니티 가입신청이 승인되었습니다`,
          userId,
        })
      );
    },
    [singleCommunity]
  );

  const onClickRefuse = useCallback(
    (userId: number) => () => {
      // 거절절차
      // 1. 임시 DB에서 해당 유저를 삭제한다
      dispatch(
        refuseCommunityRequestAction({
          communityId: singleCommunity.id,
          userId,
        })
      );
      // 2. 유저에게 가입거절되었다는 알림 메시지를 보낸다
      dispatch(
        sendNotificationRequestAction({
          title: `${singleCommunity.communityName} 커뮤니티 가입신청이 거절되었습니다`,
          userId,
        })
      );
    },
    [singleCommunity]
  );

  return (
    <ModalExternal onClick={closeJoinUserModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <div className="modal-title">가입신청한 유저목록</div>
          <div className="close-btn" onClick={closeJoinUserModal}>
            <CloseCircleOutlined />
          </div>
        </ModalHeader>
        <ModalBody>
          {JoinUsers.map(user => (
            <div key={user.id} className="card-container">
              <div className="card-image">
                {user.profilePhoto ? (
                  <img
                    src={`http://localhost:3065/${user.profilePhoto}`}
                    alt="profile-photo"
                  />
                ) : (
                  '이미지'
                )}
              </div>
              <div className="card-info">
                <div>닉네임: {user.nickname}</div>
                <div>지역: {user.country}</div>
              </div>
              <div className="card-button">
                <button onClick={onClickAccept(user.id)}>승인</button>
                <button onClick={onClickRefuse(user.id)}>거절</button>
              </div>
            </div>
          ))}
        </ModalBody>
      </ModalContainer>
    </ModalExternal>
  );
}

export default JoinUserModal;
