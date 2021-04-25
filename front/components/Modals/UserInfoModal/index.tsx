import { logOutRequestAction } from 'actions/actionUser';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer, ModalWrapper } from './styles';

interface UserInfoModalProps {
  setUserInfoModal: Dispatch<SetStateAction<boolean>>;
}

function UserInfoModal({ setUserInfoModal }: UserInfoModalProps) {
  const dispatch = useDispatch();

  const UserInfoModalTrigger = useCallback(() => {
    setUserInfoModal(false);
  }, [setUserInfoModal]);

  const onClickLogOutBtn = useCallback(() => {
    dispatch(logOutRequestAction());
  }, []);

  return (
    <ModalWrapper onClick={UserInfoModalTrigger}>
      <ModalContainer onClick={UserInfoModalTrigger}>
        <ul>
          <li>
            <Link href="/">
              <a>홈</a>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </li>
          <li onClick={onClickLogOutBtn}>로그아웃</li>
        </ul>
      </ModalContainer>
    </ModalWrapper>
  );
}

export default UserInfoModal;
