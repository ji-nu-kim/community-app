import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CategoryLayoutProps {
  children: ReactNode;
  img?: string;
}

interface IBackgroundProps {
  img: string | null;
}

const CategoryContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: IBackgroundProps) => props.img && props.img});
  background-position: center;
  background-size: cover;
`;

export const CategoryHeader = styled.div`
  height: 200px;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3));
  position: relative;

  h1 {
    white-space: pre-line;
    position: absolute;
    bottom: 50px;
    left: 50px;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    font-family: 'Noto Sans KR', sans-serif;
    vertical-align: bottom;
  }
`;

export const CategoryContent = styled.div`
  padding: 1rem;

  .cards-container {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, 240px);
    justify-content: space-evenly;
  }
`;

function CategoryLayout({ children, img }: CategoryLayoutProps) {
  return (
    <CategoryContainer img={img ? `http://localhost:3065/${img}` : null}>
      {children}
    </CategoryContainer>
  );
}

export default CategoryLayout;
