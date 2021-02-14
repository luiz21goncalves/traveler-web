import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { Container, Wrapper } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img src={logo} alt="Traveler logo" />
        </Link>

        {children}

        <button type="button">Acesso restrito</button>
      </Wrapper>
    </Container>
  );
};

export default Header;
