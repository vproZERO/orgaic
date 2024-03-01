import React from "react";
import Header from "../../layout/header/header";

const PageNotFound = () => {
  return (
    <>
      <header className="py-16 px-20">
        <Header />
      </header>
      <div className="flex items-center justify-center h-screen bg-disco">
        <h1 className="text-arapawa font-black text-5xl">Page Not Found</h1>
      </div>
    </>
  );
};

export default PageNotFound;
