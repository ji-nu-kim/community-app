import AppLayout from 'components/AppLayout';
import { RootStateInterface } from 'interfaces/RootState';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import wrapper from 'store/configureStore';
import axios from 'axios';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import { END } from '@redux-saga/core';
import CommunityCard from 'components/CommunityCard';
import Link from 'next/link';
import styled from 'styled-components';
import { ColorAni } from '../utils/stylesUtil';

const MyCommunityContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-rows: 62.4px auto;

  h1 {
    margin-bottom: 0;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2.5rem;
    background: linear-gradient(#f2994a, #f2c94c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mycommunity-cards-container {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 300px));
    grid-template-rows: repeat(auto-fill, minmax(300px, 400px));
    grid-auto-flow: dense;
    justify-items: center;

    a {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      box-shadow: 0 8px 32px 2px rgba(31, 38, 135, 0.7);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border-radius: 10px;

      :hover {
        animation: ${ColorAni} 0.5s linear infinite;
      }
    }
  }
`;

function mycommunity() {
  const me = useSelector((state: RootStateInterface) => state.user.me);

  useEffect(() => {
    if (!me) {
      Router.push('/');
    }
  }, [me]);

  return (
    <AppLayout>
      <MyCommunityContainer>
        <h1>나의 커뮤니티 목록</h1>
        <div className="mycommunity-cards-container">
          {me?.Owned.map(v => (
            <Link key={v.name} href={`/community/${v.id}`}>
              <a>
                <CommunityCard name={v.name} description={v.description} />
              </a>
            </Link>
          ))}
        </div>
      </MyCommunityContainer>
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
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default mycommunity;
