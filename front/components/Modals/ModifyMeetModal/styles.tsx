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
  justify-content: center;
  align-items: center;
  .form {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 44px;
  }

  .create-button {
    display: flex;
    justify-content: center;
  }
`;

export const InputContainer = styled.div`
  padding: 0.5rem;
  margin-bottom: 1rem;
  input {
    width: 100%;
    height: 44px;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    background: transparent;
    color: #fff;
  }
`;
