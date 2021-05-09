import { END } from '@redux-saga/core';
import { loadCommunityRequestAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/AppLayout';
import DetailPage from 'components/DetailPage';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from 'store/configureStore';

import CommunitymodifyModal from 'components/Modals/CommunityModifyModal';

function Community() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { singleCommunity, loadCommunityError } = useSelector(
    (state: RootStateInterface) => state.community
  );
  const { changeCommunityInfoDone } = useSelector(
    (state: RootStateInterface) => state.community
  );

  const [communityModifyModal, setCommunityModifyModal] = useState(false);

  useEffect(() => {
    dispatch(
      loadCommunityRequestAction({ communityId: Number(router.query.id) })
    );
  }, [router.query.id]);

  useEffect(() => {
    if (changeCommunityInfoDone) {
      dispatch(
        loadCommunityRequestAction({ communityId: Number(router.query.id) })
      );
      setCommunityModifyModal(false);
    }
  }, [changeCommunityInfoDone, router.query.id]);

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
      <DetailPage
        singleCommunity={singleCommunity}
        setCommunityModifyModal={setCommunityModifyModal}
      />
      {communityModifyModal && (
        <CommunitymodifyModal
          setCommunityModifyModal={setCommunityModifyModal}
        />
      )}
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
