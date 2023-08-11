import styled from 'styled-components';

const ReviewsContainer = styled.ul`

  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;

`;

const ReviewsElement = styled.li`
  width: 45%;
  /* max-height: 420px;  */
  /* overflow-y:auto; */
  border: 2px solid #ccc;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 16px;
`;

const ReviewsText = styled.p`
margin-top: 24px;
font-size: 14px
`;

const ReviewsUserIcon = styled.p`
display: block;
border-radius: 50px;
height: 20px;
width: 30px;
border: 1px solid black;
text-align: center;
font-size: 18px;
`;

const ReviewsAuthor = styled.h3`
font-family: 'Kanit', sans-serif;
`


export {ReviewsUserIcon, ReviewsAuthor, ReviewsContainer, ReviewsElement, ReviewsText}
