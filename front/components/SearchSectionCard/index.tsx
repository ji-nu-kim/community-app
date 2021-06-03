import Link from 'next/link';
import React from 'react';
import { CardContainer } from './styles';

interface CategoryCardProps {
  id: number;
  name: string;
  img: string | null;
  width: string;
  height: string;
}

function CategoryCard({ name, img, width, height, id }: CategoryCardProps) {
  return (
    <>
      <Link href={`/category/${id}`}>
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
