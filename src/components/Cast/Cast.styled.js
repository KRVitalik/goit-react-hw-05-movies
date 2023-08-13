import styled from 'styled-components';

const LiCastContainer = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  padding: 24px;
`
const ImageCastElement = styled.li`
border: 1px solid #cccccc;
display: flex;
flex-direction: column;
gap: 8px;
width: 150px;
border-radius: 24px;
overflow: hidden;
`

const ImageCastActors = styled.p`
padding:0 12px;
font-weight: 600;
`

const ImageCast = styled.img`
width: 150px;
`
const ImageCastEmptyImg = styled.p`
width: 150px;
height: 225px;
display: flex;
text-align: center;
align-items: center;
background-color: #b1adc3;
`

const CastTextMessage = styled.p`
margin-top: 24px;
font-size: 14px;
padding: 12px 0 48px 24px;
`;

const ImageCastCharacter = styled.p`
padding:0 12px 6px 12px;
color: #93795df2;
`

export  {ImageCastCharacter, CastTextMessage, LiCastContainer, ImageCast, ImageCastElement, ImageCastActors, ImageCastEmptyImg}