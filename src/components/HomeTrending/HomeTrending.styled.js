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
`

const TrendingElement = styled.li`
display: flex;
overflow: hidden;
flex-direction: column;
justify-content: flex-start;
align-items: center;
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
    position: absolute;
    bottom: -50%;
    padding: 8px 8px 12px 8px;
    width: 100%;
    overflow: hidden;
    font-weight: 700;
    text-align: center;
    transition: opacity 250ms ease;
    opacity: 0;
    color: #4d2903;
    box-sizing: border-box;

    ${TrendingElement}:hover &,
    ${TrendingElement}:active & {
        position: absolute;
        bottom: 0;
        display: block;
        background-color: #e49a29;
        opacity: 1;
    padding: 8px 8px 12px 8px;
    }
`;

export {TrendingContainer, TrendingImage, TrendingElement, TrendingTitle, TrendingMovieTitle}