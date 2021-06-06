import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
  ModalExternal,
  ModalContainer,
  ModalBody,
  ModalHeader,
} from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';

interface ShowCommunityUserModalProps {
  setShowCommunityUserModal: Dispatch<SetStateAction<boolean>>;
  singleCommunity: ICommunity;
}

function ShowCommunityUserModal({
  setShowCommunityUserModal,
  singleCommunity,
}: ShowCommunityUserModalProps) {
  const { Users } = singleCommunity;

  const closeShowCommunityUserModal = useCallback(() => {
    setShowCommunityUserModal(false);
  }, [setShowCommunityUserModal]);

  // 유저 클릭하면 유저정보 볼 수 있게 모달창이 좋을 듯
  return (
    <ModalExternal onClick={closeShowCommunityUserModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <div className="modal-title">커뮤니티 회원</div>
          <div className="close-btn" onClick={closeShowCommunityUserModal}>
            <CloseCircleOutlined />
          </div>
        </ModalHeader>
        <ModalBody>
          {Users.map(user => (
            <div className="user-container" key={user.nickname}>
              {user.profilePhoto ? (
                <img
                  width="24px"
                  height="24px"
                  src={`http://localhost:3065/${user.profilePhoto}`}
                  alt="user-image"
                />
              ) : (
                <div className="fake-image">{user.nickname[0]}</div>
              )}
              <div className="user-nickname">{user.nickname}</div>
            </div>
          ))}
        </ModalBody>
      </ModalContainer>
    </ModalExternal>
  );
}

export default ShowCommunityUserModal;
