import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 1rem;
  height: 200px;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(255, 255, 255, 0.3));
  display: grid;
  grid-template-columns: auto 100px;

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
    width: 100%;
    justify-self: flex-end;
    display: flex;
    justify-content: space-evenly;
    height: 33px;

    .join-user-icon {
      color: #fff;
      position: relative;
      font-size: 20px;
      cursor: pointer;

      .user-icon-badge {
        background: hotpink;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        text-align: center;
        font-size: 10px;
        position: absolute;
        top: -6px;
        right: -8px;
      }

      :hover {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      border: none;
      color: #fff;
      font-size: 0.75rem;
    }

    .button-container {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      width: 60px;

      button {
        width: 22px;
        height: 22px;
        border-radius: 50%;
      }
    }

    .remove-button,
    .modify-button,
    .join-button,
    .leave-button {
      cursor: pointer;
      background: rgba(3, 155, 229, 0.7);

      :hover {
        filter: saturate(180%);
      }
    }

    .remove-button {
      background: radial-gradient(#fbd3e9, #bb377d);
    }
    .modify-button {
      background: radial-gradient(#f7f8f8, #acbb78);
    }

    .wait-button {
      background: #e5037f;
    }
  }
`;
