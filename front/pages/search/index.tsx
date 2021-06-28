import AppLayout from 'components/Layouts/AppLayout';
import React from 'react';
import Message from 'components/Message';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { END } from 'redux-saga';
import Head from 'next/head';

function Search() {
  return (
    <>
      <Head>
        <title>community - 검색</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Yeon+Sung&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppLayout>
        <Message text="커뮤니티를 검색하세요!" />
      </AppLayout>
    </>
  );
}

export default Search;

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
