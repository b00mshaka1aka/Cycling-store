import React from 'react';
import styled from 'styled-components';

import plant from '../../assets/images/card_plant.png';
import delete_icon from '../../assets/images/delete.svg';

const CartItemContainer = styled.div`
  background-color: #fbfbfb;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;

  margin: 10px;
`;

const CartItemProductContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const CartItemProductTitle = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #3d3d3d;
`;

const CartItemProductImage = styled.img`
  width: 70px;
  height: 70px;
  margin: 15px;
`;

const CartItemPrice = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #3d3d3d;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-left: 10px;
`;

const CartItemQuantityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CartItemQuantityAddButton = styled.button`
  border: none;
  background-color: #46a358;
  width: 21px;
  height: 25px;
  border-radius: 29px;
  color: #ffffff;
  margin: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 16px;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #315c39;
  }
`;

const CartItemQuantityCount = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #3d3d3d;
  margin: 10px;
`;

const CartItemLastColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartItemTotalPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #46a358;
`;

const CartItemDeleteIcon = styled.img`
  width: 24px;
  height: 24px;

  margin: 10px;

  &:hover {
    cursor: pointer;
  }
`;
const CartItem: React.FC = () => {
  return (
    <CartItemContainer>
      <CartItemProductContainer>
        <CartItemProductImage src={plant} />
        <CartItemProductTitle>Barberton Daisy</CartItemProductTitle>
      </CartItemProductContainer>
      <CartItemPrice>$119.00</CartItemPrice>
      <CartItemQuantityContainer>
        <CartItemQuantityAddButton>
          <i className="fa-solid fa-minus" />
        </CartItemQuantityAddButton>
        <CartItemQuantityCount>1</CartItemQuantityCount>
        <CartItemQuantityAddButton>
          <i className="fa-solid fa-plus" />
        </CartItemQuantityAddButton>
      </CartItemQuantityContainer>
      <CartItemLastColumnContainer>
        <CartItemTotalPrice>$238.00</CartItemTotalPrice>
        <CartItemDeleteIcon src={delete_icon} />
      </CartItemLastColumnContainer>
    </CartItemContainer>
  );
};

export default CartItem;
