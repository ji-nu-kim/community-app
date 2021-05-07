import styled from 'styled-components';

interface IBackgroundImage {
  bg: string;
}

export const DetailBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
    url(${(props: IBackgroundImage) => (props.bg ? props.bg : null)});
  background-position: center;
  background-size: cover;
  .detail-grid {
    color: #fff;
    display: grid;
    grid-template-rows: 200px auto;
  }
`;

export const DetailHeader = styled.div`
  padding: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.3));
  display: grid;
  grid-template-columns: auto 76px;

  .header-left {
    display: flex;
    align-items: center;
    .header-image {
      width: 150px;
      height: 150px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        border-radius: 50%;
        object-fit: cover;
      }

      .header-icon {
        color: #cacaca;
        font-size: 3rem;
      }
    }
    .header-text {
      margin-left: 1rem;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        font-size: 0.75rem;
        color: #039be5;
        font-weight: bold;
      }
      h1,
      h2 {
        color: #fff;
        font-weight: bold;
      }

      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
  .header-right {
    button {
      border: none;
      color: #fff;
      background: rgba(3, 155, 229, 0.7);
      height: 28px;
      font-size: 0.75rem;

      :hover {
        cursor: pointer;
        color: rgba(255, 255, 255, 0.7);
        background: rgba(3, 155, 229, 0.3);
      }
    }
  }
`;

export const DetailMain = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 1440px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }

  .detail-info {
    h1 {
      font-family: 'Black Han Sans', sans-serif;
      font-size: 2.5rem;
      background: linear-gradient(#108dc7, #ef8e38);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
`;
