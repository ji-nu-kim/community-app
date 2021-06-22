import styled from 'styled-components';
import { ColorAni } from 'utils/stylesUtil';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 500px;
  height: 500px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);

  display: grid;
  grid-template-rows: 44px auto;

  label {
    color: #e4e4e4;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  color: #e4e4e4;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  .modal-title {
    margin-left: 1rem;
  }
  .close-btn {
    margin-right: 1rem;
    cursor: pointer;

    :hover {
      color: coral;
      animation: ${ColorAni} 0.5s linear infinite;
    }
  }
`;

export const ModalBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    display: grid;
    grid-template-rows: repeat(3, auto);

    .form-profile {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin-bottom: 1rem;
      justify-items: flex-start;

      .profile-nickname {
        #nickname {
          background: rgba(255, 255, 255, 0.1);
          padding-left: 4px;
          color: #fff;
          margin-top: 0.5rem;
          height: 33px;
          border: none;

          :hover {
            background: rgba(255, 255, 255, 0.2);
          }
        }
      }
    }

    .form-category {
      margin-bottom: 1rem;
      span {
        font-size: 0.75rem;
        color: #fff;
      }
    }
  }

  .create-btn {
    display: flex;
    justify-content: center;
  }
`;
