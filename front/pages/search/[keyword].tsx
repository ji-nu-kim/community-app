import { searchCommunitiesRequestAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/Layouts/AppLayout';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import wrapper from 'store/configureStore';
import Head from 'next/head';
import { useRouter } from 'next/router';

function keyword() {
  const router = useRouter();
  const { changableCommunities } = useSelector(
    (state: RootStateInterface) => state.community
  );
  return (
    <>
      <Head>
        <title>community - {router.query.keyword} 검색</title>
      </Head>
      <AppLayout>
        <div>
          <div>&ldquo;검색어&rdquo;와 관련된 커뮤니티 몇개</div>
          <div>{changableCommunities.length ? '있음' : '없음'}</div>
        </div>
      </AppLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    const keyword = String(context.query.keyword);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(searchCommunitiesRequestAction({ keyword }));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default memo(keyword);
