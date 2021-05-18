import styled from 'styled-components';
import { ColorAni } from 'utils/stylesUtil';

interface ICommunityCard {
  img: string | null;
}

export const CommunityCardContainer = styled.div`
  background: linear-gradient(#f0f2f0, #000c40);
  padding: 1rem;
  gap: 1rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1440px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props: ICommunityCard) => props.img});
  background-size: cover;
  background-position: center;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.5);

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props: ICommunityCard) => props.img});
  }

  .card-title {
    font-family: 'Black Han Sans', sans-serif;
    font-size: 3rem;
    color: #fff;
  }

  .card-info {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    animation: ${ColorAni} 1.5s linear infinite;

    .info-country {
      color: coral;
    }
    .info-category {
      color: cornflowerblue;
    }
    .info-users {
      color: lime;
    }
  }
`;
