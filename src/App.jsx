import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import PageNotFound from "./pages/not-found/page-not-found";
import ShopSingle from "./pages/shop-single/shop-single";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="home/:slug" element={<ShopSingle />} />
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
