import { END } from '@redux-saga/core';
import { loadCategoriesReqeustAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/AppLayout';
import SearchSection from 'components/SearchSection';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import React from 'react';
import { useSelector } from 'react-redux';
import wrapper from 'store/configureStore';

function search() {
  const mainCategories = useSelector(
    (state: RootStateInterface) => state.community.mainCategories
  );

  return (
    <AppLayout>
      <SearchSection
        title="가장 인기있는 취미"
        categories={mainCategories.slice(0, 5)}
      />
      <SearchSection title="모든 취미" categories={mainCategories} />
    </AppLayout>
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

export default search;
