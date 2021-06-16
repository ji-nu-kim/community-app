import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 240px;
  height: 260px;
  cursor: pointer;
  background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.4);

  :hover {
    outline: 4px solid hotpink;
  }

  img {
    filter: saturate(120%);
    object-fit: cover;
  }

  .fake-image {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    height: 166px;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
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
