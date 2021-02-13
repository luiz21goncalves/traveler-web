import React from 'react';
import { IconBaseProps } from 'react-icons/lib';

import { Container } from './styles';

interface PointProps {
  icon: React.ComponentType<IconBaseProps>;
  score: number;
  text: string;
}

const Point: React.FC<PointProps> = ({ icon: Icon, score, text }) => {
  return (
    <Container>
      <div>
        <Icon size={40} color="#F25D27" />
      </div>

      <div>
        <strong>{score}</strong>
        <span>{text}</span>
      </div>
    </Container>
  );
};

export default Point;
