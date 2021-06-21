import { CloseCircleOutlined } from '@ant-design/icons';
import {
  acceptCommunityRequestAction,
  refuseCommunityRequestAction,
} from 'actions/actionCommunity';
import { ICommunity } from 'interfaces/db';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalExternal, ModalContainer, ModalBody, ModalHeader } from './styles';

interface JoinUserModalProps {
  setJoinUserModal: Dispatch<SetStateAction<boolean>>;
  singleCommunity: ICommunity;
}

function JoinUserModal({ setJoinUserModal, singleCommunity }: JoinUserModalProps) {
  const dispatch = useDispatch();
  const { JoinUsers } = singleCommunity;

  const closeJoinUserModal = useCallback(() => {
    setJoinUserModal(false);
  }, [setJoinUserModal]);

  const onClickAccept = useCallback(
    (userId: number) => async () => {
      return dispatch(
        acceptCommunityRequestAction({
          communityId: singleCommunity.id,
          userId,
          title: `${singleCommunity.communityName} 커뮤니티 가입신청이 승인되었습니다`,
        })
      );
    },
    [singleCommunity]
  );

  const onClickRefuse = useCallback(
    (userId: number) => async () => {
      return dispatch(
        refuseCommunityRequestAction({
          communityId: singleCommunity.id,
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
