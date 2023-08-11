import styled from 'styled-components';

const DivDetailsContainer = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  padding: 24px;
`;

const ImageMovieDetails = styled.img`
/* min-width: 350px; */
height: 85vh;
`
const UlButtonMovieDetails = styled.ul`
display: flex;
gap: 16px;
`
const MovieDetailsContainer = styled.div`
display: flex;
gap: 24px;
`

const MovieDetailsInfo = styled.div`
display: flex;
flex-direction: column;`

export {DivDetailsContainer, ImageMovieDetails, UlButtonMovieDetails,MovieDetailsContainer, MovieDetailsInfo}