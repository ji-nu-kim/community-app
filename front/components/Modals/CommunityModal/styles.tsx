import styled from 'styled-components';
import { ColorAni } from '../../../utils/stylesUtil';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.4);
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

export const ModalFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .create-btn {
    display: flex;
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 1rem;
  input {
    margin-top: 0.5rem;
    width: 300px;
    height: 44px;
    border: none;
  }
`;

export const TextAreaContainer = styled.div`
  margin-bottom: 1rem;
  textarea {
    margin-top: 0.5rem;
    width: 300px;
    height: 100px;
    border: none;
    resize: none;
  }
`;
