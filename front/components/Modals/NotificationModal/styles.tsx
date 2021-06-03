import styled from 'styled-components';

export const ModalExternal = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: absolute;
  z-index: 1000;
  top: 50px;
  right: 1rem;
  width: 300px;
  height: 300px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;

  .modal-body {
    ul {
      height: inherit;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        position: relative;
        padding: 1rem;
        padding-right: 4rem;
        font-size: 0.75rem;
        cursor: pointer;
        width: 100%;
        position: relative;
        color: #fff;
        border-bottom: 1px solid rgba(0, 0, 0, 0.4);

        :hover {
          background: rgba(0, 0, 0, 0.4);
        }

        .delete-button {
          cursor: pointer;
          position: absolute;
          top: 50%;
          right: 5%;
          transform: translateY(-50%);
          background: #039be5;
          border: none;
          width: 40px;
          height: 20px;

          :hover {
            opacity: 0.7;
          }
        }
      }
    }
  }
`;
