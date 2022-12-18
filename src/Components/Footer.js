import { Link } from "react-router-dom";

import svg from "../Resources/Vector.svg";
import svg2 from "../Resources/Vector2.svg";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-5 lg:px-0 lg:pt-10 pt-8 lg:pt-16">
      <div className="flex justify-between mb-[91px]">
        <div className="hidden lg:flex justify-center items-center w-4/12">
          <h2 className="font-stix text-3xl font-bold">ARTSY.</h2>
        </div>
        <div className="hidden lg:flex justify-between w-4/12">
          <ul className="w-6/12 px-4">
            <li className="text-2xl font-medium font-satoshi mb-4">
              <Link to="/">Home</Link>
            </li>
            <li className="text-2xl font-medium font-satoshi my-4">
              <Link to="/">Marketplace</Link>
            </li>
            <li className="text-2xl font-medium font-satoshi my-4">
              <Link to="/">Auctions</Link>
            </li>
            <li className="text-2xl font-medium font-satoshi mt-4">
              <Link to="/">Drops</Link>
            </li>
          </ul>
          <ul className="w-6/12 px-2">
            <li className="text-2xl font-medium font-satoshi mb-4">
              <Link to="/">Blog</Link>
            </li>
            <li className="text-2xl font-medium font-satoshi my-4">
              <Link to="/">Wallets</Link>
            </li>
            <li className="text-2xl font-medium font-satoshi my-4">
              <Link to="/">Rates</Link>
            </li>
            <li className="text-2xl font-medium font-satoshi mt-4">
              <Link to="/">High Bids</Link>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-4/12">
          <h3 className="text-base  md:text-lg lg:text-xl font-poppins mb-4 block lg:hidden">
            Reach Us.
          </h3>
          <div className="flex items-center mb-8 px-4">
            <img src={svg} alt="svg" className="w-5 w-6 lg:w-8 mr-2 lg:mr-4" />
            <a
              href="mailto:artsystudios@gmail.com"
              className="text-base  md:text-lg lg:text-xl lg:text-2xl font-normal font-satoshi"
            >
              artsystudios@gmail.com
            </a>
          </div>
          <div className="flex items-center px-4 lg:mb-8">
            <img src={svg2} alt="svg" className="w-5 w-6 lg:w-8 mr-2 lg:mr-4" />
            <p className="text-base md:text-lg lg:text-xl lg:text-2xl font-normal font-satoshi">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="text-center pb-11 hidden md:block">
        <p className="text-lg font-rubik text-[#a19d9d]">
          Artsystudios © 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
