import styled from 'styled-components';

export const HomeCardContainer = styled.div`
  width: 250px;
  height: 260px;
  cursor: pointer;
  margin-right: 2rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 1),
    rgba(255, 255, 255, 0.4)
  );
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.4);

  :hover {
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    );

    img {
      filter: grayscale(180%);
    }
  }

  img {
    filter: saturate(120%);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    object-fit: cover;
  }

  .image-cover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 166px;
  }

  .homecard-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-family: 'Noto Sans KR', sans-serif;
    .info-title {
      font-weight: bold;
      font-size: 1rem;
    }
    .info-country {
      color: #aaabaf;
      font-size: 0.75rem;
    }
    .info-category {
      font-weight: bold;
      color: #ff5edc;
    }
  }
`;
