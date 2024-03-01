import React from "react";
import { productsData } from "../../data";
import { useParams } from "react-router-dom";

const ShopSingle = () => {
  const params = useParams();

  const result = productsData.find((obj)=> obj.id === Number(params.slug))

  console.log(result);
  return (
    <div className="text-red-500">
      ShopSingle
    </div>
  );
};

export default ShopSingle;
