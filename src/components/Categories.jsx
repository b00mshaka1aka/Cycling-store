import React from 'react';

import styles from '../assets/styles/Categories.module.scss';

const categories = [
  'Детский',
  'Женский',
  'Грузовой',
  'Электровелосипед',
  'Велосипед-тандем',
  'Лигерад',
  'Уницикл',
  'Чоппер',
  'Круизёр',
  'Aксессуары',
];

const Categories = () => {
  return (
    <div>
      {categories.map((el) => (
        <div key={el} className={styles.category}>
          <i className={['fa-solid fa-bicycle', styles.icon].join(' ')}></i>
          {el}
        </div>
      ))}
    </div>
  );
};

export default Categories;
