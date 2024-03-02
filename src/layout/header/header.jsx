import React from "react";
import { Link } from "react-router-dom";
import { headerPagesData } from "../../data";
import HeaderLogo from "../../assets/icon/HeaderLogo";
import HeaderSearch from "../../assets/icon/HeaderSearch";
import HeaderCard from "../../assets/icon/HeaderCard";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to="/" className=" flex items-center gap-2">
        <div>
          <HeaderLogo />
        </div>
        <h3 className="text-arapawa font-bold text-4xl">Organick</h3>
      </Link>

      <ul className="flex items-center gap-8">
        {headerPagesData.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className="hover:-translate-y-1 transition hover:border-b-2 border-arapawa rounded-3xl px-2"
          >
            <p className="text-arapawa font-bold text-xl">{item.name}</p>
          </Link>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <div className="w-[56px]">
          <HeaderSearch />
        </div>
        <div className="border flex items-center gap-3 pr-[23px] border-[#E0E0E0] rounded-[33px] py-[5px] pl-[6px]">
          <div className="w-[56px]">
            <HeaderCard />
          </div>
          <p className="text-arapawa font-semibold text-lg">Cart (0)</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
