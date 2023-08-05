import { NavLink } from "react-router-dom";
import StyledHeader from "./Header.styled";

function Header() {
    return ( 
        <StyledHeader>
            <NavLink to="/">Home</NavLink>
            <NavLink to="movies">Movie</NavLink>
        </StyledHeader>
     );
}

export default Header;