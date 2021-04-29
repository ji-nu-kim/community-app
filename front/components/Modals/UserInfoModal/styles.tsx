import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 1022;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 50px;
  right: 1rem;
  width: 150px;
  height: 150px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-radius: 10px;
  cursor: pointer;

  ul {
    height: inherit;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-rows: repeat(3, 1fr);

    li {
      position: relative;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);

      :last-child {
        padding: 10px;
        border-bottom: none;
      }
      :hover {
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }

      a {
        padding: 10px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        width: 100%;
        height: 100%;
      }
    }
  }
`;
