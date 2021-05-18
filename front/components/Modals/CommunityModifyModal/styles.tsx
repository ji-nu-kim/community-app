import styled from 'styled-components';
import { ColorAni } from 'utils/stylesUtil';

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 600px;
  height: 500px;
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
  display: grid;
  grid-template-rows: 1fr 1fr 44px;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding: 0.5rem;
  gap: 0.5rem;

  .profile-img {
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .create-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 3;
  }
`;

export const TextAreaContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  textarea {
    margin-top: 0.5rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.2);
    width: 250px;
    height: 120px;
    border: none;
    resize: none;

    ::placeholder {
      color: #fff;
    }
  }
`;
