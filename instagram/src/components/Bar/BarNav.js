import React from 'react';
import styled from 'styled-components';

import Links from './BarNavLinks';

const NavContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    color: black;
    margin: 0 1rem;
  }
`;

const NavBar = _ => (
  <NavContainer>
    <Links />
  </NavContainer>
);

export default NavBar;
