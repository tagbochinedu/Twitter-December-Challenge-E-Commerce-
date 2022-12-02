import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-baseline pl-48 pt-14 pr-32 text-lbl">
      <div>
        <h2 className="font-stix text-3xl font-bold">ARTSY.</h2>
      </div>
      <div className="font-satoshi font-medium text-2xl">
        <NavLink className="px-6">Home</NavLink>
        <NavLink className="px-6">MarketPlace</NavLink>
        <NavLink className="px-6">Auctions</NavLink>
        <NavLink className="px-6">Drop</NavLink>
      </div>
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-10 h-10 mx-6"
        >
          <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-10 h-10 mx-6"
        >
          <path
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64
          208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3
          34.4S19.4 416 32 416H416c12.6 0 24-7.4
          29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384
          226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3
          493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3
          18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
