import Link from 'next/link';
import React from 'react';
import { CardContainer } from './styles';

interface CategoryCardProps {
  name: string;
  img: string;
  width: string;
  height: string;
}

function CategoryCard({ name, img, width, height }: CategoryCardProps) {
  return (
    <>
      <Link href={`/category/${name}`}>
        <a>
          <CardContainer img={img} width={width} height={height}>
            <h2>{name}</h2>
          </CardContainer>
        </a>
      </Link>
    </>
  );
}

export default CategoryCard;
