import React, { Dispatch, SetStateAction, useCallback } from 'react';
import {
  ModalExternal,
  ModalContainer,
  ModalBody,
  ModalHeader,
} from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import { ICommunity } from 'interfaces/db';

interface ShowPeopleModalProps {
  setShowPeopleModal: Dispatch<SetStateAction<boolean>>;
  singleCommunity: ICommunity;
}

function ShowPeopleModal({
  setShowPeopleModal,
  singleCommunity,
}: ShowPeopleModalProps) {
  const { Users } = singleCommunity;

  const closeShowPeopleModal = useCallback(() => {
    setShowPeopleModal(false);
  }, [setShowPeopleModal]);

  return (
    <ModalExternal onClick={closeShowPeopleModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <div className="modal-title">커뮤니티 회원</div>
          <div className="close-btn" onClick={closeShowPeopleModal}>
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

export default ShowPeopleModal;
