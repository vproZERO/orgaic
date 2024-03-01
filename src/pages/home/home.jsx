import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Hero from "../../components/hero/hero";
import Banner from "../../components/banner/banner";
import WeWorking from "../../components/we-working/we-working";
import Our from "../../components/our/our";
import { blogData, productsData, testimonialData } from "../../data";
import Button from "../../components/ui/button";
import ButtonArrow from "../../assets/icon/ButtonArrow";
import Testimonial from "../../components/testimonial/testimonial";
import Testimonial2 from "../../assets/img/testimonial-icon.jpg";
import TestimonialStar from "../../assets/icon/stars.svg";
import econicImg from "../../assets/img/econic.png";
import Gallery from "../../components/gellery/gellery";
import Blog from "../../components/blog/blog";
import NewsLatter from "../../components/news-latter/news-latter";

const Home = () => {
  return (
    <div>
      <section className="hero_section py-[247px] mb-16 relative px-20">
        <Hero />
      </section>
      <section className="banner_section flex items-center justify-center gap-9 py-[154px]">
        <Banner />
      </section>
      <section className="bg-doctor px-20 pt-[186px] pb-[199px] we_working_section">
        <WeWorking />
      </section>
      <section className="py-[176px] px-20">
        <h3 className="font-yellowtail text-4xl font-normal text-padua text-center mb-2">
          Categories{" "}
        </h3>
        <p className="text-center text-arapawa font-extrabold text-5xl mb-10">
          Our Products
        </p>
        <div className="grid grid-cols-4 gap-5 mb-[122px]">
          {productsData.slice(0, 8).map((item) => (
            <Our item={item} />
          ))}
        </div>
        <Link to="/shop" className="flex justify-center">
          <Button
            icon={<ButtonArrow />}
            dataAos="fade-up"
            dataAosDuration="1500"
            variant="primary"
          >
            Load More
          </Button>
        </Link>
      </section>
      <section className="px-20 py-[164px] testimonial_section">
        <div className="border-b-2 max-w-[800px] mx-auto pb-[102px] mb-[102px]">
          <h3
            className="text-center text-padua font-yellowtail text-4xl mb-2 font-normal aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Testimonial
          </h3>
          <h2
            className="text-center font-extrabold text-5xl text-arapawa mb-16 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            What Our Customer Saying?
          </h2>
          <div
            className="rounded-full  w-[115px] overflow-hidden mx-auto mb-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={Testimonial2} alt="img" />
          </div>
          <div
            className="w-[122px] mx-auto mb-6 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={TestimonialStar} alt="stars" />
          </div>
          <p
            className="text-center text-city max-w-[780px] mx-auto font-normal text-lg mb-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been.
          </p>
          <h3
            className="font-semibold text-2xl text-arapawa text-center aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Sara Taylor
          </h3>
          <p
            className="text-city font-normal text-sm text-center mb-5 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            Consumer
          </p>

          <div
            className="flex items-center justify-center gap-2 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="rounded-full w-2 h-2 bg-city"></div>
            <div className="rounded-full w-2 h-2 bg-arapawa"></div>
            <div className="rounded-full w-2 h-2 bg-city"></div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-16">
          {testimonialData.map((item) => (
            <Testimonial item={item} />
          ))}
        </div>
      </section>
      <section className="offer_section px-20 py-48 bg-arapawa">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p
              className="font-yellowtail font-normal text-4xl text-padua mb-2 aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              Offer
            </p>
            <h2
              className="text-white font-extrabold text-5xl aos-init aos-animate"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              We Offer Organic For You
            </h2>
          </div>
          <Link to="/shop" className="block">
            <Button
              variant={"secondary"}
              dataAos="fade-left"
              dataAosDuration={"1500"}
              icon={<ButtonArrow />}
            >
              View All Product
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {productsData.slice(0, 4).map((item) => (
            <Our item={item} />
          ))}
        </div>
      </section>
      <section className="econic_section pr-20 flex items-center">
        <div className="h-[931px] ">
          <img src={econicImg} alt="econic img" />
        </div>
        <div
          className="w-[789px] bg-white rounded-3xl aos-init aos-animate py-[77px] pl-[89px] -ml-20"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div>
            <h4
              className="font-yellowtail text-4xl mb-2 font-normal text-padua aos-init aos-animate"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Eco Friendly
            </h4>
            <h2
              className="font-extrabold text-5xl text-arapawa aos-init aos-animate mb-9"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Econis is a Friendly Organic Store
            </h2>
            <div className="mb-9">
              <h3
                className="font-medium text-arapawa text-2xl mb-2 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Start with Our Company First
              </h3>
              <p
                className="max-w-[625px] text-start font-normal text-city text-lg aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mb-9">
              <h3
                className="font-medium text-arapawa text-2xl mb-2 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Learn How to Grow Yourself
              </h3>
              <p
                className="max-w-[625px] text-start font-normal text-city text-lg aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className="mb-9">
              <h3
                className="font-medium text-arapawa text-2xl mb-2 aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Farming Strategies of Today
              </h3>
              <p
                className="max-w-[625px] text-start font-normal text-city text-lg aos-init aos-animate"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="galery_section  bg-[#F1F8F4] py-[187px] grid grid-cols-3 gap-11">
        <Gallery/>
      </section>

      <section className="blog_section px-20 py-[177px]">
        <div className="flex items-end justify-between mb-12">
            <div>
              <h4 className="font-yellowtail text-4xl mb-2 font-normal text-padua aos-init aos-animate" data-aos='fade-right' data-aos-duration='1500'>News</h4>
              <h2 className="font-extrabold text-5xl text-arapawa max-w-[702px] aos-init aos-animate" data-aos='fade-right' data-aos-duration='1500'>Discover weekly content about organic food, & more</h2>
            </div>
          <Link to={"/blog"}>
            <Button icon={<ButtonArrow />} variant='tertiary' dataAos={"fade-left"} dataAosDuration={"1500"}>More News</Button>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-11">
          {blogData.map((item) => (
            <Blog item={item}/>
          ))}
        </div>
      </section>

      <NewsLatter/>
    </div>
  );
};

export default Home;
