import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../../../assets/icon/ButtonArrow";
import Button from "../../../components/ui/button";

const ProductDetails = ({ result }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex items-center justify-center gap-[88px]">
      <div className="relative">
        <div className="w-[591px] h-[563px]">
          <img className="object-scale-down" src={result.img} alt="" />
        </div>
        <span className="absolute py-1 px-3 bg-arapawa text-white font-semibold text-base rounded-lg  top-[38px] left-[35px]">
          {result.category}
        </span>
      </div>
      <div>
        <h2 className="text-arapawa font-semibold text-4xl mb-2">
          {result.name}
        </h2>
        <div className="w-[84px] mb-2">
          <img src={result.stars} alt="stars" />
        </div>
        <div className="flex items-center mb-7  gap-2">
          <span className="text-[#B8B8B8] text-xl font-semibold line-through">
            {result.subprice}
          </span>
          <span className="font-bold text-arapawa text-2xl ">
            {result.price}
          </span>
        </div>
        <p className="max-w-[658px] text-city font-normal text-lg mb-9">
          {result.text}
        </p>

        <div className="flex items-center gap-6">
          <p className="text-arapawa font-bold text-xl">Quantity :</p>
          <Button variant={"tertiary"} onClick={increment}>
            {count}
          </Button>
          <Link to={"/cart"}>
            <Button icon={<ButtonArrow />} variant={"primary"}>
              Add To Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
