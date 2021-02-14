import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Wrapper } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Traveler logo" />

        {children}

        <button type="button">Acesso restrito</button>
      </Wrapper>
    </Container>
  );
};

export default Header;
