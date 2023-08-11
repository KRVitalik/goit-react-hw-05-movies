import styled from 'styled-components';

const ReviewsContainer = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;

`;

const ReviewsElement = styled.li`
  width: 45%;
  max-height: 420px; 
  overflow-y:auto;
  border: 2px solid #ccc;
  padding: 8px;
`;

const ReviewsText = styled.p`
margin-top: 24px;
`;

export {ReviewsContainer, ReviewsElement, ReviewsText}
