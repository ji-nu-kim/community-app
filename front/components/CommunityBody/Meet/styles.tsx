import styled from 'styled-components';

interface ICardContainer {
  number: number;
}

export const MeetContainer = styled.div`
  position: relative;
  height: 100%;
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  background: rgba(255, 255, 255, 0.4);
  overflow: auto;
  padding: 1rem;

  .joined-meet,
  .new-meet {
    display: grid;
    grid-template-rows: 44px auto;
  }
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 10px;
  margin-bottom: 1rem;

  .card-left {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    filter: ${(props: ICardContainer) =>
      props.number && `hue-rotate(${props.number * 60}deg)`};
    background: linear-gradient(
      40deg,
      rgba(255, 252, 0, 0.85) 0%,
      rgba(252, 0, 255, 0.85) 45%,
      rgba(0, 255, 252, 0.85) 100%
    );
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
      }
    }
  }

  .card-right {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 5;
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
