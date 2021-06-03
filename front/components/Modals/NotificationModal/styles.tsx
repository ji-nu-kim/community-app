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
        font-size: 0.75rem;
        cursor: pointer;
        width: 100%;
        position: relative;
        color: #fff;

        .notification-title {
          display: grid;
          grid-template-columns: auto 30px;
          align-items: center;
          justify-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);

          .title-text {
            padding: 0.5rem;

            :hover {
              color: rgba(0, 0, 0, 0.3);
            }
          }

          .delete-button {
            :hover {
              color: rgba(0, 0, 0, 0.3);
            }
          }
        }
        .notification-body {
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 1rem;
        }
      }
    }
  }
`;
