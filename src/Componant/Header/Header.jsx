import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <>
      <div className="container m-auto">
        <div className="flex"></div>
      </div>
      <nav className="">
        <div className=" flex gap-3 items-center  mx-auto p-4 fixed w-full bg-white">
         <div className="container m-auto flex justify-between">
         <Link to="/">
            <img
              src="public/logo.jpg"
              className="flex items-center logo"
              alt="" 
              
            />
          </Link>

          <div className="flex md:order-2">
           
            <div className="relative  md:block">
              <ConnectButton />{" "}
            </div>
           
          </div>
         </div>
          
        </div>
      </nav>
    </>
  );
}

export default Header;
