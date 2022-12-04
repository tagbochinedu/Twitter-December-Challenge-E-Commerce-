import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ sidebar }) => {
  return (
    <div
      className={`h-screen bg-white absolute left-0 right-0 transition-all ease-in-out duration-500 ${
        sidebar ? "opacity-0 -top-[1000px]" : "opacity-100 top-[0px]"
      }`}
    >
      <ul>
        <NavLink to="/" className="pb-6">
          Home
        </NavLink>
        <NavLink to="/marketplace" className="py-6">
          MarketPlace
        </NavLink>
        <NavLink to="/auctions" className="py-6">
          Auctions
        </NavLink>
        <NavLink to="/drop" className="pt-6">
          Drop
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
