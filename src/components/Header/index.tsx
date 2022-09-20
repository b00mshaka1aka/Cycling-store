import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styled from 'styled-components';

import Logo from './Logo';
import Menu from './Menu';
import Service from './Service';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const Line = styled.hr`
  border-top: 0.3px solid rgba(70, 163, 88, 0.5);
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col sm="12">
          <HeaderContainer>
            <Logo />
            <Menu />
            <Service />
          </HeaderContainer>
          <Line />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
