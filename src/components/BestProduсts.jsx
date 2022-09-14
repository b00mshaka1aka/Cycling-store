import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from '../assets/styles/BestProducts.module.scss';

import CardProduct from './CardProduct';

const BestProduсts = () => {
  return (
    <div className={styles.best_products}>
      <Container>
        <Row>
          <Col sm="12">
            <h2 className="text-center">Самые покупаемые велосипеды</h2>
          </Col>
        </Row>
        <Row>
          <Col sm="12" md="6" lg="3">
            <CardProduct />
          </Col>
          <Col sm="12" md="6" lg="3">
            <CardProduct />
          </Col>
          <Col sm="12" md="6" lg="3">
            <CardProduct />
          </Col>
          <Col sm="12" md="6" lg="3">
            <CardProduct />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BestProduсts;
