import React from 'react';
import styled from 'styled-components';

import next from '../../assets/images/next.svg';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-bottom: 30px;
`;

interface ButtonProps {
  active?: boolean;
}

const PaginationButton = styled.button<ButtonProps>`
  width: 35px;
  height: 35px;

  background-color: ${(props) => (props.active ? '#46a358' : '#ffffff')};

  border: none;
  font-family: 'Cera Pro', sans-serif;
  font-weight: ${(props) => (props.active ? 700 : 300)};
  font-size: 18px;
  color: ${(props) => (props.active ? '#ffffff' : '#3d3d3d')};
  margin: 5px;

  border: 1px solid #e5e5e5;
  border-radius: 4px;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? '#315c39' : '#ffffff')};
    border: 1px solid ${(props) => (props.active ? '#e5e5e5' : '#3d3d3d')};
  }
`;

const pages = ['1', '2', '3', '4', '5'];

const Pagination: React.FC = () => {
  const [current, setCurrent] = React.useState<number>(0);

  const onClickItem = (index: number): void => {
    setCurrent(index);
  };

  return (
    <PaginationContainer>
      {pages.map((el, index) => (
        <PaginationButton active={index === current} key={el} onClick={() => onClickItem(index)}>
          {el}
        </PaginationButton>
      ))}
      <PaginationButton onClick={() => (current < pages.length - 1 ? setCurrent(current + 1) : '')}>
        <img className="img-fluid" src={next} alt="Next" />
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
