import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 100px;
  height: 32px;
  padding: 8px, 16px;
  border-radius: 10px;
  border: 0;
  background-color: #f3ce83;
  transition: background-color 250ms, color 250ms;
  &:hover {
    background-color: #845f18;
    color: #fff;
  }
`;

export { ButtonStyled };
