import { RootStateInterface } from 'interfaces/RootState';
import Link from 'next/link';
import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavWrapper, NavSearch, UserButtons, VisitorButtons } from './styles';
import {
  CaretDownOutlined,
  CaretUpOutlined,
  NotificationOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import useInput from 'hooks/useInput';
import { INotice } from 'interfaces/db';
import { checkNotificationRequestAction } from 'actions/actionUser';
import Router, { useRouter } from 'next/router';

interface NavBarProps {
  setUserInfoModal: Dispatch<SetStateAction<boolean>>;
  setNotificationModal: Dispatch<SetStateAction<boolean>>;
  userInfoModal: boolean;
  notices: INotice[] | undefined;
}

function NavBar({
  setUserInfoModal,
  userInfoModal,
  setNotificationModal,
  notices,
}: NavBarProps) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const [keyword, onChangeKeword] = useInput<string>('');
  // 새로 온 알림의 수(확인하면 사라짐)
  const newNotification = notices?.filter(notice => notice.checked === false).length;
  const path = router.asPath.split('/')[1];

  const notificationModalTrigger = useCallback(() => {
    setNotificationModal(prev => !prev);

    if (newNotification && newNotification > 0) {
      dispatch(checkNotificationRequestAction());
    }
  }, [setNotificationModal, newNotification]);

  const userInfoModalTrigger = useCallback(() => {
    setUserInfoModal(prev => !prev);
  }, [setUserInfoModal]);

  const sumbitKeword = useCallback(() => {
    if (keyword !== '') {
      return Router.push(`/search/${encodeURIComponent(keyword)}`);
    }
  }, [keyword]);

  return (
    <>
      <NavWrapper>
        <div className="nav-logo">
          <h1>Community</h1>
        </div>

        {path === 'search' && (
          <NavSearch>
            <input
              type="search"
              placeholder="커뮤니티 검색"
              onChange={onChangeKeword}
              onKeyPress={e => e.key === 'Enter' && sumbitKeword()}
            />
            <button onClick={sumbitKeword}>
              <SearchOutlined />
            </button>
          </NavSearch>
        )}
        {me ? (
          <UserButtons>
            <div className="notification-button" onClick={notificationModalTrigger}>
              <NotificationOutlined />
              {newNotification && newNotification > 0 ? (
                <div className="notification-numbers">{newNotification}</div>
              ) : null}
            </div>
            <div
              className="info-button glass-style-button button-style"
              onClick={userInfoModalTrigger}
            >
              <div>{me?.nickname}</div>
              <div>{userInfoModal ? <CaretUpOutlined /> : <CaretDownOutlined />}</div>
            </div>
          </UserButtons>
        ) : (
          <VisitorButtons>
            <Link href="/signup">
              <a>
                <div className="button-style">가입하기</div>
              </a>
            </Link>
            <Link href="/login">
              <a>
                <div className="glass-style-button button-style">로그인하기</div>
              </a>
            </Link>
          </VisitorButtons>
        )}
      </NavWrapper>
    </>
  );
}

export default memo(NavBar);
