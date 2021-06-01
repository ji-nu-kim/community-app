import { RootStateInterface } from 'interfaces/RootState';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NavWrapper, NavSearch, UserButtons, VisitorButtons } from './styles';
import {
  CaretDownOutlined,
  CaretUpOutlined,
  NotificationOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import useInput from 'hooks/useInput';
import { useRouter } from 'next/router';

interface NavListProps {
  setUserInfoModal: Dispatch<SetStateAction<boolean>>;
  userInfoModal: boolean;
}

function NavList({ setUserInfoModal, userInfoModal }: NavListProps) {
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const { pathname } = useRouter();
  const [searchValue, onChangeSearch] = useInput<string>('');

  const notificationModalTrigger = useCallback(() => {}, []);

  const userInfoModalTrigger = useCallback(() => {
    setUserInfoModal(prev => !prev);
  }, [setUserInfoModal]);

  const sumbitSearch = useCallback(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <>
      <NavWrapper>
        <div className="nav-logo">
          <h1>Community</h1>
        </div>
        {pathname === '/search' ? (
          <NavSearch>
            <input
              type="search"
              placeholder="검색"
              onChange={onChangeSearch}
              onKeyDown={sumbitSearch}
            />
            <button onClick={sumbitSearch}>
              <SearchOutlined />
            </button>
          </NavSearch>
        ) : null}
        {me ? (
          <UserButtons>
            <div
              className="notification-button"
              onClick={notificationModalTrigger}
            >
              <NotificationOutlined />
            </div>
            <div
              className="info-button glass-style-button button-style"
              onClick={userInfoModalTrigger}
            >
              <div>{me?.nickname}</div>
              <div>
                {userInfoModal ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </div>
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
                <div className="glass-style-button button-style">
                  로그인하기
                </div>
              </a>
            </Link>
          </VisitorButtons>
        )}
      </NavWrapper>
    </>
  );
}

export default NavList;
