import styled from 'styled-components';

export const BodyContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 244px);
  display: grid;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .body-inner-container {
    width: 90%;
    height: 90%;

    .active {
      color: #039bec;
    }

    .body-nav {
      display: flex;
      background: rgba(0, 0, 0, 0.5);
      backdrop-filter: blur(2px);
      -webkit-backdrop-filter: blur(2px);
      height: 44px;
      justify-content: space-evenly;
      align-items: center;

      div {
        cursor: pointer;
      }
    }

    .body-content {
      position: relative;
      height: calc(100% - 44px);
    }
  }
`;
