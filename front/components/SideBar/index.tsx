import React, { memo } from 'react';
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

function SideBar() {
  const router = useRouter();
  const { me } = useSelector((state: RootStateInterface) => state.user);

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
          {me && (
            <Link href="/makecommunity">
              <a className="make-community">
                <span>
                  <PlusSquareOutlined />
                </span>
                커뮤니티 만들기
              </a>
            </Link>
          )}
          <ul>
            {me?.Communities &&
              me.Communities.map(v => (
                <li key={v.communityName}>
                  <Link href={`/community/${v.id}`}>
                    <a
                      className={
                        Number(router.query.name) === v.id ? 'active' : 'null'
                      }
                    >
                      <span>
                        {v.profilePhoto ? (
                          <img
                            width="24px"
                            height="24px"
                            src={`http://localhost:3065/${v.profilePhoto}`}
                            alt="profile image"
                          />
                        ) : (
                          v.communityName[0]
                        )}
                      </span>
                      {v.communityName.length > 10
                        ? `${v.communityName.slice(0, 10)}...`
                        : v.communityName}
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
