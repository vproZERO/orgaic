import React from "react";
import aboutDoIcon from "../../../assets/icon/about-do.svg";
import aboutDoIcon2 from "../../../assets/icon/about-do2.svg";
import ButtonArrow from "../../../assets/icon/ButtonArrow";
import Button from "../../../components/ui/button";

const AboutDo = () => {
  return (
    <div>
      <h4
        className="font-yellowtail text-4xl font-normal text-padua aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        About Us
      </h4>
      <h2
        className="font-extrabold text-5xl text-arapawa mb-3 aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        We do Creative <br />
        Things for Success
      </h2>
      <p
        className="max-w-[671px] text-city font-normal text-lg mb-7 aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <p
        className="max-w-[671px] text-city font-normal text-lg mb-12 aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley.
      </p>
      <div
        className="flex items-center justify-between mb-14 aos-init aos-animate"
        data-aos="fade-left"
        data-aos-duration="1500"
      >
        <div className="flex items-center gap-4">
          <div>
            <img src={aboutDoIcon} alt="icon 1" />
          </div>
          <h3 className="max-w-[226px] text-arapawa font-medium text-2xl">
            Modern Agriculture Equipment
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <img src={aboutDoIcon2} alt="icon 2" />
          </div>
          <h3 className="max-w-[226px] text-arapawa font-medium text-2xl">
            No growth hormones are used
          </h3>
        </div>
      </div>
      <Button
        icon={<ButtonArrow />}
        variant="primary"
        dataAos={"fade-left"}
        dataAosDuration={"1500"}
      >
        Explore More
      </Button>
    </div>
  );
};

export default AboutDo;
