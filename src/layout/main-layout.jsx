import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/footer";
import Header from "./header/header";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
