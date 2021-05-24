import AppLayout from 'components/AppLayout';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { END } from '@redux-saga/core';
import MyCommunityCard from 'components/MyCommunityCard';
import Message from 'components/Message';

function mycommunity() {
  const me = useSelector((state: RootStateInterface) => state.user.me);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  return (
    <AppLayout>
      {me?.Communities.length ? (
        <MyCommunityCard communities={me.Communities} />
      ) : (
        <Message text="커뮤니티에 가입해보세요옹~" />
      )}
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default mycommunity;
