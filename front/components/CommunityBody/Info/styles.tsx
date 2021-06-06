import styled from 'styled-components';
import { ColorAni } from 'utils/stylesUtil';

export const InfoContainer = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: repeat(3, 1fr);

  .common {
    backdrop-filter: saturate(180%) blur(3px);
    -webkit-backdrop-filter: saturate(180%) blur(3px);
    padding: 1rem;
    p {
      font-size: 1.5rem;
      font-family: 'Black Han Sans', sans-serif;
      text-align: center;
      color: #039be5;
    }
    div {
      font-weight: bold;
    }
    :hover {
      animation: ${ColorAni} 1s linear infinite;
    }
  }

  .even {
    display: grid;
    grid-template-rows: 33px auto;
  }

  .odd {
    div {
      font-size: 1rem;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .info-leader {
    background: linear-gradient(
      120deg,
      rgba(238, 156, 167, 0.8),
      rgba(255, 221, 225, 0.8)
    );
  }
  .info-description {
    background: linear-gradient(
      120deg,
      rgba(168, 192, 255, 0.8),
      rgba(63, 43, 150, 0.8)
    );
  }
  .info-category {
    background: linear-gradient(
      120deg,
      rgba(48, 232, 191, 0.8),
      rgba(255, 130, 53, 0.8)
    );
  }
  .info-caution {
    background: linear-gradient(
      120deg,
      rgba(238, 9, 121, 0.8),
      rgba(255, 106, 0, 0.8)
    );
  }
  .info-community-user {
    cursor: pointer;
    background: linear-gradient(
      120deg,
      rgba(252, 234, 187, 0.8),
      rgba(248, 181, 0, 0.8)
    );
  }
  .info-requirement {
    background: linear-gradient(
      120deg,
      rgba(44, 62, 80, 0.8),
      rgba(52, 152, 219, 0.8)
    );
  }
`;
