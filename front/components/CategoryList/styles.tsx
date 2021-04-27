import styled from 'styled-components';

export const CheckBoxContainer = styled.fieldset`
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  div {
    label {
      margin-left: 4px;
      font-weight: lighter;
    }
  }
`;
