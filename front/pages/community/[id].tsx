import { END } from '@redux-saga/core';
import { loadCommunityRequestAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/AppLayout';
import DetailPage from 'components/DetailPage';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from 'store/configureStore';

function Community() {
  const dispatch = useDispatch();
  const me = useSelector((state: RootStateInterface) => state.user.me);
  const { singleCommunity, loadCommunityError } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const router = useRouter();

  useEffect(() => {
    if (me) {
      dispatch(
        loadCommunityRequestAction({ communityId: Number(router.query.id) })
      );
    }
  }, [me, router.query]);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }

    if (loadCommunityError) {
      Router.push('/');
    }
  }, [me, loadCommunityError]);

  if (!singleCommunity) {
    return <div>잠시 기다려주세요</div>;
  }

  return (
    <AppLayout>
      <DetailPage singleCommunity={singleCommunity} />
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    const communityId = Number(context.query.id);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(
      loadCommunityRequestAction({ communityId: communityId })
    );
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Community;
