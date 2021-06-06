import AppLayout from '../components/AppLayout';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import { RootStateInterface } from '../interfaces/RootState';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import {
  loadCommunitiesRequestAction,
  loadCountryCommunitiesRequestAction,
} from 'actions/actionCommunity';
import wrapper from 'store/configureStore';
import { GetServerSideProps } from 'next';
import HomeSection from 'components/HomeSection';

function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const {
    mainCommunities,
    changableCommunities,
    hasMoreCommunity,
    loadCommunitiesLoading,
  } = useSelector((state: RootStateInterface) => state.community);

  useEffect(() => {
    if (me?.country) {
      dispatch(
        loadCountryCommunitiesRequestAction({
          country: me.country,
          communityId: 0,
        })
      );
    }
  }, [me?.country]);

  useEffect(() => {
    function onScroll() {
      if (me?.country && changableCommunities.length) {
        if (
          window.scrollY + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 300
        ) {
          if (hasMoreCommunity && !loadCommunitiesLoading) {
            const lastId =
              changableCommunities[changableCommunities.length - 1].id;
            dispatch(
              loadCountryCommunitiesRequestAction({
                country: me.country,
                communityId: lastId,
              })
            );
          }
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMoreCommunity, loadCommunitiesLoading, changableCommunities, me]);

  return (
    <AppLayout>
      <HomeSection
        communities={mainCommunities}
        changableCommunities={changableCommunities}
        user={me}
      />
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
    context.store.dispatch(loadCommunitiesRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default memo(Home);
