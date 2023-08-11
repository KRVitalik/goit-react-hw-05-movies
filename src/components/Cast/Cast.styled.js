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
`

const ImageCastActors = styled.p`
padding:6px 12px;
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


export  {LiCastContainer, ImageCast, ImageCastElement, ImageCastActors, ImageCastEmptyImg}