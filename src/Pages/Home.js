import { useState } from "react";
import img1 from "../Resources/rectangle299.png";
import Hpg from "../Components/HomePageGrid";

const Home = () => {
  const [hover, setHover] = useState(false);
  return (
    <main>
      <div className="mx-48 my-12 p text-center">
        <h1 className="font-clash font-bold text-7xl leading-lht text-lbl">
          Photography is poetry &<br />
          beautiful untold stories
        </h1>
      </div>
      <div>
        <p className="font-satoshi font-medium text-center text-[27px] leading-lht">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          <br />
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </div>
      <div className="mx-[120px] ">
        <h2 className="font-satoshi text-5xl text-lgr mb-9">
          Featured products
        </h2>
        <div className="border-y-lgr border-y-[0.5px] py-16 flex justify-between relative">
          <div
            className="w-6/12 mr-20 relative"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div className="bg-bg1 h-full text-white flex justify-center items-center text-2xl font-medium font-satoshi absolute left-0 right-0 z-10">
              View product{" "}
              <span className="ml-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 border-white border-[0.5px] rounded-full"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div>
            <img
              src={img1}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-300 duration-1000 absolute z-20 ${
                hover ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="w-6/12 ml-20">
            <Hpg />
          </div>
        </div>
        <div className="border-y-lgr border-y-[0.5px] py-16 flex justify-between">
          <div className="w-6/12 mr-20">
            <Hpg />
          </div>
          <div
            className="w-6/12 mr-20 relative"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div className="bg-bg1 h-full text-white flex justify-center items-center text-2xl font-medium font-satoshi absolute left-0 right-0 z-10">
              View product{" "}
              <span className="ml-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-12 border-white border-[0.5px] rounded-full"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div>
            <img
              src={img1}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-300 duration-1000 absolute z-20 ${
                hover ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
