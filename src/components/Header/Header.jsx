import { StyledHeader, StyledHeaderButton, StyledLink } from './Header.styled';

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <StyledHeaderButton>Home</StyledHeaderButton>
      </StyledLink>
      <StyledLink to="movies">
        <StyledHeaderButton>Movie</StyledHeaderButton>
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
