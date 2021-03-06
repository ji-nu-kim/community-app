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
  width: 600px;
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
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;

  .user-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 0.5rem;
    margin-bottom: 1rem;
    margin-right: 1rem;

    :hover {
      border: 2px solid #039be5;
      background: rgba(0, 0, 0, 0.1);
    }

    .user-name {
      padding: 0.25rem;
      display: flex;
      align-items: center;

      img {
        border-radius: 50%;
        object-fit: cover;
      }

      .fake-image {
        width: 24px;
        height: 24px;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
      }

      .user-nickname {
        margin-left: 4px;
        font-weight: bold;
        color: #b3b3b3;
      }
    }

    .user-country {
      padding: 0.25rem;
      color: #039be5;
      font-size: 0.75rem;
    }
  }
`;
