import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Hero from "../../components/hero/hero";
import heroBgImg from "../../assets/img/hero-bg-img.png";

const Home = () => {
  return (
    <div>
      <section className="hero_section py-[247px] mb-16 relative px-20">
          <Hero />
      </section>
    </div>
  );
};

export default Home;
