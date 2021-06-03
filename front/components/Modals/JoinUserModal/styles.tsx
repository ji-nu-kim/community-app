import styled from 'styled-components';
import { ColorAni } from '../../../utils/stylesUtil';

export const ModalExternal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 300px;
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
  overflow-y: auto;
  padding: 1rem;

  .card-container {
    background: rgba(255, 255, 255, 0.4);
    outline: 1px solid rgba(255, 255, 255, 1);
    color: #fff;
    display: grid;
    grid-template-rows: 250px 70px 50px;
    margin-bottom: 30px;

    .card-image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.4);

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .card-info {
      align-self: center;
      margin-left: 8px;
    }

    .card-button {
      display: grid;
      grid-template-columns: 1fr 1fr;

      button {
        background: #039be5;
        border: none;
        cursor: pointer;

        :hover {
          background: #007ebd;
        }

        :first-child {
          border-right: 1px solid rgba(255, 255, 255, 0.4);
        }
      }
    }
  }
`;
