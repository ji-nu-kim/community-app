import React, { memo } from 'react';
import { SideBarContainer } from './styles';
import {
  HomeOutlined,
  AppstoreOutlined,
  SearchOutlined,
  PlusSquareOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootStateInterface } from 'interfaces/RootState';
import { useSelector } from 'react-redux';

function SideBar() {
  const router = useRouter();
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const path = router.asPath.split('/');

  return (
    <>
      <SideBarContainer>
        <div className="menu-section">
          <h2>메인메뉴</h2>
          <ul>
            <li>
              <Link href="/">
                <a className={path[1] === '' ? 'active' : 'null'}>
                  <span>
                    <HomeOutlined />
                  </span>
                  홈
                </a>
              </Link>
            </li>
            <li>
              <Link href="/category">
                <a className={path[1] === 'category' ? 'active' : 'null'}>
                  <span>
                    <AppstoreOutlined />
                  </span>
                  카테고리
                </a>
              </Link>
            </li>
            <li>
              <Link href="/search">
                <a className={path[1] === 'search' ? 'active' : 'null'}>
                  <span>
                    <SearchOutlined />
                  </span>
                  검색
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
                        path[1] === 'community' && Number(path[2]) === v.id
                          ? 'active'
                          : 'null'
                      }
                    >
                      <span>
                        {v.profilePhoto ? (
                          <img
                            width="24px"
                            height="24px"
                            src={`${process.env.NEXT_PUBLIC_BACK_URL_KEY}/${v.profilePhoto}`}
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
