import styled from 'styled-components';

const MovieContainer = styled.div`
  padding: 24px;
`;

const MovieInput = styled.input`
  outline: 0;
  width: 100%;
  background: #fff;
  padding: 0 1.6rem;
  border-radius: 0.7rem;
  appearance: none;
  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);
  transition-property: width, border-radius;
  z-index: 1;
  position: relative;
  background-color: #f1f1f1;
  height: 50px;
  font-family: sans-serif;
  border: 0;
  color: #2f2f2f;
  font-size: 20px;

  &:not(:placeholder-shown) {
    border-radius: 0.7rem 0 0 0.7rem;
    width: calc(100% - 6rem);
    + button {
      display: block;
    }
  }
`;

const MovieLabel = styled.label`
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  padding: 0;
  border: 0;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

const MovieForm = styled.form`
  position: relative;
  width: 30rem;
  background: #57bd84;
  border-radius: 0.7rem;
  margin-bottom: 24px;
`;
const MovieFormTitle = styled.p`
  font-family: 'Kanit', sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 500;
`;

const MovieButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 6rem;
  font-weight: bold;
  background: #57bd84;
  border-radius: 0 0.7rem 0.7rem 0;
  height: 50px;
  font-family: 'Lato', sans-serif;
  border: 0;
  color: #2f2f2f;
  font-size: 1.8rem;
`;

const MovieElementContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const MovieElement = styled.li`
  width: 150px;
  height: 300px;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 300px;
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: box-shadow 0.3s, transform 0.3s, background-color 0.3s;
  background-color: rgba(96, 96, 96, 0.5);
  &:hover {
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.9);
    transform: translate(0, 10px);
    background-color: rgba(96, 96, 96, 1);
  }
`;

const MovieElementImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const MovieElementTitle = styled.p`
  margin-bottom: 8px;
  padding: 10px 4px;
  font-weight: 700;
  text-align: left;
  color: #f1f1f1;
  text-align: center;
`;

const MovieErrorTitle = styled.p`
  display: inline-block;
  height: auto;

  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  box-sizing: border-box;
  border: 1px solid #f1f1f1;
  border-radius: 24px;
  background-color: rgb(200, 200, 200, 0.9);
  padding: 9px;
`;

export {
  MovieErrorTitle,
  MovieElementTitle,
  MovieFormTitle,
  MovieContainer,
  MovieLabel,
  MovieForm,
  MovieButton,
  MovieInput,
  MovieElement,
  MovieElementContainer,
  MovieElementImage,
};
