import { END } from '@redux-saga/core';
import { loadCommunityRequestAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { loadPostsRequestAction } from 'actions/actionPost';
import axios from 'axios';
import AppLayout from 'components/AppLayout';
import CommunityBody from 'components/CommunityBody';
import CommunityHeader from 'components/CommunityHeader';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import Router from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import wrapper from 'store/configureStore';
import styled from 'styled-components';

interface IBackgroundImage {
  backgroundImage: string | null;
}

const CommunityContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props: IBackgroundImage) => props.backgroundImage && props.backgroundImage});
  background-position: center;
  background-size: cover;
`;

function Community() {
  const { singleCommunity, loadCommunityError } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const { me } = useSelector((state: RootStateInterface) => state.user);
  useEffect(() => {
    if (loadCommunityError) {
      Router.push('/');
    }
  }, [loadCommunityError]);

  if (!singleCommunity) {
    return <div>잠시 기다려주세요</div>;
  }

  return (
    <AppLayout>
      <CommunityContainer
        backgroundImage={
          singleCommunity.profilePhoto
            ? `http://localhost:3065/${singleCommunity.profilePhoto}`
            : null
        }
      >
        <CommunityHeader singleCommunity={singleCommunity} me={me} />
        <CommunityBody singleCommunity={singleCommunity} />
      </CommunityContainer>
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
    context.store.dispatch(loadCommunityRequestAction({ communityId: communityId }));
    context.store.dispatch(
      loadPostsRequestAction({ communityId: communityId, postId: 0 })
    );
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Community;
