import styled from 'styled-components';

export const HomeSectionContainer = styled.div`
  height: 100%;
  background: linear-gradient(150deg, rgba(255, 175, 189, 1), #ffe1a0);

  h1 {
    font-size: 2rem;
    color: #fff;
    font-family: 'Black Han Sans', sans-serif;
  }

  section {
    padding: 1rem;
    display: grid;
    grid-template-rows: 66px auto;

    span {
      text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
    }

    .cards-container {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, 240px);
      justify-content: space-evenly;
    }
  }

  .section-1 {
    span {
      color: #73d982;
    }
  }

  .section-2 {
    span {
      color: #8435f2;
    }
  }
`;
