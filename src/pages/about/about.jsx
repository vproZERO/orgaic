import React from "react";
import { Link } from "react-router-dom";
import NewsLatter from "../../components/news-latter/news-latter";
import './about.css'
import AboutOffer from "./components/about-offer";
import { aboutOfferData, aboutUserData } from "../../data";
import AboutUsers from "./components/about-users";

const About = () => {
  return (
    <div>
      <section className="about_hero_section py-[184px]">
        <h2 className="text-center font-extrabold text-7xl text-arapawa">
          About
        </h2>
      </section>

      <section className="px-20 py-[177px]">
        <h4 className="font-yellowtail text-4xl font-normal text-padua mb-2 text-center">Team</h4>
        <h2 className="font-extrabold text-5xl text-arapawa text-center mb-4">Our Organic Experts</h2>
        <p className="max-w-[852px] mx-auto text-center text-city font-normal text-lg mb-11">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <div className="grid grid-cols-3 gap-7">
        {aboutUserData.map((item) => (
          <AboutUsers item={item}/>
        ))}
        </div>
      </section>

      <section className="bg-arapawa px-20 py-[188px]">
        <h4 className="text-center font-yellowtail text-4xl text-padua mb-2 aos-init aos-animate" data-aos='fade-up' data-aos-duration='1500'>About Us</h4>
        <h2 className="text-center text-white font-extrabold text-5xl mb-8 aos-init aos-animate" data-aos='fade-up' data-aos-duration='1500'>What We Offer for You</h2>
        <div className="grid grid-cols-4 gap-5">
          {aboutOfferData.map((item) => (
            <AboutOffer item={item}/>
          ))}
        </div>
      </section>
      <NewsLatter />
    </div>
  );
};

export default About;
