import CategoryCard from 'components/CategoryCard';
import { ICategory } from 'interfaces/db';
import React from 'react';
import { SectionContainer } from './styles';

interface SearchSectionProps {
  title: string;
  categories: ICategory[];
}

function SearchSection({ title, categories }: SearchSectionProps) {
  return (
    <SectionContainer textColor={title}>
      <h1>{title}</h1>
      <div className="cards">
        {categories.map(v => (
          <CategoryCard
            key={v.name}
            name={v.name}
            img={`http://localhost:3065/${v.profilePhoto}`}
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default SearchSection;
