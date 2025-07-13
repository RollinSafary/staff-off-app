import { Nav, StyledNavLink } from './styles';

const Navbar = () => (
  <Nav>
    <StyledNavLink to="/" end>
      Home
    </StyledNavLink>
    <StyledNavLink to="/registration">Sign Up</StyledNavLink>
    <StyledNavLink to="/login">Login</StyledNavLink>
  </Nav>
);

export default Navbar;
