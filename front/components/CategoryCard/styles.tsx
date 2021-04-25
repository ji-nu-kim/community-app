import styled, { keyframes } from 'styled-components';

interface IImg {
  img: string;
}

const btnRotateAni = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;

export const CardContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props: IImg) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 340px;
  min-height: 220px;
  border-radius: 10px;
  box-shadow: 0 4px 16px 0 rgba(31, 38, 135, 0.37);
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)),
      url(${(props: IImg) => props.img});

    h2 {
      color: coral;
      animation: ${btnRotateAni} 1s linear infinite;
    }
  }

  h2 {
    z-index: 10;
    color: #fff;
    font-weight: bold;
    font-size: 1.5rem;
    z-index: 10;
  }
`;
