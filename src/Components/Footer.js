import { Link } from "react-router-dom";

import svg from "../Resources/Vector.svg";
import svg2 from "../Resources/Vector2.svg";

const Footer = () => {
  return (
    <footer className="pt-16">
      <div className="flex justify-between mb-[91px]">
        <div className="flex justify-center items-center w-4/12">
          <h2 className="font-stix text-3xl font-bold">ARTSY.</h2>
        </div>
        <div className="flex justify-between w-4/12">
          <ul className="w-6/12">
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
          <ul className="w-6/12">
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
        <div className="w-4/12">
          <div className="flex items-center mb-8">
            <img src={svg} alt="svg" className="mr-4" />
            <a
              href="mailto:artsystudios@gmail.com"
              className=" text-2xl font-satoshi"
            >
              artsystudios@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <img src={svg2} alt="svg" className="mr-4" />
            <p className=" text-2xl font-satoshi">Lagos, Nigeria</p>
          </div>
        </div>
      </div>
      <div className="text-center pb-11">
        <p className="text-lg font-rubik text-[#a19d9d]">
          Artsystudios © 2022. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
