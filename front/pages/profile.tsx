import AppLayout from '../components/AppLayout';
import { RootStateInterface } from '../interfaces/RootState';
import Head from 'next/head';
import Router from 'next/router';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCountryRequestAction, loadMyInfoRequestAction } from 'actions/actionUser';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { END } from '@redux-saga/core';
import { UserOutlined } from '@ant-design/icons';
import ProfileLayout, {
  ProfileGridContents,
  ProfileGridHeader,
} from 'components/Layouts/ProfileLayout';
import UserProfileModifyModal from 'components/Modals/UserProfileModifyModal';
import { loadCategoriesRequestAction } from 'actions/actionCommunity';
import SearchSectionCard from 'components/SearchSectionCard';
import SearchAddressModal from 'components/Modals/SearchAddressModal';

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
        <title>프로필</title>
      </Head>
      <AppLayout>
        <ProfileLayout>
          <div className="profile-grid">
            <ProfileGridHeader>
              <div className="header-left">
                <div className="header-image">
                  {me?.profilePhoto ? (
                    <img
                      src={`http://localhost:3065/${me?.profilePhoto}`}
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
            </ProfileGridHeader>
            <ProfileGridContents>
              <div className="contents-vertical">
                <h1>나의 카테고리 리스트</h1>
                <div className="contents-container">
                  {me?.Categories?.map(category => (
                    <div key={category.name} className="content-container">
                      <SearchSectionCard
                        id={category.id}
                        key={category.name}
                        name={category.name}
                        img={`http://localhost:3065/${category.profilePhoto}`}
                        width="250"
                        height="120"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="contents-vertical">
                <h1>나의 커뮤니티 리스트</h1>
                <div className="contents-container">
                  {me?.Communities?.map(community => (
                    <div key={community.id} className="content-container">
                      <SearchSectionCard
                        id={community.id}
                        name={community.communityName}
                        img={
                          community.profilePhoto
                            ? `http://localhost:3065/${community.profilePhoto}`
                            : null
                        }
                        width="250"
                        height="120"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ProfileGridContents>
          </div>
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
