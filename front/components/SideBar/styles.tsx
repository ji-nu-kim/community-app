import styled from 'styled-components';

export const SideBarContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 4px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 4px;
  height: calc(100vh - 44px);
  position: sticky;
  top: 44px;

  span {
    margin-right: 4px;
    pointer-events: none;
  }

  h2 {
    font-size: 1.25rem;
    padding: 0.5rem;
    margin: 0;
    color: #e4e4e4;
    font-weight: bold;
  }

  .menu-section {
    margin-top: 1rem;

    ul {
      list-style: none;
      padding-left: 0;
      display: grid;
      height: 120px;
      grid-template-rows: repeat(3, 1fr);

      margin: 0;

      li {
        a {
          display: flex;
          align-items: center;
          padding-left: 1rem;
          color: #b3b3b3;
          height: 100%;
          width: 100%;

          :hover {
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            color: #fff;
          }
        }
      }
      .active {
        background: rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        color: #fff;
      }
    }
  }

  .community-section {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: 1rem;
    padding: 4px;

    .create-community {
      display: flex;
      align-items: center;
      height: 40px;
      color: #b3b3b3;
      padding-left: 1rem;
      cursor: pointer;

      :hover {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        color: #fff;
      }
    }
  }
`;
