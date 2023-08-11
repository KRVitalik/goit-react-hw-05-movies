import styled from 'styled-components';

const DivDetailsContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-direction: column;
  padding: 24px;
`;

const ImageMovieDetails = styled.img`
/* min-width: 350px; */
height: 85vh;
border-radius: 24px;
`
const UlButtonMovieDetails = styled.ul`
display: flex;
gap: 16px;
`
const MovieDetailsContainer = styled.div`
display: flex;
gap: 20px;
`

const MovieDetailsInfo = styled.div`
display: flex;
flex-direction: column;`

const MovieDetailsInfoText = styled.div`
display: flex;
flex-direction: column;
gap: 4px;
box-sizing: border-box;
border: 1px solid #f1f1f1;
border-radius: 24px;
background-color: rgb(200,200,200,.9);
width: 640px;
margin-bottom: 16px;
padding: 9px;
`

const MovieDetailsBackBtn = styled.button`
  width: 100px;
  height: 32px;
  padding: 8px, 16px;
  border-radius:10px;
  border: 0;
  background-color: #f3ce83;
  transition: background-color 250ms, color 250ms ;
  &:hover{
    background-color: #845f18;
    color: #fff;
  }
`;

const MovieDetailsCastReviewBtn = styled.button`
  width: 100px;
  height: 32px;
  padding: 8px, 16px;
  border-radius:10px;
  border: 0;
  background-color: #f3ce83;
  transition: background-color 250ms, color 250ms ;
  &:hover{
    background-color: #845f18;
    color: #fff;
  }
`

const MovieDetailsHead = styled.h1`
font-family: 'Kanit', sans-serif;
`
const MovieDetailsShortReview = styled.h2`
font-family: 'Kanit', sans-serif;
`
const MovieDetailsGenres = styled.h3`
font-family: 'Kanit', sans-serif;
font-size: 24px;
`

const MovieDetailsRuntime = styled.p`
color: #93795df2;
font-size: 14px
`

const MovieDetailsGenresElement = styled.li`
color: #93795df2;
font-size: 14px
`

const MovieDetailsOverviewText = styled.p`
font-size: 14px
`


export {MovieDetailsOverviewText, MovieDetailsGenresElement, MovieDetailsRuntime, MovieDetailsGenres, MovieDetailsShortReview, MovieDetailsHead, MovieDetailsCastReviewBtn, MovieDetailsBackBtn, MovieDetailsInfoText, DivDetailsContainer, ImageMovieDetails, UlButtonMovieDetails,MovieDetailsContainer, MovieDetailsInfo}