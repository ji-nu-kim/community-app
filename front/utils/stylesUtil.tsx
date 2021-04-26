import { keyframes } from 'styled-components';

export const ColorAni = keyframes`
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
`;
