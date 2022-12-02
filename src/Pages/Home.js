import { useState } from "react";
import img1 from "../Resources/299.png";
import img2 from "../Resources/300.png";
import img3 from "../Resources/301.png";
import Hpg from "../Components/HomePageGrid";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <main>
      <section className="mx-48 text-center">
        <h1 className="my-12 font-clash font-bold text-7xl leading-lht text-lbl">
          Photography is poetry &<br />
          beautiful untold stories
        </h1>
        <p className="font-satoshi font-medium text-center text-[27px] leading-lht">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          <br />
          images and captures seamlessly in one place. Register to get top
          access.
        </p>
      </section>

      <section className="mx-[120px] ">
        <h2 className="font-satoshi text-5xl text-lgr mb-9">
          Featured products
        </h2>
        <div className="border-t-lgr border-t-[0.5px] py-16 flex justify-between relative">
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
              className={`w-full h-full transition-all ease-in-out delay-150 duration-500 absolute z-20 ${
                hover ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="w-6/12 ml-20">
            <Hpg />
          </div>
        </div>
        <div className="border-t-lgr border-t-[0.5px] py-16 flex justify-between">
          <div className="w-6/12 mr-20">
            <Hpg />
          </div>
          <div
            className="w-6/12 mr-20 relative"
            onMouseEnter={() => {
              setHover2(true);
            }}
            onMouseLeave={() => {
              setHover2(false);
            }}
          >
            <div className="bg-bg2 h-full text-white flex justify-center items-center text-2xl font-medium font-satoshi absolute left-0 right-0 z-10">
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
              src={img2}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-150 duration-500 absolute z-20 ${
                hover2 ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        <div className="border-t-lgr border-t-[0.5px] py-16 flex justify-between relative">
          <div
            className="w-6/12 mr-20 relative"
            onMouseEnter={() => {
              setHover3(true);
            }}
            onMouseLeave={() => {
              setHover3(false);
            }}
          >
            <div className="bg-bg3 h-full text-white flex justify-center items-center text-2xl font-medium font-satoshi absolute left-0 right-0 z-10">
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
              src={img3}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-150 duration-500 absolute z-20 ${
                hover3 ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="w-6/12 ml-20">
            <Hpg />
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#4693ED] to-[#CFA786] py-6 px-[120px]">
        <div className="max-w-fit">
          <h2 className="font-satoshi text-[40px] text-white">
            See Upcoming Auctions and Exhibitions
          </h2>
          <hr className="mx-8 mt-4 mb-5" />
        </div>
        <div className="bg-bg4 pt-[299px] pl-[106px] pb-[52px]">
          <div className="flex relative">
            <div className="pt-1 pr-2">
              <div className="w-4 h-4 rounded-full bg-white" />
            </div>
            <div className>
              <h4 className="font-belle text-white text-3xl">
                MONALISA REDEFINED
                <br />
                IN STYLE.
              </h4>
            </div>
          </div>
          <div className="mt-4">
            <h6 className="uppercase">Start on : 08:00 GTS . Monday </h6>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
