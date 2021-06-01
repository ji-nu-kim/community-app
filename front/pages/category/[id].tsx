import { END } from '@redux-saga/core';
import {
  loadCategoryCommunitiesRequestAction,
  loadCategoryRequestAction,
} from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/AppLayout';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from 'store/configureStore';
import CategorySection from 'components/CategorySection';

function Category() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    changableCommunities,
    hasMoreCommunity,
    loadCommunitiesLoading,
    singleCategory,
  } = useSelector((state: RootStateInterface) => state.community);

  useEffect(() => {
    function onScroll() {
      if (changableCommunities.length) {
        if (
          window.scrollY + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 300
        ) {
          if (hasMoreCommunity && !loadCommunitiesLoading) {
            const categoryId = Number(router.query.id);
            const lastId =
              changableCommunities[changableCommunities.length - 1].id;
            dispatch(
              loadCategoryCommunitiesRequestAction({
                categoryId,
                communityId: lastId,
              })
            );
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [
    hasMoreCommunity,
    loadCommunitiesLoading,
    changableCommunities,
    router.query.id,
  ]);

  return (
    <AppLayout>
      <CategorySection
        changableCommunities={changableCommunities}
        singleCategory={singleCategory}
      />
    </AppLayout>
  );
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    const categoryId = Number(context.query.id);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(loadCategoryRequestAction({ categoryId }));
    context.store.dispatch(
      loadCategoryCommunitiesRequestAction({
        categoryId,
        communityId: 0,
      })
    );
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default Category;
