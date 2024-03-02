import React from "react";
import { productsData } from "../../data";
import { useParams } from "react-router-dom";
import NewsLatter from "../../components/news-latter/news-latter";
import "./shop-single.css";
import ProductDetails from "./components/product-details";
import useScrollTop from "../../hooks/useScrollTop";
import Our from "../../components/our/our";
import Button from "../../components/ui/button";

const ShopSingle = () => {
  const params = useParams();
  useScrollTop();

  const result = productsData.find((obj) => obj.id === Number(params.slug));

  const randomproducts = productsData
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);

  console.log(result);
  return (
    <div>
      <section className="shop_single_hero_section py-[184px]">
        <h2 className="text-center font-extrabold text-7xl text-arapawa">
          Shop Single
        </h2>
      </section>

      <section className="px-20 py-[90px] ">
        <ProductDetails result={result} />
      </section>

      <section className="px-20">
        <div className="flex items-center mb-[27px] justify-center gap-5">
          <Button variant={"primary"}>Product Description</Button>
          <Button variant={"tertiary"}>Additional Info</Button>
        </div>
        <p className="mx-auto text-center max-w-[1137px] text-city font-nromal text-lg">
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </section>

      <section className="px-20 py-20">
        <h2 className="text-center font-extrabold text-5xl mb-10 text-arapawa">
          Related Products
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {randomproducts.map((item) => (
            <Our item={item} />
          ))}
        </div>
      </section>

      <NewsLatter />
    </div>
  );
};

export default ShopSingle;
