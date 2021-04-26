import styled from 'styled-components';

export const CommunityCardContainer = styled.div`
  display: grid;
  grid-template-rows: 200px auto;

  .card-image {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-main {
    padding: 8px;
    line-height: 1.2;

    h2 {
      margin-top: 4px;
      font-weight: bold;
      color: #fff;
      font-size: 1.5rem;
    }

    p {
      text-indent: 4px;
      font-weight: bold;
    }
  }
`;
