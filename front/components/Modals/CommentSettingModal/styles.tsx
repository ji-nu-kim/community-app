import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  right: -5px;
  width: 55px;
  height: 55px;
  background: rgba(0, 0, 0, 0.7);
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
    grid-template-rows: repeat(2, 1fr);

    li {
      font-size: 0.5rem;
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
        border-radius: 10px;
      }
    }
  }
`;
