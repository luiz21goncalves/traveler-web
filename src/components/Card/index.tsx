import React from 'react';

import { Container } from './styles';

interface CardProps {
  image: string;
  city: string;
  numberPlaces: number;
}

const Card: React.FC<CardProps> = ({ image, city, numberPlaces }) => {
  return (
    <Container>
      <img src={image} alt={city} />

      <div>
        <p>{city}</p>
        <span>{numberPlaces} locais</span>
      </div>
    </Container>
  );
};

export default Card;
