import { END } from '@redux-saga/core';
import {
  loadCategoryCommunitiesRequestAction,
  loadCategoryRequestAction,
} from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/Layouts/AppLayout';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from 'store/configureStore';
import CategoryLayout, {
  CategoryContent,
  CategoryHeader,
} from 'components/Layouts/CategoryLayout';
import BoxStyleCard from 'components/Cards/BoxStyleCard';
import Link from 'next/link';
import Head from 'next/head';

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
            const lastId = changableCommunities[changableCommunities.length - 1].id;
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
  }, [hasMoreCommunity, loadCommunitiesLoading, changableCommunities, router.query.id]);

  if (!singleCategory) {
    return <div>잠시만 기다려주세요</div>;
  }

  return (
    <>
      <Head>
        <title>community - {singleCategory.name} 카테고리</title>
      </Head>
      <AppLayout>
        <CategoryLayout img={singleCategory.profilePhoto}>
          <CategoryHeader>
            <h1>
              {singleCategory.name}
              <br />
              커뮤니티 {changableCommunities.length}개
            </h1>
          </CategoryHeader>
          <CategoryContent>
            <div className="cards-container">
              {changableCommunities.map(community => (
                <div key={community.id}>
                  <Link href={`/community/${community.id}`}>
                    <a>
                      <BoxStyleCard
                        profilePhoto={community.profilePhoto}
                        categoryName={community.Categories[0].name}
                        country={community.country}
                        communityName={community.communityName}
                      />
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </CategoryContent>
        </CategoryLayout>
      </AppLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async context => {
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
  }
);

export default Category;
