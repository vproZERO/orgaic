import React from "react";

const AboutUsers = ({ item }) => {
  return (
    <div key={item.id} className="bg-doctor hover:bg-white transition hover:-translate-y-2 hover:shadow-2xl overflow-hidden rounded-[30px] aos-init aos-animate" data-aos='fade-up' data-aos-duration='1500'>
      <div className="mb-9">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="flex items-center justify-between px-[28px] pb-[34px]">
        <div>
          <h2 className="font-extrabold text-2xl text-arapawa">{item.name}</h2>
          <p className="font-yellowtail font-normal text-xl text-padua">
            {item.category}
          </p>
        </div>
        <div className="flex items-center gap-[17px]">
          <div>
            <img src={item.facebook} alt="facebook" />
          </div>
          {item.instagram && (
            <div>
              <img src={item.instagram} alt="facebook" />
            </div>
          )}
          <div>
            <img src={item.twitter} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsers;
