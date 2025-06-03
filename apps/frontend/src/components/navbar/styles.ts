import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: linear-gradient(90deg, rgb(179, 0, 255) 0%, rgb(108, 0, 189) 100%);
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 15px;
  transition: color 0.3s ease-in-out;

  &.active,
  &[aria-current='page'] {
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 5px;
  }

  &:hover {
    color: #d1a3ff;
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;
