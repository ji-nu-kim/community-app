import styled from 'styled-components';

export const MeetContainer = styled.div`
  position: relative;
  height: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.4);
  overflow: auto;

  .joined-meet {
    display: grid;
    grid-template-rows: 44px auto;
  }

  .new-meet {
    display: grid;
    grid-template-rows: 44px auto;
  }

  .meet-container {
    display: flex;
    justify-content: center;
  }

  .meet-card {
    width: 350px;
    height: 200px;
    background: #3d9df2;
    display: grid;
    grid-template-rows: 44px auto;
    font-weight: bold;

    :hover {
      filter: hue-rotate(20deg);
    }

    .title {
      background: #f279a6;
      color: #3d9df2;
      font-weight: bold;
      font-size: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .body {
      display: grid;
      grid-template-columns: 1fr 1fr;
      border: 2px solid #f279a6;

      .body-left {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        border-right: 2px solid #f279a6;

        * {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        * :not(:last-child) {
          border-bottom: 2px solid #f279a6;
        }
      }
      .body-right {
        display: grid;
        grid-template-rows: 2fr 1fr;

        .right-first {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 2px solid #f279a6;
          text-align: center;
          * {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          * :first-child {
            border-right: 2px solid #f279a6;
          }
        }
        button {
          cursor: pointer;
          background: #fff;
          border: none;
          color: #f279a6;
          font-weight: bold;

          :hover {
            background: transparent;
          }
        }
      }
    }
  }
`;

export const MakeMeetButton = styled.div`
  left: calc(100% - 48px);
  cursor: pointer;
  position: sticky;
  bottom: 1rem;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
