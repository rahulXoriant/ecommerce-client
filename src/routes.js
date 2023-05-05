import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Category from './pages/Category';
import Checkout from './pages/Checkout';
import Search from './pages/Search';
import Layout from './layouts/Layout';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categorySlug" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default routes;