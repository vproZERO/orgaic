import React from "react";
import { Link } from "react-router-dom";
import FooterFacebook from "../../assets/icon/FooterFacebook";
import FooterInstagram from "../../assets/icon/FooterInstagram";
import FooterP from "../../assets/icon/FooterP";
import FooterTwitter from "../../assets/icon/FooterTwitter";
import HeaderLogo from "../../assets/icon/HeaderLogo";

const Footer = () => {
  return (
    <div className="flex items-start justify-center gap-12">
      <div className="border-r-2 border-[#E0E0E0] pr-12">
        <h2 className="text-end font-bold text-arapawa text-3xl mb-8">
          Contact Us
        </h2>
        <h4 className="text-end font-bold text-city text-lg">Email</h4>
        <p className="text-end font-normal text-city text-lg mb-10">
          needhelp@Organia.com
        </p>
        <h4 className="text-end font-bold text-city text-lg">Phone</h4>
        <p className="text-end font-normal text-city text-lg mb-10">
          666 888 888
        </p>
        <h4 className="text-end font-bold text-city text-lg">Address</h4>
        <p className="text-end font-normal text-city text-lg">
          88 road, borklyn street, USA
        </p>
      </div>
      <div className="border-r-2 h-[316px] border-[#E0E0E0] pr-12">
        <Link to="/" className=" flex items-center justify-center gap-2 mb-6">
          <div>
            <HeaderLogo />
          </div>
          <h3 className="text-arapawa font-bold text-4xl">Organick</h3>
        </Link>
        <p className="text-center font-normal text-city text-lg max-w-[530px] mx-auto mb-12">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing{" "}
        </p>
        <div className="flex items-center justify-center gap-3.5">
          <Link
            to="/instagram"
            className="transition hover:-translate-y-1 hover:shadow-2xl rounded-full"
          >
            <FooterInstagram />
          </Link>
          <Link
            to="/facebook"
            className="transition hover:-translate-y-1 hover:shadow-2xl rounded-full"
          >
            <FooterFacebook />
          </Link>
          <Link
            to="/twitter"
            className="transition hover:-translate-y-1 hover:shadow-2xl rounded-full"
          >
            <FooterTwitter />
          </Link>
          <Link
            to="/p"
            className="transition hover:-translate-y-1 hover:shadow-2xl rounded-full"
          >
            <FooterP />
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-start font-bold text-arapawa text-3xl mb-8">
          Utility Pages
        </h2>
        <p className="text-city font-normal text-lg mb-2">Style Guide</p>
        <p className="text-city font-normal text-lg mb-2">404 Not Found</p>
        <p className="text-city font-normal text-lg mb-2">Password Protected</p>
        <p className="text-city font-normal text-lg mb-2">Licences</p>
        <p className="text-city font-normal text-lg">Changelog</p>
      </div>
    </div>
  );
};

export default Footer;
