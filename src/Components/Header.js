import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <div className="flex justify-between items-center md:items-baseline xl:pl-48 xl:pt-14 xl:pr-32 lg:px-36 lg:pt-10 md:px-24 px-5 pt-8 text-lbl">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 md:w-10 md:h-10 block lg:hidden cursor-pointer"
          onClick={() => {
            setSidebar(!sidebar);
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <h2 className="font-stix text-3xl font-bold hidden lg:block">ARTSY.</h2>
      </div>
      <div className="font-satoshi font-medium text-2xl hidden lg:block">
        <NavLink to='/' className="px-6">Home</NavLink>
        <NavLink to='/marketplace' className="px-6">MarketPlace</NavLink>
        <NavLink to='/auctions' className="px-6">Auctions</NavLink>
        <NavLink to='/drop' className="px-6">Drop</NavLink>
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
          className="w-5 h-5 md:w-10 md:h-10 mr-2 md:mr-6"
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
          className="w-5 h-5 md:w-10 md:h-10 ml-2 md:ml-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
