import * as React from 'react';
import styled from 'styled-components';

import plantImage from '../../assets/images/card_plant.png';
import heart from '../../assets/images/heart.svg';
import cart from '../../assets/images/cart.svg';

const CardItemContainer = styled.div`
  position: relative;
  padding: 10px;
  margin-top: 30px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &::before {
    content: '';
    position: absolute;
    height: 1px;
    left: 10px;
    top: 10px;
    right: 10px;
    background-color: #46a358;
    transition: all 0.1s ease-in-out;
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
  }

  transition: all 0.1s ease-in-out;
`;

const CardItemButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const CardItemButton = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 35px;
  margin: 5px;

  border: none;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 10px 20px;

  font-family: 'Cera Pro';
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  transition: all 0.1s ease-in-out;

  &:hover {
    border: 1px solid #46a358;
  }
`;

const CardItemImage = styled.img`
  width: 250px;

  &:hover {
    cursor: pointer;
  }
`;

const CardItemTitle = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #3d3d3d;
`;

const CardItemCost = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #46a358;
`;

const CardItem: React.FC = () => {
  return (
    <CardItemContainer>
      <CardItemImage className="img-fluid" src={plantImage} alt="Card plant" />
      <CardItemTitle>Barberton Daisy</CardItemTitle>
      <CardItemCost>$119.00</CardItemCost>
      <CardItemButtonsContainer>
        <CardItemButton>
          <img className="img-fluid" src={heart} alt="Heart" />
        </CardItemButton>
        <CardItemButton>
          <img className="img-fluid" src={cart} alt="Cart" />
        </CardItemButton>
      </CardItemButtonsContainer>
    </CardItemContainer>
  );
};

export default CardItem;
