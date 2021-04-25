import styled, { keyframes } from 'styled-components';

const btnRotateAni = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 400px;
  height: 400px;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;

  display: grid;
  grid-template-rows: 44px auto;

  label {
    font-weight: bold;
    color: #60a0ff;
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  color: #fff;
  font-weight: bold;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  .modal-title {
    margin-left: 1rem;
  }
  .close-btn {
    margin-right: 1rem;
    cursor: pointer;

    :hover {
      color: coral;
      animation: ${btnRotateAni} 0.5s linear infinite;
    }
  }
`;

export const ModalForm = styled.div`
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
    width: 300px;
    height: 44px;
    border: none;
  }
`;

export const TextAreaContainer = styled.div`
  margin-bottom: 1rem;
  textarea {
    width: 300px;
    height: 100px;
    border: none;
  }
`;
