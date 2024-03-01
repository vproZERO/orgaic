import React from "react";
import ButtonArrow from "../../assets/icon/ButtonArrow";
import Button from "../ui/button";

const Hero = () => {
  return (
    <div className="z-40">
      <p className="text-[#68A47F] font-normal font-yellowtail text-4xl mb-2">
        100% Natural Food
      </p>
      <h2 className="text-arapawa font-extrabold text-6xl max-w-[530px] mb-6">Choose the best healthier way <br /> of life</h2>
      <div>
        <Button variant='secondary' icon={<ButtonArrow/>}>Explore Now</Button>
      </div>
    </div>
  );
};

export default Hero;
