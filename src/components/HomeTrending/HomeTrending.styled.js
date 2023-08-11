import styled from 'styled-components';

const TrendingTitle = styled.h1`
padding-left:48px;`

const TrendingContainer = styled.ul`
gap: 16px;
width: 85%;
margin: 0 auto;
`

const TrendingImage = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 8px;
`

const TrendingElement = styled.li`
display: flex;
overflow: hidden;
flex-direction: column;
justify-content: flex-start;
align-items: center;
min-height: 385px;
border-radius:10px;
border: 1px solid #ccc;
transition:box-shadow .3s, transform .3s, background-color .3s;
background-color: rgba(96,96,96,.5);
&:hover{
    box-shadow: 0 0 11px rgba(33,33,33,.9); 
    transform: translate(0, 10px);
    background-color: rgba(96,96,96,1);
}
`

const TrendingMovieTitle = styled.p`
margin-bottom: 8px;
padding: 10px;
font-weight: 700;
text-align: center;
color: #f1f1f1;
`

export {TrendingContainer, TrendingImage, TrendingElement, TrendingTitle, TrendingMovieTitle}