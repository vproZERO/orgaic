import React from "react";
import { productsData } from "../../data";
import { useParams } from "react-router-dom";
import NewsLatter from "../../components/news-latter/news-latter";
import './shop-single.css'

const ShopSingle = () => {
  const params = useParams();

  const result = productsData.find((obj) => obj.id === Number(params.slug));

  console.log(result);
  return (
    <div>
      <section className="shop_single_hero_section py-[184px]">
        <h2 className="text-center font-extrabold text-7xl text-arapawa">
          Shop Single
        </h2>
      </section>

      <NewsLatter />
    </div>
  );
};

export default ShopSingle;
