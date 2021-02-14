import React, { useContext } from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface PointProps {
  icon: React.ComponentType<IconBaseProps>;
  score: number;
  text: string;
}

const Point: React.FC<PointProps> = ({ icon: Icon, score, text }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <Icon size={40} color={colors.orange} />
      </div>

      <div>
        <strong>{score}</strong>
        <span>{text}</span>
      </div>
    </Container>
  );
};

export default Point;
