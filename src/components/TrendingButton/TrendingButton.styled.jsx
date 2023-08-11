import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  /* flex-direction: column; */
  padding: 24px;
`;

const RadioButton = styled.button`
  width: 100px;
  height: 32px;
  padding: 8px, 16px;
  border-radius:10px;
  border: 0;
  background-color: #6eff86;
  transition: background-color 250ms, color 250ms ;
  &:hover{
    background-color: #59c000;
    color: #fff;
  }
`;

const RadioLabelGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const RadioLabel = styled.label`
  font-size: 24px;
  font-weight: 700;
   
`;


export {RadioButtonContainer, RadioButton, RadioLabelGroup, RadioLabel};