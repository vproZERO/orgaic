import React from "react";
import { Link } from "react-router-dom";
import ButtonArrow from "../../assets/icon/ButtonArrow";
import Button from "../../components/ui/button";
import Header from "../../layout/header/header";
import "./page-not-found.css";

const PageNotFound = () => {
  return (
    <>
      <div className="flex items-center page_not_found justify-center relative h-screen bg-disco">
        <div className="absolute right-20">
          <h2 className="text-[#8FA8A8] font-black text-[200px]">404</h2>
          <h3 className="text-arapawa font-extrabold text-7xl -mt-10 mb-2">
            Page not found
          </h3>
          <p className="text-city font-semibold text-lg text-center mb-10">
            The page you are looking for doesn't exist or has been moved
          </p>
          <Link to={"/"}>
            <Button icon={<ButtonArrow />} variant="primary">
              Go to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
