import CategoryCard from 'components/CategoryCard';
import React from 'react';
import { CategoryTypes } from '../../utils/categories';
import { SectionContainer } from './styles';

interface SearchSectionProps {
  title: string;
  categories: CategoryTypes;
}

function SearchSection({ title, categories }: SearchSectionProps) {
  return (
    <SectionContainer textColor={title}>
      <h1>{title}</h1>
      <div className="cards">
        {categories.map(v => (
          <CategoryCard key={v.name} name={v.name} img={v.img} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default SearchSection;
