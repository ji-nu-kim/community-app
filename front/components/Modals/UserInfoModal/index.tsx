import { leaveRequestAction, logOutRequestAction } from 'actions/actionUser';
import { RootStateInterface } from 'interfaces/RootState';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ModalContainer, ModalExternal } from './styles';

interface UserInfoModalProps {
  setUserInfoModal: Dispatch<SetStateAction<boolean>>;
}

function UserInfoModal({ setUserInfoModal }: UserInfoModalProps) {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootStateInterface) => state.user);

  const UserInfoModalTrigger = useCallback(() => {
    setUserInfoModal(false);
  }, [setUserInfoModal]);

  const onClickLogOutBtn = useCallback(() => {
    return dispatch(logOutRequestAction());
  }, []);

  const onClickDeleteAccountBtun = useCallback(() => {
    if (!me) return;

    if (confirm('탈퇴하시겠습니까?')) {
      return dispatch(leaveRequestAction({ userId: me.id }));
    } else {
      return null;
    }
  }, [me]);

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
