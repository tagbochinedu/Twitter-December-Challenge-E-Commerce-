import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ sidebar, onClick }) => {
    
  return (
    <div
      className={`h-screen bg-white font-satoshi font-medium text-2xl absolute left-0 right-0 transition-all ease-in-out duration-500 xl:pl-48 xl:pt-14 xl:pr-32 lg:px-36 lg:pt-10 md:px-24 px-5 pt-8 ${
        sidebar ? "opacity-100 top-[0px]" : "opacity-0 -top-[1000px]"
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 md:w-10 md:h-10"
        onClick={() => {
          onClick();
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <ul className="text-center">
        <NavLink to="/" className="pb-6 block">
          Home
        </NavLink>
        <NavLink to="/marketplace" className="py-6 block">
          Marketplace
        </NavLink>
        <NavLink to="/auctions" className="py-6 block">
          Auctions
        </NavLink>
        <NavLink to="/drop" className="pt-6 block">
          Drop
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
