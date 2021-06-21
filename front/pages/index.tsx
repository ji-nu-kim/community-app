import AppLayout from '../components/Layouts/AppLayout';
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
import BoxStyleCard from 'components/Cards/BoxStyleCard';
import HomeLayout from 'components/Layouts/HomeLayout';
import Link from 'next/link';

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
        console.log(1);
        if (
          window.scrollY + document.documentElement.clientHeight >=
          document.documentElement.scrollHeight - 200
        ) {
          console.log(2);
          if (hasMoreCommunity && !loadCommunitiesLoading) {
            console.log(3);
            const lastId = changableCommunities[changableCommunities.length - 1].id;
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
      <HomeLayout>
        {/* 유저정보가 없어도 보여지는 카드 */}
        <section>
          <h1>새로운 커뮤니티를 만나보세요!</h1>
          <div className="cards-container">
            {mainCommunities.map(community => (
              <div key={`new${community.id}`}>
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
        </section>

        {/* 유저정보가 있을 때 보여지는 카드  */}
        {me && changableCommunities && (
          <section>
            <h1>우리동네 커뮤니티</h1>
            <div className="cards-container">
              {changableCommunities.map(community => (
                <div key={`country${community.id}`}>
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
          </section>
        )}
      </HomeLayout>
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
    context.store.dispatch(loadCommunitiesRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default memo(Home);
