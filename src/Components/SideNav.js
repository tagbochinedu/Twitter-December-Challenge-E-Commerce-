import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ sidebar, onClick }) => {
  return (
    <div
      className={`h-screen bg-sidenav font-satoshi font-medium text-2xl fixed left-0 right-0 z-50 transition-all ease-in-out duration-1000 px-5 pt-8 ${
        sidebar ? "opacity-100 top-[0px]" : "opacity-0 -top-[1000px]"
      }`}
    >
      <div className="flex flex-row-reverse justify-between items-center mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 md:w-10 md:h-10"
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
        <h2 className="font-stix text-2xl font-bold">ARTSY.</h2>
      </div>

      <ul className="text-center">
        <NavLink to="/" className="text-2xl pb-6 block">
          Home
        </NavLink>
        <NavLink to="/marketplace" className="text-2xl py-6 block">
          Marketplace
        </NavLink>
        <NavLink to="/auctions" className="text-2xl py-6 block">
          Auctions
        </NavLink>
        <NavLink to="/drop" className="text-2xl pt-6 block">
          Drop
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
