import styled from 'styled-components';

export const GridContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  height: 100%;
  width: 80%;
  gap: 0.5rem;
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }

  &.collapse {
    display: block;
  }
`;

export const CommunityDetail = styled.div`
  display: grid;
  grid-template-rows: 44px 1fr 1fr;
  gap: 0.25rem;

  h1,
  h2,
  p {
    margin: 0;
  }
`;

export const DetailHeader = styled.header`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  h2 {
    font-weight: bold;
    color: cornflowerblue;
  }

  .btn-wrapper {
    display: flex;

    .btn {
      cursor: pointer;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-left: 0.5rem;
      :hover {
        opacity: 0.5;
      }
    }

    .btn-red {
      background: #f96057;
    }

    .btn-yellow {
      background: #f8ce52;
    }

    .btn-green {
      background: #5fcf65;
    }
  }
`;

export const DetailMain = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-template-rows: repeat(auto-fill, minmax(200px, auto));

  .detail-image {
    border: 1px solid coral;
  }
`;

export const DetailSub = styled.div`
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;
