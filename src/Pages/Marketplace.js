import { useState } from "react";
import Products from "../Components/Products";

const Marketplace = () => {
  const [price, setPrice] = useState("150.00");
  return (
    <section className="max-w-7xl mx-auto px-5 lg:px-28 lg:pt-10 flex">
      <div className="hidden md:block md:w-3/12">
        <form className="flex justify-between bg-[#F4F2F2] justify-center py-2 pl-6 pr-0 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-1/12 h-auto text-[#999999] ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            className="w-11/12 bg-[#F4F2F2] px-2 focus:outline-0"
            placeholder="Search..."
          />
        </form>
        <div>
          <div className="flex items-center lg:mt-4 lg:mb-3">
            <svg
              viewBox="0 0 36 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
            >
              <path
                d="M11.0417 4.42208C10.456 4.42208 9.89428 4.65474 9.48014 5.06888C9.066 5.48303 8.83333 6.04472 8.83333 6.63041C8.83333 7.2161 9.066 7.7778 9.48014 8.19194C9.89428 8.60608 10.456 8.83874 11.0417 8.83874C11.6274 8.83874 12.1891 8.60608 12.6032 8.19194C13.0173 7.7778 13.25 7.2161 13.25 6.63041C13.25 6.04472 13.0173 5.48303 12.6032 5.06888C12.1891 4.65474 11.6274 4.42208 11.0417 4.42208ZM4.79208 4.42208C5.24833 3.12903 6.09442 2.00933 7.21374 1.21732C8.33306 0.425316 9.67048 0 11.0417 0C12.4128 0 13.7503 0.425316 14.8696 1.21732C15.9889 2.00933 16.835 3.12903 17.2912 4.42208H33.125C33.7107 4.42208 34.2724 4.65474 34.6865 5.06888C35.1007 5.48303 35.3333 6.04472 35.3333 6.63041C35.3333 7.2161 35.1007 7.7778 34.6865 8.19194C34.2724 8.60608 33.7107 8.83874 33.125 8.83874H17.2912C16.835 10.1318 15.9889 11.2515 14.8696 12.0435C13.7503 12.8355 12.4128 13.2608 11.0417 13.2608C9.67048 13.2608 8.33306 12.8355 7.21374 12.0435C6.09442 11.2515 5.24833 10.1318 4.79208 8.83874H2.20833C1.62265 8.83874 1.06095 8.60608 0.646806 8.19194C0.232663 7.7778 0 7.2161 0 6.63041C0 6.04472 0.232663 5.48303 0.646806 5.06888C1.06095 4.65474 1.62265 4.42208 2.20833 4.42208H4.79208ZM24.2917 17.6721C23.706 17.6721 23.1443 17.9047 22.7301 18.3189C22.316 18.733 22.0833 19.2947 22.0833 19.8804C22.0833 20.4661 22.316 21.0278 22.7301 21.4419C23.1443 21.8561 23.706 22.0887 24.2917 22.0887C24.8774 22.0887 25.4391 21.8561 25.8532 21.4419C26.2673 21.0278 26.5 20.4661 26.5 19.8804C26.5 19.2947 26.2673 18.733 25.8532 18.3189C25.4391 17.9047 24.8774 17.6721 24.2917 17.6721ZM18.0421 17.6721C18.4983 16.379 19.3444 15.2593 20.4637 14.4673C21.5831 13.6753 22.9205 13.25 24.2917 13.25C25.6628 13.25 27.0003 13.6753 28.1196 14.4673C29.2389 15.2593 30.085 16.379 30.5412 17.6721H33.125C33.7107 17.6721 34.2724 17.9047 34.6865 18.3189C35.1007 18.733 35.3333 19.2947 35.3333 19.8804C35.3333 20.4661 35.1007 21.0278 34.6865 21.4419C34.2724 21.8561 33.7107 22.0887 33.125 22.0887H30.5412C30.085 23.3818 29.2389 24.5015 28.1196 25.2935C27.0003 26.0855 25.6628 26.5108 24.2917 26.5108C22.9205 26.5108 21.5831 26.0855 20.4637 25.2935C19.3444 24.5015 18.4983 23.3818 18.0421 22.0887H2.20833C1.62265 22.0887 1.06095 21.8561 0.646806 21.4419C0.232663 21.0278 0 20.4661 0 19.8804C0 19.2947 0.232663 18.733 0.646806 18.3189C1.06095 17.9047 1.62265 17.6721 2.20833 17.6721H18.0421ZM11.0417 30.9221C10.456 30.9221 9.89428 31.1547 9.48014 31.5689C9.066 31.983 8.83333 32.5447 8.83333 33.1304C8.83333 33.7161 9.066 34.2778 9.48014 34.6919C9.89428 35.1061 10.456 35.3387 11.0417 35.3387C11.6274 35.3387 12.1891 35.1061 12.6032 34.6919C13.0173 34.2778 13.25 33.7161 13.25 33.1304C13.25 32.5447 13.0173 31.983 12.6032 31.5689C12.1891 31.1547 11.6274 30.9221 11.0417 30.9221ZM4.79208 30.9221C5.24833 29.629 6.09442 28.5093 7.21374 27.7173C8.33306 26.9253 9.67048 26.5 11.0417 26.5C12.4128 26.5 13.7503 26.9253 14.8696 27.7173C15.9889 28.5093 16.835 29.629 17.2912 30.9221H33.125C33.7107 30.9221 34.2724 31.1547 34.6865 31.5689C35.1007 31.983 35.3333 32.5447 35.3333 33.1304C35.3333 33.7161 35.1007 34.2778 34.6865 34.6919C34.2724 35.1061 33.7107 35.3387 33.125 35.3387H17.2912C16.835 36.6318 15.9889 37.7515 14.8696 38.5435C13.7503 39.3355 12.4128 39.7608 11.0417 39.7608C9.67048 39.7608 8.33306 39.3355 7.21374 38.5435C6.09442 37.7515 5.24833 36.6318 4.79208 35.3387H2.20833C1.62265 35.3387 1.06095 35.1061 0.646806 34.6919C0.232663 34.2778 0 33.7161 0 33.1304C0 32.5447 0.232663 31.983 0.646806 31.5689C1.06095 31.1547 1.62265 30.9221 2.20833 30.9221H4.79208Z"
                fill="black"
              />
            </svg>
            <h3 className="lg:text-2xl font-satoshi font-medium lg:ml-3">
              Filter
            </h3>
          </div>
          <hr className="h-1.5 border-[#AFB091] border-2 bg-[#AFB091] lg:mb-4" />
          <div className="lg:mb-4">
            <h3 className="font-satoshi font-medium lg:text-2xl mb-2">
              By category
            </h3>
            <label className="container pl-[30px] flex items-center lg:mt-1.5 font-satoshi lg:text-xl font-normal">
              Editorials
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container pl-[30px] flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
              Fashion
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container pl-[30px] flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
              Optics
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container pl-[30px] flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
              Art & Museum
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <label className="container pl-[30px] flex items-center lg:mt-1.5 font-satoshi lg:text-xl font-normal">
              Nature
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
            <hr />
          </div>
          <div className="lg:mb-4">
            <h3 className="font-satoshi font-medium lg:text-2xl mb-3">
              By price
            </h3>
            <p className="lg:text-xl font-normal text-center lg:mb-1.5">
              $0 - <span>${price}</span>
            </p>
            <div className="flex justify-center mb-3">
              <div className="w-[25px] h-[25px] rounded-full border-[#333333] border-[2px] text-white text-xs">
                o
              </div>
              <input
                type="range"
                max="500.01"
                step="0.01"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <hr />
          </div>
          <div className="mb-4">
            <h3 className="font-satoshi font-normal lg:text-2xl mb-3">
              By artist
            </h3>
            <div className="">
              <label className="container flex items-center lg:mb-1.5 font-satoshi lg:text-xl font-normal">
                All
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
                Below $100.00
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
                $100.00 to $150.00
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
                $150.00 to $200.00
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:mt-1.5 font-satoshi lg:text-xl font-normal">
                Above $200.00
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
            </div>
            <hr />
          </div>
          <div className="mb-4">
            <h3 className="font-satoshi font-normal lg:text-2xl mb-3">
              By collection year
            </h3>
            <div>
              <label className="container flex items-center lg:mb-2 font-satoshi lg:text-xl font-normal">
                Before 2010
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
                2011 - 2015
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:my-1.5 font-satoshi lg:text-xl font-normal">
                2016 - 2020
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
              <label className="container flex items-center lg:mt-1.5 font-satoshi lg:text-xl font-normal">
                2021 - Present
                <input type="checkbox" />
                <span className="checkmark hidden"></span>
              </label>
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="w-full md:w-9/12 md:ml-5">
        <div></div>
        <div><Products/></div>
      </div>
    </section>
  );
};

export default Marketplace;
