import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";


const Layout = ({ children, isFooterEnable = true }) => {
  return (
    <>
      <div className="bg-pattern bg-center bg-repeat">
        <Header />
        {children}
        <Footer/>
      </div>
    </>
  );
};

export default Layout;