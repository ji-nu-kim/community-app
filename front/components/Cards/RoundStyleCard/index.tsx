import React from 'react';
import { CardContainer } from './styles';

interface RoundStyleCardProps {
  name: string;
  img: string | null;
  width: string;
  height: string;
}

function RoundStyleCard({ name, img, width, height }: RoundStyleCardProps) {
  return (
    <CardContainer img={img} width={width} height={height}>
      <h2>{name}</h2>
    </CardContainer>
  );
}

export default RoundStyleCard;
