import React from 'react';
import styles from '../assets/styles/Home.module.scss';

import BestProduсts from '../components/BestProduсts';
import Main from '../components/Main';
import Recommendation from '../components/Recommendation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className={styles.home}>
      <Main />
      <Recommendation />
      <BestProduсts />
      <Footer />
    </div>
  );
};

export default Home;
