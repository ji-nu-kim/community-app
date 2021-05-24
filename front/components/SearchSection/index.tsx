import SearchSectionCard from 'components/SearchSectionCard';
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
      <div className="cards-container">
        {categories.map(v => (
          <SearchSectionCard
            id={v.id}
            key={v.name}
            name={v.name}
            img={`http://localhost:3065/${v.profilePhoto}`}
            width="240"
            height="220"
          />
        ))}
      </div>
    </SectionContainer>
  );
}

export default SearchSection;
