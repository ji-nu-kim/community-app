import { RootStateInterface } from 'interfaces/RootState';
import Link from 'next/link';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { NavWrapper, StyleSearch } from './styles';
import {
  CaretDownOutlined,
  CaretUpOutlined,
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
  const userInfoModalTrigger = useCallback(() => {
    setUserInfoModal(prev => !prev);
  }, [setUserInfoModal]);

  const [searchValue, onChangeSearch] = useInput<string>('');
  const sumbitSearch = useCallback(() => {
    console.log(searchValue);
  }, [searchValue]);
  return (
    <>
      <NavWrapper>
        <div className="logo-section">
          <h1>Community</h1>
        </div>
        {pathname === '/search' ? (
          <StyleSearch>
            <input
              type="search"
              placeholder="검색"
              onChange={onChangeSearch}
              onKeyDown={sumbitSearch}
            />
            <button onClick={sumbitSearch}>
              <SearchOutlined />
            </button>
          </StyleSearch>
        ) : null}
        {me ? (
          <>
            <div
              className="btn-userinfo btn-glass-style btn"
              onClick={userInfoModalTrigger}
            >
              <div>{me?.nickname}</div>
              <div>
                {userInfoModal ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </div>
            </div>
          </>
        ) : (
          <div className="btn-group">
            <Link href="/signup">
              <a>
                <div className="btn-signup btn">가입하기</div>
              </a>
            </Link>
            <Link href="/login">
              <a>
                <div className="btn-glass-style btn">로그인하기</div>
              </a>
            </Link>
          </div>
        )}
      </NavWrapper>
    </>
  );
}

export default NavList;
