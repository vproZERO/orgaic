import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main-layout";
import About from "./pages/about/about";
import Home from "./pages/home/home";
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
          <Route path="shop-single" element={<ShopSingle />} />
        </Route>
        <Route path="*" element={<h1>Page not found</h1>}/>
      </Routes>
    </>
  );
}

export default App;
