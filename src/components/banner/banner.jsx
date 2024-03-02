import React from "react";
import { bannerData } from "../../data";

const Banner = () => {
  return (
    <>
      {bannerData.map((item) => (
        <div
          key={item.id}
          className="w-[682px] h-[367px] py-[109px] pl-[54px] rounded-[30px] relative aos-init aos-animate"
          data-aos={item.id === 1 ? "fade-right" : "fade-left"}
          data-aos-duration="1500"
        >
          <div className="z-50 absolute">
            <h3
              className={
                item.id === 1
                  ? "font-yellowtail text-white mb-1 font-normal  text-4xl"
                  : "font-yellowtail  mb-1 font-normal text-padua text-4xl"
              }
            >
              {item.category}
            </h3>
            <h2
              className={
                item.id === 1
                  ? "max-w-[270px] font-extrabold text-4xl text-white"
                  : "max-w-[270px] font-extrabold text-4xl text-arapawa"
              }
            >
              {item.title}
            </h2>
          </div>
          <div className="absolute z-10 inset-0">
            <img src={item.img} alt={item.category} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Banner;
