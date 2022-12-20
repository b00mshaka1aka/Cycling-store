import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

import CardItem from './CardItem';
import Menu from './Menu';
import Parameters from './Parameters';
import Pagination from './Pagination';

const CatalogContainer = styled.div`
  margin-top: 45px;
`;

const CardItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  margin-bottom: 60px;
`;

const Catalog: React.FC = () => {
  return (
    <CatalogContainer>
      <Container>
        <Row>
          <Col sm="3">
            <Parameters />
          </Col>
          <Col sm="9">
            <Row>
              <Menu />
            </Row>
            <Row>
              <CardItems>
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
                <CardItem />
              </CardItems>
            </Row>
            <Row>
              <Pagination />
            </Row>
          </Col>
        </Row>
      </Container>
    </CatalogContainer>
  );
};

export default Catalog;
