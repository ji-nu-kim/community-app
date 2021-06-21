import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { ModalExternal, ModalContainer, ModalBody, ModalHeader } from './styles';
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
  const closeShowCommunityUserModal = useCallback(() => {
    setShowCommunityUserModal(false);
  }, [setShowCommunityUserModal]);

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
          {singleCommunity.Users.map(user => (
            <div className="user-container" key={user.nickname}>
              <div className="user-name">
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
              <div className="user-country">{user.country}</div>
            </div>
          ))}
        </ModalBody>
      </ModalContainer>
    </ModalExternal>
  );
}

export default ShowCommunityUserModal;
