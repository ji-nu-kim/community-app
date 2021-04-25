import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import { RootStateInterface } from '../interfaces/RootState';
import Head from 'next/head';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { END } from '@redux-saga/core';

function Profile() {
  const { me } = useSelector((state: RootStateInterface) => state.user);

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
        <NicknameEditForm />
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
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
