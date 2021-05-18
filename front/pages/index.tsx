import AppLayout from '../components/AppLayout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import { RootStateInterface } from '../interfaces/RootState';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { loadCommunitiesRequestAction } from 'actions/actionCommunity';
import wrapper from 'store/configureStore';
import { GetServerSideProps } from 'next';

function Home() {
  const dispatch = useDispatch();
  const { mainCommunities, hasMoreCommunity, loadCommunitiesLoading } =
    useSelector((state: RootStateInterface) => state.community);

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMoreCommunity && !loadCommunitiesLoading) {
          const lastId = mainCommunities[mainCommunities.length - 1].id;
          dispatch(loadCommunitiesRequestAction({ communityId: lastId }));
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMoreCommunity, loadCommunitiesLoading, mainCommunities]);

  if (!mainCommunities) {
    <AppLayout>
      <div>정보가 없음</div>
    </AppLayout>;
  }

  return (
    <AppLayout>
      {/* 커뮤니티 전체 목록 가져옴. 디자인하기 */}
      <div>community 목록보여주기</div>
      {/* {mainCommunities &&
        mainCommunities.map(community => {
          <div>
            <h1>{community.name}</h1>
            <p>{community.description}</p>
          </div>;
        })} */}
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
