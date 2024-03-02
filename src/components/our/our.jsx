import React from "react";
import { Link } from "react-router-dom";

const Our = ({ item }) => {
  return (
    <div
      className="aos-init aos-animate"
      data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"}
      data-aos-duration="1500"
      key={item.id}
    >
      <Link
        key={item.id}
        to={`/shop-single/${item.id}`}
        className="border-[1px] bg-white shadow-md rounded-3xl block px-7 pt-7 pb-4 transition hover:-translate-y-2"
      >
        <span className="font-semibold text-base mb-2 inline-block text-white bg-arapawa py-[5px] px-3 rounded-lg">
          {item.category}
        </span>
        <div className="h-[375px]">
          <img src={item.img} alt={item.name} />
        </div>
        <p className="text-arapawa text-xl font-semibold pb-3 border-b-2 mb-2 border-[#DEDDDD]">
          {item.name}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#B8B8B8] font-semibold text-sm line-through">
              {item.subprice}
            </span>
            <span className="text-arapawa font-bold text-lg">{item.price}</span>
          </div>
          <div>
            <img src={item.stars} alt="" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Our;
