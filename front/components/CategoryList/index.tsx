import { ICategory } from 'interfaces/db';
import React, { Dispatch, SetStateAction, useCallback } from 'react';
import { CheckBoxContainer } from './styles';

interface CategoryListProps {
  mainCategories: ICategory[];
  setCategories: Dispatch<SetStateAction<string[]>>;
  categories: string[];
}

function CategoryList({
  mainCategories,
  setCategories,
  categories,
}: CategoryListProps) {
  const onChangeCheckBox = useCallback(
    (name: string) => (e: any) => {
      if (categories.length < 5) {
        if (e.target.checked) {
          setCategories(prev => [...prev, name]);
        } else {
          setCategories(prev => [...prev].filter(v => v != name));
        }
      } else {
        if (e.target.checked) {
          alert('5개만 선택할 수 있습니다');
          e.target.checked = false;
        } else {
          setCategories(prev => [...prev].filter(v => v != name));
        }
      }
    },
    [categories]
  );

  return (
    <CheckBoxContainer>
      {mainCategories &&
        mainCategories.map(category => (
          <div key={category.name}>
            {categories.includes(category.name) ? (
              <input
                type="checkbox"
                id={category.name}
                onChange={onChangeCheckBox(category.name)}
                defaultChecked
              />
            ) : (
              <input
                type="checkbox"
                id={category.name}
                onChange={onChangeCheckBox(category.name)}
              />
            )}
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        ))}
    </CheckBoxContainer>
  );
}

export default CategoryList;
