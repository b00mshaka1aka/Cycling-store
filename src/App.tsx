import * as React from 'react';
import './assets/fonts/CeraPro/style.css';

import Catalog from './components/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <Catalog /> */}
      {/* <Product /> */}
      <Cart />
      <Footer />
    </>
  );
};

export default App;
