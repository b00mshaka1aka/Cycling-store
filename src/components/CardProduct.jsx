import React from 'react';

import styles from '../assets/styles/CardProduct.module.scss';

import image from '../assets/images/aspect_oasis.jpg';

const CardProduct = () => {
  const title = 'Aspect Oasis';
  const cost = 36990;
  const img = image;

  return (
    <div className={styles.card}>
      <img className="img-fluid" src={img} alt={title} />
      <div className={styles.title}>{title}</div>
      <div className={styles.card_footer}>
        <div className={styles.cost}>{cost} ₽</div>
        <button className={[styles.button, 'btn'].join(' ')}>Добавить</button>
      </div>
    </div>
  );
};

export default CardProduct;
