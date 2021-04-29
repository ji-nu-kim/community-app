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

  console.log(categories);
  return (
    <CheckBoxContainer>
      {mainCategories &&
        mainCategories.map(v => (
          <div key={v.name}>
            {categories.includes(v.name) ? (
              <input
                type="checkbox"
                id={v.name}
                onChange={onChangeCheckBox(v.name)}
                defaultChecked
              />
            ) : (
              <input
                type="checkbox"
                id={v.name}
                onChange={onChangeCheckBox(v.name)}
              />
            )}
            <label htmlFor={v.name}>{v.name}</label>
          </div>
        ))}
    </CheckBoxContainer>
  );
}

export default CategoryList;
