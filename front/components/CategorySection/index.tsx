import { ICommunity } from 'interfaces/db';
import Link from 'next/link';
import React from 'react';
import HomeSectionCard from 'components/HomeSectionCard';
import { CategorySectionContainer, CategorySectionHeader } from './styles';

interface CategorySectionProps {
  changableCommunities: ICommunity[];
}

function CategorySection({ changableCommunities }: CategorySectionProps) {
  const categoryName = changableCommunities[0]?.Categories[0]?.name;
  return (
    <CategorySectionContainer>
      <CategorySectionHeader>
        <h1>{categoryName}</h1>
      </CategorySectionHeader>
      <div className="cards-container">
        {changableCommunities.map(community => (
          <Link key={community.id} href={`/community/${community.id}`}>
            <a>
              <HomeSectionCard
                profilePhoto={community.profilePhoto}
                categoryName={community.Categories[0].name}
                country={community.country}
                communityName={community.communityName}
              />
            </a>
          </Link>
        ))}
      </div>
    </CategorySectionContainer>
  );
}

export default CategorySection;
