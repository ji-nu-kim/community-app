import React, { Dispatch, memo, SetStateAction, useCallback } from 'react';
import { SideBarContainer } from './styles';
import {
  HomeOutlined,
  SearchOutlined,
  SmileOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootStateInterface } from 'interfaces/RootState';
import { useSelector } from 'react-redux';

interface SideBarProps {
  setCommunityModal: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ setCommunityModal }: SideBarProps) {
  const router = useRouter();
  const Owned = useSelector(
    (state: RootStateInterface) => state.user.me?.Owned
  );

  const openCommunityModal = useCallback(() => {
    setCommunityModal(prev => !prev);
  }, []);

  return (
    <>
      <SideBarContainer>
        <div className="menu-section">
          <h2>메인메뉴</h2>
          <ul>
            <li>
              <Link href="/">
                <a className={router.pathname === '/' ? 'active' : 'null'}>
                  <span>
                    <HomeOutlined />
                  </span>
                  홈
                </a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a
                  className={router.pathname === '/search' ? 'active' : 'null'}
                >
                  <span>
                    <SearchOutlined />
                  </span>
                  검색하기
                </a>
              </Link>
            </li>
            <li>
              <Link href="/mycommunity">
                <a
                  className={
                    router.pathname === '/mycommunity' ? 'active' : 'null'
                  }
                >
                  <span>
                    <SmileOutlined />
                  </span>
                  나의 커뮤니티
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="community-section">
          <h2>커뮤니티메뉴</h2>
          <div className="create-community" onClick={openCommunityModal}>
            <span>
              <PlusSquareOutlined />
            </span>
            커뮤니티 만들기
          </div>
          <ul>
            {Owned &&
              Owned.map(v => (
                <li key={v.name}>
                  <Link href={`/community/${v.id}`}>
                    <a
                      className={
                        Number(router.query.name) === v.id ? 'active' : 'null'
                      }
                    >
                      <span>
                        {v.profilePhoto ? (
                          <img src={v.profilePhoto} alt="profile image" />
                        ) : (
                          v.name[0]
                        )}
                      </span>
                      {v.name.length > 10
                        ? `${v.name.slice(0, 10)}...`
                        : v.name}
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </SideBarContainer>
    </>
  );
}

export default memo(SideBar);
