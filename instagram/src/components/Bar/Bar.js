import React from 'react';
import styled from 'styled-components';

import Brand from './BarBrand';
import SearchBar from './BarSearch';
import NavBar from './BarNav';

const Container = styled.header`
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-evenly;
  padding: 1.25rem 0;
`;

const Bar = props => (
  <Container>
    <Brand logo={props.logo} />
    <SearchBar 
      handleStatus={props.handleStatus}
      isSearching={props.isSearching} 
    />
    <NavBar />
  </Container>
);

export default Bar;
