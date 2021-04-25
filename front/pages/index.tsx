import AppLayout from '../components/AppLayout';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';

import { RootStateInterface } from '../interfaces/RootState';
import { loadPostsRequestAction } from 'actions/actionPost';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import wrapper from 'store/configureStore';
import { GetServerSideProps } from 'next';

function Home() {
  const dispatch = useDispatch();
  const me = useSelector((state: RootStateInterface) => state.user.me);
  const { mainPosts, hasMorePost, loadPostLoading } = useSelector(
    (state: RootStateInterface) => state.post
  );

  const { mainCommunities } = useSelector(
    (state: RootStateInterface) => state.community
  );

  useEffect(() => {
    function onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight - 300
      ) {
        if (hasMorePost && !loadPostLoading) {
          const lastId = mainPosts[mainPosts.length - 1].id;
          dispatch(loadPostsRequestAction({ postId: lastId }));
        }
      }
    }
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [hasMorePost, loadPostLoading, mainPosts]);

  if (!mainCommunities) {
    <AppLayout>
      <div>정보가 없음</div>
    </AppLayout>;
  }

  return (
    <AppLayout>
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async context => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(loadPostsRequestAction({ postId: 0 }));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Home;
