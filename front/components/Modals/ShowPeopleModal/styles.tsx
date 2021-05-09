import styled from 'styled-components';
import { ColorAni } from '../../../utils/stylesUtil';

export const MG = styled.div`
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

export const ModalContent = styled.div`
  padding: 1rem;
  display: flex;

  .user-container {
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 25px;
    height: 40px;
    padding: 0.5rem;

    :hover {
      border: 2px solid #039be5;
      background: rgba(0, 0, 0, 0.1);
    }

    img {
      border-radius: 50%;
      object-fit: cover;
    }

    .fake-image {
      width: 24px;
      height: 24px;
      background: rgba(255, 255, 255, rgba(0, 0, 0, 0.1));
    }

    .user-nickname {
      margin-left: 4px;
      font-weight: bold;
      color: #b3b3b3;
    }
  }
`;
