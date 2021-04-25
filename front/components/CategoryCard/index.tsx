import Link from 'next/link';
import React from 'react';
import { CardContainer } from './styles';

interface CategoryCardProps {
  name: string;
  img: string;
}

function CategoryCard({ name, img }: CategoryCardProps) {
  return (
    <>
      <Link href={`/category/${name}`}>
        <a>
          <CardContainer img={img}>
            <h2>{name}</h2>
          </CardContainer>
        </a>
      </Link>
    </>
  );
}

export default CategoryCard;
