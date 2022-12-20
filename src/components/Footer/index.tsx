import React from 'react';
import { Container, Row } from 'reactstrap';
import styled from 'styled-components';

const FooterContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
  padding-top: 10px;

  &::after {
    position: absolute;
    content: '';
    height: 1px;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    background-color: rgba(70, 163, 88, 0.2);
  }
`;

const FooterText = styled.div`
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #3d3d3d;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Row>
        <FooterContainer>
          <FooterText>© 2022 GreenShop. Все права защищены.</FooterText>
        </FooterContainer>
      </Row>
    </Container>
  );
};

export default Footer;
