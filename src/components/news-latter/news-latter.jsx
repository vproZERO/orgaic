import React from "react";
import Button from "../ui/button";
import "./news-latter.css";

const NewsLatter = () => {
  return (
    <div className="px-20 py-[117px] ">
      <div className="news_lattter_box px-[71px] py-[105px] rounded-[30px]">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-extrabold text-5xl max-w-[357px]">Subscribe to our Newsletter</h2>

          <div className="flex items-center gap-2">
            <input type="text" placeholder="Your Email Address" className="bg-white text-city placeholder:text-city py-[29px] pl-[23px] pr-[174px] rounded-[16px] placeholder:text-lg"/>
            <Button variant={'primary'}>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLatter;
