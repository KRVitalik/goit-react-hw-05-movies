import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  gap: 20px;
  padding: 8px 24px;
  background-color: #9e6103;
`;

const StyledHeaderButton = styled.button`
  display: flex;
  gap: 20px;
  padding: 8px 24px;
  background-color: #9e6103;
  color: #f1f1f1;
  border-radius: 24px;
  transition: box-shadow 250ms, background-color 250ms ;
  &:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.9); 
    background-color: #6e4507;
  }
`;

const StyledLink = styled(NavLink)`
color: #f1f1f1;
   &.active > ${StyledHeaderButton}{
    color: orange;
    box-shadow: 0 0 11px rgba(33,33,33,.9); 
    background-color: #6e4507;
  }
`;

export {StyledLink, StyledHeader, StyledHeaderButton} 