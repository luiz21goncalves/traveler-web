import React, { useContext } from 'react';
import { FiStar } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';

import { ThemeContext } from 'styled-components';

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
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <Label>
          <FiStar size={20} color={colors.shapeLight} />
          <span>{stars}</span>
        </Label>

        <img src={image} alt={alt} />

        <strong>{title}</strong>
      </Content>

      <Footer>
        <span>{text}</span>
        <Icon color={colors.orange} size={24} />
      </Footer>
    </Container>
  );
};

export default PlacesCard;
