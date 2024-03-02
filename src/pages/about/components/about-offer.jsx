import React from "react";

const AboutOffer = ({ item }) => {
  return (
    <div key={item.id} className>
      <div
        className="w-[334px] bg-white rounded-[30px] mb-6 aos-init aos-animate"
        data-aos={item.id % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-duration="1500"
      >
        <img src={item.img} alt={item.title} />
      </div>
      <h2 className="text-center font-medium text-2xl text-white ">
        {item.title}
      </h2>
    </div>
  );
};

export default AboutOffer;
