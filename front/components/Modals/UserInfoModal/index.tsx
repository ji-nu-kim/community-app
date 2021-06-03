import { logOutRequestAction } from 'actions/actionUser';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { ModalContainer, ModalExternal } from './styles';

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

  const onClickDeleteAccountBtun = useCallback(() => {
    if (confirm('회원탈퇴하시겠습니까?')) {
      const result = prompt('비밀번호를 입력하세요');
      if (!result) {
        return alert('올바른 비밀번호를 입력하세요');
      } else {
        // dispatch()
      }
    } else {
      return null;
    }
  }, []);

  return (
    <ModalExternal onClick={UserInfoModalTrigger}>
      <ModalContainer onClick={UserInfoModalTrigger}>
        <ul>
          <li>
            <Link href="/profile">
              <a>프로필</a>
            </Link>
          </li>
          <li onClick={onClickLogOutBtn}>로그아웃</li>
          <li onClick={onClickDeleteAccountBtun}>회원탈퇴</li>
        </ul>
      </ModalContainer>
    </ModalExternal>
  );
}

export default UserInfoModal;
