import React from 'react';
import { Col, Row, Container, Input, NavLink } from 'reactstrap';

import styles from '../assets/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <Row>
          <Col sm="6" xs="12">
            <div className={styles.header__logo}>
              <NavLink href="/">Cycling store</NavLink>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center" sm="6" xs="12">
            <div className={[styles.header__search].join(' ')}>
              <Input
                placeholder="Поиск..."
                className={[styles.header__search_input, 'shadow-none'].join(' ')}
              />
              <i
                className={[styles.header__search_icon, 'fa-solid fa-magnifying-glass'].join(
                  ' ',
                )}></i>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
