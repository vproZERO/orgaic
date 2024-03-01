import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <header className="py-16 px-20">
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="">
        <div className="border-b-2 pb-24">
          <Footer />
        </div>
        <div className="py-6">
          <p className="text-center font-normal text-lg text-city">
            Copyright © <span className="font-bold">Organick </span>| Designed by <span className="font-bold">VictorFlow</span> Templates - Powered by
            <span className="font-bold">Webflow</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
