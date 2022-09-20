import * as React from 'react';
import './assets/fonts/CeraPro/style.css';
import Catalog from './components/Catalog';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Catalog />
    </>
  );
};

export default App;
