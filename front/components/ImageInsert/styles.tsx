import styled from 'styled-components';

export const ProfileImgContainer = styled.div`
  position: relative;

  img {
    position: absolute;
    z-index: -1;
    top: -1px;
    left: -1px;
    border-radius: 50%;
    object-fit: cover;
  }

  .img-input-btn {
    margin: 0.5rem 0;
    position: relative;
    width: 100px;
    height: 100px;
    background: rgba(0, 0, 0, 0.1);

    .img-input-icon {
      color: #cacaca;
      font-size: 2rem;
    }
  }

  .img-delete-btn {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0.3s linear;
    opacity: 0;

    :hover {
      opacity: 1;
      transition: opacity 0.3s linear;
    }
  }
`;
