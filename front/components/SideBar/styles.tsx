import styled from 'styled-components';

export const SideBarContainer = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  padding: 4px;
  height: calc(100vh - 44px);
  position: sticky;
  top: 44px;
  overflow: auto;

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

    .make-community {
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

    ul {
      list-style: none;
      padding-left: 0;
      margin: 0;

      li {
        height: 40px;
        a {
          display: flex;
          align-items: center;
          padding-left: 1rem;
          color: #b3b3b3;
          height: 100%;
          width: 100%;

          span {
            position: relative;
            width: 24px;
            height: 24px;
            background: linear-gradient(to right, #40e0d0, #ff8c00, #ff0080);
            border-radius: 50%;
            color: #fff;
            text-align: center;

            img {
              position: absolute;
              z-index: 10;
              top: 0;
              left: 0;
              border-radius: 50%;
              object-fit: cover;
            }
          }

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
`;
