import styled from 'styled-components';

export const NavWrapper = styled.div`
  z-index: 100;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 44px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: saturate(180%) blur(12px);
  -webkit-backdrop-filter: saturate(180%) blur(12px);

  .logo-section {
    margin-left: 1rem;
    h1 {
      font-family: 'Luckiest Guy', cursive;
      margin: 0;
      color: #fff;
    }
  }

  .btn-group {
    display: flex;
    align-items: center;
  }

  .btn {
    margin-right: 1rem;
    font-size: 0.5rem;
    cursor: pointer;
    color: #fff;
    font-weight: bold;

    :hover {
      transform: scale(1.05);
    }
  }

  .btn-glass-style {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 26px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 10px;
  }

  .btn-userinfo {
    display: flex;
    justify-content: space-evenly;
  }
`;

export const StyleSearch = styled.div`
  width: 400px;
  height: 30px;
  display: grid;
  grid-template-columns: auto 44px;

  input {
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 4px;
    background: rgba(125, 125, 125, 0.2);
    color: #b3b3b3;
  }

  button {
    color: #b3b3b3;
    background: rgba(125, 125, 125, 0.3);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    border: none;

    :hover {
      background: rgba(125, 125, 125, 0.5);
    }
  }
`;
