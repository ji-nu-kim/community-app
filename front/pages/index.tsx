import AppLayout from '../components/AppLayout';
import React from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import { RootStateInterface } from '../interfaces/RootState';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { loadCommunitiesRequestAction } from 'actions/actionCommunity';
import wrapper from 'store/configureStore';
import { GetServerSideProps } from 'next';
import HomeSection from 'components/HomeSection';

function Home() {
  const { me } = useSelector((state: RootStateInterface) => state.user);
  const { mainCommunities } = useSelector(
    (state: RootStateInterface) => state.community
  );

  // useEffect(() => {
  //   function onScroll() {
  //     if (
  //       window.scrollY + document.documentElement.clientHeight >=
  //       document.documentElement.scrollHeight - 300
  //     ) {
  //       if (hasMoreCommunity && !loadCommunitiesLoading) {
  //         const lastId = mainCommunities[mainCommunities.length - 1].id;
  //         dispatch(loadCommunitiesRequestAction({ communityId: lastId }));
  //       }
  //     }
  //   }
  //   window.addEventListener('scroll', onScroll);

  //   return () => window.removeEventListener('scroll', onScroll);
  // }, [hasMoreCommunity, loadCommunitiesLoading, mainCommunities]);

  return (
    <AppLayout>
      <HomeSection communities={mainCommunities} user={me} />
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
    context.store.dispatch(loadCommunitiesRequestAction({ communityId: 0 }));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  });

export default Home;
