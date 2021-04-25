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

interface SideBarProps {
  setCommunityModal: Dispatch<SetStateAction<boolean>>;
}

function SideBar({ setCommunityModal }: SideBarProps) {
  const router = useRouter();

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
        </div>
      </SideBarContainer>
    </>
  );
}

export default memo(SideBar);
