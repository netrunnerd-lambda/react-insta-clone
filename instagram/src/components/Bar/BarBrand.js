import React from 'react';
import { Instagram } from 'react-feather';
import styled from 'styled-components';

const BrandContainer = styled.section`
        align-items: center;
        display: flex;
        height: 35px;
      `,
      BrandDivider = styled.div`
        background-color: black;
        height: 30px;
        margin: 0 1rem;
        width: 1px;
      `,
      BrandLogo = styled.img`
        align-self: end;
        height: 30px;
      `;

const BarBrand = ({ logo }) => (
  <BrandContainer>
    <Instagram /> <BrandDivider /> <BrandLogo src={logo} alt="Instagram logo" /> 
  </BrandContainer>
);

export default BarBrand;
