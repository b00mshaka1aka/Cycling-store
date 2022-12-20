import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

import cardPlant from '../../assets/images/big_plant.png';

const ProductContainer = styled.div`
  margin: 35px 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
  margin-left: 30px;
`;

const ProductTitle = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #3d3d3d;
`;

const ProductPrice = styled.div`
  position: relative;
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #46a358;
  margin-bottom: 10px;
`;

const ProductHorizontalLine = styled.hr`
  border-top: 1px solid rgba(70, 163, 88, 0.5);
  height: 1px;
  width: 100%;
`;

const ProductShortDescriptionTitle = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #3d3d3d;

  margin-bottom: 10px;
`;

const ProductShortDescriptionText = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #727272p;

  margin-bottom: 10px;
`;

const ProductAddContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductAddButton = styled.button`
  border: none;
  background-color: #46a358;
  width: 33px;
  height: 38px;
  border-radius: 29px;
  color: #ffffff;
  margin: 10px;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #315c39;
  }
`;

const ProductAddCount = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #3d3d3d;
  margin: 10px;
`;

const ProductAddToCartButton = styled.button`
  border: none;
  background-color: #46a358;

  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  border-radius: 6px;
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 10px;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #315c39;
  }
`;

const ProductAddToFavorites = styled.button`
  border: none;
  background-color: #46a358;
  width: 40px;
  height: 40px;

  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #ffffff;
  border-radius: 6px;

  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #315c39;
  }
`;

const Product: React.FC = () => {
  const [count, setCount] = React.useState(1);

  const onDecrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const onIncrementCount = () => {
    if (count < 100) setCount(count + 1);
  };

  return (
    <Container>
      <Row>
        <Col sm="12">
          <ProductContainer>
            <img className="img-fluid" src={cardPlant} />
            <ProductInfoContainer>
              <ProductTitle>Barberton Daisy</ProductTitle>
              <ProductPrice>$119.00</ProductPrice>
              <ProductHorizontalLine />
              <ProductShortDescriptionTitle>Short description:</ProductShortDescriptionTitle>
              <ProductShortDescriptionText>
                The ceramic cylinder planters come with a wooden stand to help elevate your plants
                off the ground. The ceramic cylinder planters come with a wooden stand to help
                elevate your plants off the ground.
              </ProductShortDescriptionText>
              <ProductAddContainer>
                <ProductAddButton onClick={onDecrementCount}>
                  <i className="fa-solid fa-minus" />
                </ProductAddButton>
                <ProductAddCount>{count}</ProductAddCount>
                <ProductAddButton onClick={onIncrementCount}>
                  <i className="fa-solid fa-plus" />
                </ProductAddButton>
                <ProductAddToCartButton>add to cart</ProductAddToCartButton>
                <ProductAddToFavorites>
                  <i className="fa-solid fa-heart" />
                </ProductAddToFavorites>
              </ProductAddContainer>
            </ProductInfoContainer>
          </ProductContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default Product;
