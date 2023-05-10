import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layouts/Layout";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Search from "./pages/Search";

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
};

export default routes;
