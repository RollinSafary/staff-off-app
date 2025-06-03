import { Nav, StyledNavLink } from './styles';

const Navbar = () => (
  <Nav>
    <StyledNavLink to="/" end>
      Home
    </StyledNavLink>
    <StyledNavLink to="/registration">Sign Up</StyledNavLink>
    <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
  </Nav>
);

export default Navbar;
