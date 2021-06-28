import { searchCommunitiesRequestAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/Layouts/AppLayout';
import CategoryLayout, {
  CategoryContent,
  CategoryHeader,
} from 'components/Layouts/CategoryLayout';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';
import wrapper from 'store/configureStore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import BoxStyleCard from 'components/Cards/BoxStyleCard';

function keyword() {
  const router = useRouter();
  const { changableCommunities } = useSelector(
    (state: RootStateInterface) => state.community
  );
  return (
    <>
      <Head>
        <title>community - {router.query.keyword} 검색</title>
      </Head>
      <AppLayout>
        <CategoryLayout>
          <CategoryHeader>
            <h1>
              &ldquo;{router.query.keyword}&rdquo;와
              <br />
              연관있는 커뮤니티 {changableCommunities.length}개
            </h1>
          </CategoryHeader>
          <CategoryContent>
            <div className="cards-container">
              {changableCommunities.map(community => (
                <div key={community.id}>
                  <Link href={`/community/${community.id}`} prefetch={false}>
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
    const keyword = String(context.query.keyword);
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch(loadMyInfoRequestAction());
    context.store.dispatch(searchCommunitiesRequestAction({ keyword }));
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default memo(keyword);
