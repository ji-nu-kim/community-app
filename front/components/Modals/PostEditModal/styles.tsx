import styled from 'styled-components';
import { ColorAni } from '../../../utils/stylesUtil';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 300px;
  height: 300px;
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
  .close-button {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .post-image {
    width: 250px;
    height: 200px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  textarea {
    margin-top: 0.5rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    width: 250px;
    height: 120px;
    border: none;
    resize: none;
  }

  .modify-button {
    margin-top: 1rem;

    button {
      cursor: pointer;
      background: #039be5;
      border: none;
      height: 30px;

      :hover {
        background: #0083c4;
      }
    }
  }
`;
