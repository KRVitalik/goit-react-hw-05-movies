import styled from 'styled-components';

const ReviewsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 24px;
`;

const ReviewsElement = styled.li`
  width: 45%;
  border: 2px solid #ccc;
  border-radius: 24px;
  box-sizing: border-box;
  padding: 16px;
`;

const ReviewsText = styled.p`
margin-top: 24px;
font-size: 14px
`;

const ReviewsAuthor = styled.h3`
font-family: 'Kanit', sans-serif;
`

const ReviewsUserIcon = styled.img`
display: block;
border-radius: 50px;
height: 50px;
width: 50px;
border: 1px solid black;
text-align: center;
`
const ReviewsTextMessage = styled.p`
margin-top: 24px;
font-size: 14px;
padding: 12px 0 48px 24px;
`;



export {ReviewsTextMessage, ReviewsUserIcon, ReviewsAuthor, ReviewsContainer, ReviewsElement, ReviewsText}
