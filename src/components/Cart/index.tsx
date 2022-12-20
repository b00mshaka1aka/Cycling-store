import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'reactstrap';
import CartItem from './CartItem';

const CartTitleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;

  margin: 20px;
`;

const CartHorizontalLine = styled.hr`
  grid-column: 1 / 4;
  border-top: 1px solid rgba(70, 163, 88, 0.5);
  height: 1px;
  width: 100%;
`;

const CartTitle = styled.div`
  text-align: left;
  font-family: 'Cera Pro', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #3d3d3d;
`;

const CartOrderContainer = styled.div`
  grid-column: 1 / 4;
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 10px;
`;

const CartOrderButton = styled.button`
  border: none;
  background-color: #46a358;
  border-radius: 6px;
  padding: 10px 20px;

  font-family: 'Cera Pro';
  font-weight: 500;
  font-size: 16px;
  color: #fff;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #315c39;
  }
`;

const Cart: React.FC = () => {
  return (
    <Container>
      <Row>
        <CartTitleContainer>
          <CartTitle>Товары</CartTitle>
          <CartTitle>Стоимость</CartTitle>
          <CartTitle>Количество</CartTitle>
          <CartTitle>Итого</CartTitle>
        </CartTitleContainer>
        <CartHorizontalLine />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartOrderContainer>
          <CartOrderButton>Оформить заказ</CartOrderButton>
        </CartOrderContainer>
      </Row>
    </Container>
  );
};

export default Cart;
