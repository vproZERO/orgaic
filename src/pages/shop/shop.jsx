import React from "react";
import { Link, Outlet } from "react-router-dom";
import NewsLatter from "../../components/news-latter/news-latter";
import Our from "../../components/our/our";
import { productsData } from "../../data";
import useScrollTop from "../../hooks/useScrollTop";
import "./shop.css";

const Shop = () => {
  useScrollTop();
  return (
    <div>
      <section className="shop_hero_section py-[184px]">
        <h2 className="text-center font-extrabold text-7xl text-arapawa">
          Shop
        </h2>
      </section>

      <section className="pt-[90px] pb-[140px] px-20">
        <div className="grid grid-cols-4 gap-5">
          {productsData.map((item) => (
            <Our item={item} />
          ))}
        </div>
      </section>

      <NewsLatter />
    </div>
  );
};

export default Shop;
