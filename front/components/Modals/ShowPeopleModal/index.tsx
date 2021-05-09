import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { MG, ModalContainer, ModalContent, ModalHeader } from './styles';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { RootStateInterface } from 'interfaces/RootState';

interface ShowPeopleModalProps {
  setShowPeopleModal: Dispatch<SetStateAction<boolean>>;
}

function ShowPeopleModal({ setShowPeopleModal }: ShowPeopleModalProps) {
  const { singleCommunity } = useSelector(
    (state: RootStateInterface) => state.community
  );

  const closeShowPeopleModal = useCallback(() => {
    setShowPeopleModal(false);
  }, [setShowPeopleModal]);

  return (
    <MG onClick={closeShowPeopleModal}>
      <ModalContainer>
        <ModalHeader>
          <div className="modal-title">커뮤니티 회원</div>
          <div className="close-btn" onClick={closeShowPeopleModal}>
            <CloseCircleOutlined />
          </div>
        </ModalHeader>
        <ModalContent>
          {singleCommunity?.Users.map(v => (
            <div className="user-container" key={v.nickname}>
              {v.profilePhoto ? (
                <img
                  width="24px"
                  height="24px"
                  src={`http://localhost:3065/${v.profilePhoto}`}
                  alt="user-image"
                />
              ) : (
                <div className="fake-image">{v.nickname[0]}</div>
              )}
              <div className="user-nickname">{v.nickname}</div>
            </div>
          ))}
        </ModalContent>
      </ModalContainer>
    </MG>
  );
}

export default ShowPeopleModal;
