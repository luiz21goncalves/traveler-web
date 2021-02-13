import React from 'react';
import { FiStar } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';

import { Container, Label, Content, Footer } from './styles';

interface PlaceCardProps {
  stars: string;
  image: string;
  alt: string;
  title: string;
  text: string;
  icon: React.ComponentType<IconBaseProps>;
}

const PlacesCard: React.FC<PlaceCardProps> = ({
  stars,
  image,
  alt,
  title,
  text,
  icon: Icon,
}) => {
  return (
    <Container>
      <Content>
        <Label>
          <FiStar size={20} color="#ffffff" />
          <span>{stars}</span>
        </Label>

        <img src={image} alt={alt} />

        <strong>{title}</strong>
      </Content>

      <Footer>
        <span>{text}</span>
        <Icon color="#F25D27" size={24} />
      </Footer>
    </Container>
  );
};

export default PlacesCard;
