import React from 'react';

import { Container } from './styles';

interface CardProps {
  image: string;
  city: string;
  numberPlaces: number;
  isHome?: boolean;
}

const Card: React.FC<CardProps> = ({ image, city, numberPlaces, isHome }) => {
  return (
    <Container className={isHome ? 'large' : ''}>
      <img src={image} alt={city} />

      <div>
        <strong>{city}</strong>
        <span>{numberPlaces} locais</span>
      </div>
    </Container>
  );
};

export default Card;
