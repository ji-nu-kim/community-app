import React from 'react';
import { CardContainer } from './styles';

interface BoxStyleCardProps {
  profilePhoto: string;
  communityName: string;
  categoryName: string;
  country: string;
}

function BoxStyleCard({
  profilePhoto,
  communityName,
  categoryName,
  country,
}: BoxStyleCardProps) {
  return (
    <CardContainer>
      {profilePhoto ? (
        <img width="240" height="166" src={profilePhoto} alt="사진" />
      ) : (
        <div className="fake-image"></div>
      )}
      <div className="card-info">
        <div className="info-title">{communityName}</div>
        <p className="info-category">{categoryName}</p>
        <p className="info-country">{country}</p>
      </div>
    </CardContainer>
  );
}

export default BoxStyleCard;
