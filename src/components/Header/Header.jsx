import { NavLink } from "react-router-dom";
import  { StyledHeader, StyledHeaderButton } from "./Header.styled";

function Header() {
    return ( 
        <StyledHeader>
            <NavLink to="/"><StyledHeaderButton>Home</StyledHeaderButton></NavLink>
            <NavLink to="movies"><StyledHeaderButton>Movie</StyledHeaderButton></NavLink>
        </StyledHeader>
     );
}

export default Header;