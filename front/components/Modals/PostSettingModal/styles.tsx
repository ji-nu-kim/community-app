import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 2000;
  top: 0;
  right: 0;
  width: 100px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  cursor: pointer;

  ul {
    height: inherit;
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-rows: auto;
    margin-bottom: 0;

    li {
      height: 40px;
      position: relative;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);

      :last-child {
        border-bottom: none;
      }
      :hover {
        background: rgba(0, 0, 0, 0.3);
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
