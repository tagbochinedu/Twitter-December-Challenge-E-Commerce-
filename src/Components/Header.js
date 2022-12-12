import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import SideNav from "./SideNav";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (width > 1024) {
      setSidebar(false);
    }
  }, [width]);

  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center md:items-baseline xl:pl-48 xl:pt-14 xl:pr-32 lg:px-36 lg:pt-10 md:px-24 px-5 pt-8 text-lbl">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 md:w-10 md:h-10 block lg:hidden cursor-pointer"
          onClick={() => {
            setSidebar(true);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <h2 className="font-stix text-[32px] font-bold hidden lg:block">ARTSY.</h2>
      </div>
      <div className="font-satoshi font-medium text-2xl hidden lg:block">
        <NavLink to="/" className="transition-all duration-150 ease-in-out mx-6 hover:underline">
          Home
        </NavLink>
        <NavLink to="/marketplace" className="transition-all duration-150 ease-in-out mx-6 hover:underline">
          MarketPlace
        </NavLink>
        <NavLink to="/auctions" className="transition-all duration-150 ease-in-out mx-6 hover:underline">
          Auctions
        </NavLink>
        <NavLink to="/drop" className="transition-all duration-150 ease-in-out mx-6 hover:underline">
          Drop
        </NavLink>
      </div>
      <div className="block lg:hidden">
        <h2 className="font-stix text-2xl md:text-3xl font-bold">ARTSY.</h2>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 md:w-6 md:h-6 mr-1 md:mr-6 block md:hidden"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 md:w-8 md:h-8 ml-1 md:mr-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 md:w-8 md:h-8 ml-2 md:ml-6 hidden md:block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
      <SideNav
        sidebar={sidebar}
        onClick={() => {
          setSidebar(false);
        }}
      />
    </header>
  );
};

export default Header;
