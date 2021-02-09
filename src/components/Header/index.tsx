import React from 'react';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Traveler logo" />
      <button type="button">Acesso restrito</button>
    </Container>
  );
};

export default Header;
