import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from '../assets/styles/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          <Col sm="12">
            <p className="text-center">© Все права защищены. 2022 г. Михаил Шишкин</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
