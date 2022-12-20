import * as React from 'react';
import styled from 'styled-components';
import Categories from './Categories';
import PriceRange from './PriceRange';

const ParametersContainer = styled.div`
  padding: 15px 20px;
  background-color: #fbfbfb;
`;

export const ParametersTitle = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #3d3d3d;
`;

export const ParametersItems = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px 30px;
`;

interface ItemProps {
  active?: boolean;
}

export const ParametersItem = styled.div<ItemProps>`
  margin-bottom: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Cera Pro', sans-serif;
  font-weight: ${(props) => (props.active ? '700' : '400')};
  font-size: 15px;
  color: ${(props) => (props.active ? '#46a358' : '#3d3d3d')};

  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: #46a358;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const categories = [
  {
    name: 'Домашние растения',
    count: 33,
  },
  {
    name: 'Семена',
    count: 65,
  },
  {
    name: 'Садовые растения',
    count: 13,
  },
  {
    name: 'Аксессуары',
    count: 18,
  },
];

const sizes = [
  {
    name: 'Маленькие',
    count: 119,
  },
  {
    name: 'Средние',
    count: 86,
  },
  {
    name: 'Большие',
    count: 78,
  },
];

const Parameters: React.FC = () => {
  const [currentCategory, setCurrentCategory] = React.useState<number>(0);

  const onClickItem = (index: number): void => {
    setCurrentCategory(index);
  };

  return (
    <ParametersContainer>
      <Categories
        title="Категории"
        data={categories}
        onClickItem={onClickItem}
        currentCategory={currentCategory}
      />

      <PriceRange />

      <Categories
        title="Размеры"
        data={sizes}
        onClickItem={onClickItem}
        currentCategory={currentCategory}
        delta={categories.length}
      />
    </ParametersContainer>
  );
};

export default Parameters;
