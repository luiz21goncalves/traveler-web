import React from 'react';
import { FiSearch } from 'react-icons/fi';

import logo from '../../assets/logo.png';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Traveler logo" />
      <div>
        <FiSearch size={20} color="#a0acb2" />
        <input type="text" placeholder="Qual cidade você procura?" />
      </div>
      <button type="button">Acesso restrito</button>
    </Container>
  );
};

export default Header;
