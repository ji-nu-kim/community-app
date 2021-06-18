import styled from 'styled-components';

interface ICardContainer {
  number: number;
}

export const MeetContainer = styled.div`
  position: relative;
  height: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  grid-template-rows: auto 55px;

  .visitor-post {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .joined-meet,
  .new-meet {
    display: grid;
    grid-template-rows: 44px auto;

    .meet-members,
    .meet-place {
      cursor: pointer;

      :hover {
        color: #039be5;
      }
    }

    .meet-name {
      margin-left: 1rem;
      align-self: center;
      font-weight: bold;
      font-size: 1rem;
    }
  }
`;

export const CardContainer = styled.div`
  padding: 1rem;
  position: relative;
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .card-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    filter: ${(props: ICardContainer) => `hue-rotate(${props.number * 60}deg)`};
    background: ${(props: ICardContainer) =>
      `linear-gradient(
      ${props.number * 60}deg,
      rgba(255, 252, 0, 0.85) 0%,
      rgba(252, 0, 255, 0.85) 45%,
      rgba(0, 255, 252, 0.85) 100%
    )`};

    text-align: center;
    .card-header {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 2rem;
    }
    .card-body {
      font-size: 0.75rem;
      div {
        margin-bottom: 0.5rem;
      }

      .meet-button {
        button {
          cursor: pointer;
          border: none;
          background: #039be5;
          height: 30px;

          :hover {
            background: #0282c2;
          }
        }
        .owner-buttons {
          button:first-child {
            margin-right: 1rem;
          }
        }
      }
    }
  }

  .card-right {
    background: rgba(255, 255, 255, 0.4);
    z-index: 5;

    .show-members {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: 30% 70%;
      align-items: center;
      justify-items: center;
      font-weight: bold;
      font-size: 1rem;

      .member-container {
        width: 100%;
        height: 100%;
        padding: 1rem;

        p {
          margin-right: 1rem;
          display: inline;
        }
      }
    }
  }
`;

export const MakeMeetButton = styled.div`
  margin-right: 1rem;
  align-self: center;
  justify-self: end;
  cursor: pointer;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid hotpink;
  color: hotpink;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  :hover {
    filter: hue-rotate(180deg);
  }
`;
