import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../../assets/icon/ButtonArrow";
import Working from "../../assets/icon/working.svg";
import Working2 from "../../assets/icon/working2.svg";
import Button from "../ui/button";

const WeWorking = () => {
  return (
    <div className="flex items-center justify-end">
      <div>
        <div className="mb-11">
          <h3
            className="font-yellowtail text-4xl font-normal text-padua mb-2 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            About Us
          </h3>
          <h2
            className="text-arapawa font-extrabold text-5xl mb-4 aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            We Believe in Working <br /> Accredited Farmers
          </h2>
          <p
            className="max-w-[690px] font-normal text-city text-lg aos-init aos-animate"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="mb-11">
          <div
            className="flex items-center gap-5 mb-8 aos-init aos-animate"
            data-aos-duration="1500"
            data-aos="fade-left"
          >
            <div>
              <img src={Working} alt="img" />
            </div>
            <div>
              <h2 className="text-arapawa font-extrabold text-2xl mb-2">
                Organic Foods Only
              </h2>
              <p className="max-w-[440px] text-city font-normal text-lg">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-5 aos-init aos-animate"
            data-aos-duration="2000"
            data-aos="fade-left"
          >
            <div>
              <img src={Working2} alt="img" />
            </div>
            <div>
              <h2 className="text-arapawa font-extrabold text-2xl mb-2">
                Quality Standards
              </h2>
              <p className="max-w-[440px] text-city font-normal text-lg">
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
        <Link to="/shop">
          <Button
            variant="primary"
            dataAos={"fade-left"}
            dataAosDuration={"2000"}
            icon={<ButtonArrow />}
          >
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WeWorking;
