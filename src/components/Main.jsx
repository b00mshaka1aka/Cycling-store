import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from '../assets/styles/Main.module.scss';

import Categories from './Categories';
import NewsCarousel from './NewsCarousel';

const Main = () => {
  return (
    <section className={styles.main}>
      <Container>
        <Row>
          <Col className="text-center" lg="3" xs="12">
            <Categories />
          </Col>
          <Col
            className={[
              'd-flex',
              'justify-content-center',
              'align-items-center',
              'd-none',
              'mt-md-4',
              'd-md-flex',
            ].join(' ')}
            lg="9"
            md="12">
            <NewsCarousel />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Main;
