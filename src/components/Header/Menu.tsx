import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { change } from '../../features/currentPage';

const items = ['Каталог', 'Корзина'];
const itemLinks = ['', 'cart'];

const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ItemProps {
  active?: boolean;
}

const Item = styled.div<ItemProps>`
  position: relative;

  font-family: 'Cera Pro', sans-serif;
  font-weight: ${(props) => (props.active ? 700 : 400)};
  color: #3d3d3d;
  font-size: 16px;
  padding: 25px 0;
  margin: 0 25px;

  transition: all 0.1s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${(props) => (props.active ? '' : 'color: #46a358;')}
  }

  &:after {
    ${(props) => (props.active ? '' : 'display: none;')}

    content: '';
    position: absolute;

    width: 100%;
    height: 3px;

    bottom: 0;
    left: 0;

    background-color: #46a358;
  }
`;

const HeaderMenu: React.FC = () => {
  const currentPage = useSelector((state: RootState) => state.currentPage.value);
  const dispatch = useDispatch();
  console.log(currentPage);

  const [current, setCurrent] = React.useState<number>(currentPage);

  const onClickItem = (index: number): void => {
    dispatch(change(index));
    setCurrent(index);
  };

  return (
    <ItemsContainer>
      {items.map((el, index) => (
        <Link key={el} style={{ textDecoration: 'none' }} to={'/' + itemLinks[index]}>
          <Item active={index === current} onClick={() => onClickItem(index)}>
            {el}
          </Item>
        </Link>
      ))}
    </ItemsContainer>
  );
};

export default HeaderMenu;
