import styled from 'styled-components';
import { ColorAni } from 'utils/stylesUtil';

interface IBackgroundImage {
  bg: string;
}

export const DetailBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${(props: IBackgroundImage) => (props.bg ? props.bg : null)});
  background-position: center;
  background-size: cover;
  .detail-grid {
    color: #fff;
    display: grid;
    grid-template-rows: 200px calc(100vh - 244px);
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
  padding: 1rem;
  justify-self: center;

  .detail-nav {
    background: linear-gradient(
      120deg,
      rgba(22, 34, 42, 0.8),
      rgba(58, 96, 115, 0.8)
    );
    backdrop-filter: saturate(180%) blur(3px);
    -webkit-backdrop-filter: saturate(180%) blur(3px);
    border-radius: 5px;
    margin-bottom: 1rem;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-weight: bold;
    font-family: 'Noto Sans KR', sans-serif;

    div {
      cursor: pointer;
      :hover {
        color: #039be5;
      }
    }
    .active {
      color: #039be5;
    }
  }

  .detail-info {
    display: grid;
    grid-template-columns: 200px 300px;
    grid-template-rows: repeat(3, 200px);
    gap: 1rem;

    .common {
      backdrop-filter: saturate(180%) blur(3px);
      -webkit-backdrop-filter: saturate(180%) blur(3px);
      padding: 0.5rem 1rem;
      border-radius: 5px;
      display: grid;
      grid-template-rows: 44px auto;

      p {
        font-size: 1.75rem;
        font-family: 'Black Han Sans', sans-serif;
        text-align: center;
      }
      div {
        font-weight: bold;
        font-family: 'Noto Sans KR', sans-serif;
      }
      :hover {
        animation: ${ColorAni} 1s linear infinite;
      }
    }

    .odd {
      div {
        font-size: 1.25rem;
        align-self: center;
        text-align: center;
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
    .info-people {
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
  }
`;

export const DetailPost = styled.div`
  width: 516px;
  height: 632px;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(3px);
  -webkit-backdrop-filter: saturate(180%) blur(3px);
  display: grid;
  grid-template-rows: 4fr 1fr;

  .post-form {
    .form-style {
      height: 100%;
      display: flex;
      flex-direction: column;

      textarea {
        height: 100%;
        color: #fff;
        background: rgba(0, 0, 0, 0.4);
        border: none;
        resize: none;

        :hover {
          background: rgba(0, 0, 0, 0.5);
        }
        ::placeholder {
          color: #fff;
        }
      }
    }
  }
`;
