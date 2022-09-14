import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import styles from '../assets/styles/Recommendation.module.scss';

import label from '../assets/images/label.svg';
import like from '../assets/images/like.svg';
import russia from '../assets/images/russia.svg';
import sale from '../assets/images/sale.svg';
import service from '../assets/images/service.svg';
import truck from '../assets/images/truck.svg';

const recommendations = [
  {
    img: label,
    text: 'Официальный дилер',
  },
  {
    img: like,
    text: 'Огромный ассортимент',
  },
  {
    img: russia,
    text: 'Продажи по России',
  },
  {
    img: sale,
    text: 'Самые низкие цены',
  },
  {
    img: service,
    text: 'Сервисное обслуживание',
  },
  {
    img: truck,
    text: 'Доставка вовремя',
  },
];

const Recommendation = () => {
  return (
    <section className={styles.recommendation}>
      <Container>
        <Row>
          <Col className={[styles.title, 'text-center'].join(' ')} sm="12">
            <h1>Почему выбирают именно нас?</h1>
          </Col>
        </Row>
        <Row className={styles.items}>
          {recommendations.map((el) => (
            <Col
              key={el.text}
              lg={recommendations.length / 3}
              md={recommendations.length}
              sm="12"
              className={styles.item}>
              <img className={[styles.img, 'img-fluid'].join(' ')} src={el.img} alt={el.text} />
              <p>{el.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Recommendation;
