import { END } from '@redux-saga/core';
import { loadCategoriesRequestAction } from 'actions/actionCommunity';
import { loadMyInfoRequestAction } from 'actions/actionUser';
import axios from 'axios';
import AppLayout from 'components/Layouts/AppLayout';
import RoundStyleCard from 'components/Cards/RoundStyleCard';
import { RootStateInterface } from 'interfaces/RootState';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import wrapper from 'store/configureStore';
import styled from 'styled-components';
import Head from 'next/head';

const StyleContainer = styled.div`
  padding: 1rem;
  h1 {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 2rem;
    color: hotpink;
  }
  .cards-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, auto));
  }
`;

function Category() {
  const mainCategories = useSelector(
    (state: RootStateInterface) => state.community.mainCategories
  );

  return (
    <>
      <Head>
        <title>community - 카테고리</title>
      </Head>
      <AppLayout>
        <StyleContainer>
          <h1>취미 찾아보기</h1>
          <div className="cards-container">
            {mainCategories.map(category => (
              <div key={category.name}>
                <Link href={`/category/${category.id}`}>
                  <a>
                    <RoundStyleCard
                      name={category.name}
                      img={`http://localhost:3065/${category.profilePhoto}`}
                      width="240"
                      height="220"
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </StyleContainer>
      </AppLayout>
    </>
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
    context.store.dispatch(loadCategoriesRequestAction());
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Category;
