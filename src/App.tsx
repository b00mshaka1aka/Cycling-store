import * as React from 'react';
import './assets/fonts/CeraPro/style.css';
import { Routes, Route, Outlet } from 'react-router-dom';

import Catalog from './components/Catalog';
import Header from './components/Header';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Auth from './components/Auth';
import Registration from './components/Registration';

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
};

export default App;
