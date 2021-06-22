import AppLayout from '../components/Layouts/AppLayout';
import { RootStateInterface } from '../interfaces/RootState';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCountryRequestAction, loadMyInfoRequestAction } from 'actions/actionUser';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { END } from '@redux-saga/core';
import { UserOutlined } from '@ant-design/icons';
import ProfileLayout, {
  ProfileContent,
  ProfileHeader,
} from 'components/Layouts/ProfileLayout';
import { loadCategoriesRequestAction } from 'actions/actionCommunity';
import RoundStyleCard from 'components/Cards/RoundStyleCard';

const UserProfileModifyModal = dynamic(
  () => import('components/Modals/UserProfileModifyModal')
);
const SearchAddressModal = dynamic(() => import('components/Modals/SearchAddressModal'));

function Profile() {
  const dispatch = useDispatch();
  const { me, changeProfileDone } = useSelector(
    (state: RootStateInterface) => state.user
  );
  const [userProfileModifyModal, setUserProfileModifyModal] = useState(false);
  const [showSearchAddressModal, setShowSearchAdressModal] = useState(false);
  const [modifyCountry, setModifyCountry] = useState('');

  const openSearchAddressModal = useCallback(() => {
    setShowSearchAdressModal(true);
  }, []);

  const closeSearchAddressModal = useCallback(() => {
    setShowSearchAdressModal(false);
    setModifyCountry('');
  }, []);

  const profileModifyModalTrigger = useCallback(() => {
    setUserProfileModifyModal(prev => !prev);
  }, []);

  useEffect(() => {
    if (changeProfileDone) {
      setUserProfileModifyModal(false);
    }
  }, [changeProfileDone]);

  useEffect(() => {
    if (modifyCountry !== '') {
      if (confirm(`주소를 ${modifyCountry}로 변경하시겠습니까?`)) {
        dispatch(changeCountryRequestAction({ country: modifyCountry }));
      } else {
        alert('취소했습니다');
      }
    }
  }, [modifyCountry]);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  return (
    <>
      <Head>
        <title>프로필 - community</title>
      </Head>
      <AppLayout>
        <ProfileLayout>
          <ProfileHeader>
            <div className="header-left">
              <div className="header-image">
                {me?.profilePhoto ? (
                  <img
                    src={`${process.env.NEXT_PUBLIC_BACK_URL_KEY}/${me?.profilePhoto}`}
                    width="150"
                    height="150"
                    alt="profile-image"
                  />
                ) : (
                  <UserOutlined className="header-icon" />
                )}
              </div>
              <div className="header-text">
                <p>프로필</p>
                <h1>{me?.nickname}</h1>
                <p className="text-country" onClick={openSearchAddressModal}>
                  {me?.country}
                </p>
              </div>
            </div>
            <div className="header-right">
              <button onClick={profileModifyModalTrigger}>수정하기</button>
            </div>
          </ProfileHeader>
          <ProfileContent>
            <div>
              <h1>나의 카테고리 리스트</h1>
              <div className="cards-container">
                {me?.Categories?.map(category => (
                  <div key={category.name}>
                    <Link href={`/category/${category.id}`}>
                      <a>
                        <RoundStyleCard
                          name={category.name}
                          img={`${process.env.NEXT_PUBLIC_BACK_URL_KEY}/${category.profilePhoto}`}
                          width="240"
                          height="220"
                        />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h1>나의 커뮤니티 리스트</h1>
              <div className="cards-container">
                {me?.Communities?.map(community => (
                  <div key={community.communityName}>
                    <Link href={`/community/${community.id}`}>
                      <a>
                        <RoundStyleCard
                          name={community.communityName}
                          img={
                            community.profilePhoto
                              ? `${process.env.NEXT_PUBLIC_BACK_URL_KEY}/${community.profilePhoto}`
                              : null
                          }
                          width="240"
                          height="220"
                        />
                      </a>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </ProfileContent>
        </ProfileLayout>

        {userProfileModifyModal && (
          <UserProfileModifyModal setUserProfileModifyModal={setUserProfileModifyModal} />
        )}
        {showSearchAddressModal && (
          <SearchAddressModal
            closeSearchAddressModal={closeSearchAddressModal}
            setCountry={setModifyCountry}
            type="village"
          />
        )}
      </AppLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(loadCategoriesRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default memo(Profile);
