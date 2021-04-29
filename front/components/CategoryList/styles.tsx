import styled from 'styled-components';
import { ColorAni } from 'utils/stylesUtil';

export const CheckBoxContainer = styled.fieldset`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(5, 85px);
  grid-template-rows: auto;

  div {
    label {
      color: #fff;
      margin-left: 4px;
      :hover {
        color: coral;
        animation: ${ColorAni} 0.5s infinite linear;
      }
    }
  }
`;
