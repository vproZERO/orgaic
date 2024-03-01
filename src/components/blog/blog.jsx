import React from "react";
import { Link } from "react-router-dom";
import BlogIcon from "../../assets/icon/BlogIcon";
import ButtonArrow from "../../assets/icon/ButtonArrow";
import Button from "../ui/button";

const Blog = ({ item }) => {
  return (
    <div key={item.id} className="w-[677px] h-[592px] relative aos-init aos-animate" data-aos={item.id % 2 === 0 ? "fade-left" : "fade-right"} data-aos-duration="1500">
      <div className="w-full h-[524px] rounded-[30px] overflow-hidden relative">
        <img src={item.img} alt="" />
        <div className="absolute top-[43px] left-[32px] rounded-full bg-white py-[15px] px-[23px]">
          <p className="text-center font-extrabold text-xl text-arapawa">25</p>
          <p className="text-center font-extrabold text-xl text-arapawa">Nov</p>

        </div>
      </div>
      <div className="w-[613px] absolute h-[330px] px-[57px] pt-[46px] pb-[60px] bg-white rounded-[30px] z-20 mt-[-240px] left-[32px] shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
                <div>
                    <BlogIcon/>
                </div>
                <p>{item.author}</p>
            </div>
            <h2 className="text-arapawa font-extrabold text-2xl ">{item.title}</h2>
            <p className="text-city font-normal text-lg max-w-[440px] mb-4">{item.text}</p>
            <Link to={`/blog`}>
                <Button icon={<ButtonArrow/>} variant="secondary">Read More</Button>
            </Link>
      </div>
    </div>
  );
};

export default Blog;
