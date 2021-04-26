import React from 'react';
import { CommunityCardContainer } from './styles';

interface CommunityCardProps {
  name: string;
  description: string;
}

function CommunityCard({ name, description }: CommunityCardProps) {
  return (
    <CommunityCardContainer>
      <div className="card-image"></div>
      <div className="card-main">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </CommunityCardContainer>
  );
}

export default CommunityCard;
