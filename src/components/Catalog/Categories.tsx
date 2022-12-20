import * as React from 'react';
import { ParametersTitle, ParametersItems, ParametersItem } from './Parameters';

interface CategoriesProps {
  title: string;
  data: {
    name: string;
    count: number;
  }[];
  onClickItem: (index: number) => void;
  currentCategory: number;
  delta?: number;
}

const Categories: React.FC<CategoriesProps> = ({
  title,
  data,
  onClickItem,
  currentCategory,
  delta,
}) => {
  return (
    <>
      <ParametersTitle>{title}</ParametersTitle>
      <ParametersItems>
        {data.map((item, index) => (
          <>
            <ParametersItem
              active={(delta ? index + delta : index) === currentCategory}
              key={item.name}
              onClick={() => onClickItem(delta ? index + delta : index)}>
              {item.name}
              <div>({item.count})</div>
            </ParametersItem>
          </>
        ))}
      </ParametersItems>
    </>
  );
};

export default Categories;
