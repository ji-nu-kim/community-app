import React from 'react';
import { HomeCardContainer } from './styles';

interface HomeCardProps {
  profilePhoto: string;
  communityName: string;
  categoryName: string;
  country: string;
}

function HomeCard({
  profilePhoto,
  communityName,
  categoryName,
  country,
}: HomeCardProps) {
  return (
    <HomeCardContainer>
      {profilePhoto ? (
        <img
          width="250"
          src={`http://localhost:3065/${profilePhoto}`}
          alt="사진"
        />
      ) : (
        <div className="image-cover"></div>
      )}
      <div className="homecard-info">
        <div className="info-title">{communityName}</div>
        <p className="info-category">{categoryName}</p>
        <p className="info-country">{country}</p>
      </div>
    </HomeCardContainer>
  );
}

export default HomeCard;
