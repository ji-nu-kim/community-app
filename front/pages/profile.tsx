import AppLayout from '../components/AppLayout';
import { RootStateInterface } from '../interfaces/RootState';
import Head from 'next/head';
import Router from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { END } from '@redux-saga/core';

import { UserOutlined } from '@ant-design/icons';
import ProfileLayout, {
  ProfileGridCategory,
  ProfileGridHeader,
} from 'components/Layouts/ProfileLayout';
import ProfileModifyModal from 'components/Modals/ProfileModifyModal';
import { loadCategoriesReqeustAction } from 'actions/actionCommunity';

function Profile() {
  const { me, changeProfileDone } = useSelector(
    (state: RootStateInterface) => state.user
  );
  const [profileModifyModal, setProfileModifyModal] = useState(false);

  const profileModifyModalTrigger = useCallback(() => {
    setProfileModifyModal(prev => !prev);
  }, []);

  useEffect(() => {
    if (changeProfileDone) {
      setProfileModifyModal(false);
    }
  }, [changeProfileDone]);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  if (!me) {
    return null;
  }

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
                  {me.profilePhoto ? (
                    <img
                      src={`http://localhost:3065/${me.profilePhoto}`}
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
                  <h1>{me.nickname}</h1>
                  <h2>{me.country}</h2>
                </div>
              </div>
              <div className="header-right">
                <button onClick={profileModifyModalTrigger}>프로필수정</button>
              </div>
            </ProfileGridHeader>
            <ProfileGridCategory>
              <h1>나의 카테고리</h1>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                }}
              >
                {me.Categories?.map(v => (
                  <div key={v.name}>
                    <img
                      width="100"
                      src={`http://localhost:3065/${v.profilePhoto}`}
                      alt="profile-image"
                    />
                    <div>{v.name}</div>
                  </div>
                ))}
              </div>
            </ProfileGridCategory>
            <div>커뮤니티 리스트</div>
          </div>
        </ProfileLayout>

        {profileModifyModal && (
          <ProfileModifyModal setProfileModifyModal={setProfileModifyModal} />
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
    context.store.dispatch(loadCategoriesReqeustAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
