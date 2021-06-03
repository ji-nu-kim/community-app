import { ICategory, ICommunity } from 'interfaces/db';
import Link from 'next/link';
import React from 'react';
import HomeSectionCard from 'components/HomeSectionCard';
import { CategorySectionContainer, CategorySectionHeader } from './styles';

interface CategorySectionProps {
  changableCommunities: ICommunity[];
  singleCategory: ICategory;
}

function CategorySection({
  changableCommunities,
  singleCategory,
}: CategorySectionProps) {
  return (
    <CategorySectionContainer
      img={`http://localhost:3065/${singleCategory.profilePhoto}`}
    >
      <CategorySectionHeader>
        <h1>{singleCategory.name}</h1>
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
