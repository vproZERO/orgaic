import React from "react";
import AboutChooseIcon from "../../../assets/icon/AboutChooseIcon";

const AboutChoose = () => {
  return (
    <div>
      <h4
        className="font-yellowtail text-4xl font-normal text-padua mb-2 aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Why Choose us?
      </h4>
      <h2
        className="max-w-[524px] font-extrabold text-5xl text-arapawa mb-6 aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        We do not buy from the open market & traders.
      </h2>
      <p
        className="max-w-[671px] text-city font-normal text-lg mb-9 aos-init aos-animate"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        Simply dummy text of the printing and typesetting industry. Lorem had
        ceased to been the industry's standard the 1500s, when an unknown
      </p>
      <div className="mb-6 w-[490px]">
        <div
          className="rounded-full py-[29px] pl-[27px] mb-3 w-[339px] bg-[#ECECEC] flex items-center gap-2 aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            <AboutChooseIcon />
          </div>
          <span className="text-arapawa font-medium text-xl">
            100% Natural Product
          </span>
        </div>
        <p
          className="w-[444px] mb-6 float-right text-city font-normal text-lg aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Simply dummy text of the printing and typesetting industry Lorem Ipsum
        </p>
      </div>
      <div className=" w-[490px]">
        <div
          className="rounded-full py-[29px] pl-[27px] mb-3 w-[339px] bg-[#ECECEC] flex items-center gap-2 aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div>
            <AboutChooseIcon />
          </div>
          <span className="text-arapawa font-medium text-xl">
            {" "}
            Increases resistance
          </span>
        </div>
        <p
          className="w-[444px] float-right text-city font-normal text-lg aos-init aos-animate"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          Filling, and temptingly healthy, our Biona Organic Granola with Wild
          Berries is just the thing
        </p>
      </div>
    </div>
  );
};

export default AboutChoose;
