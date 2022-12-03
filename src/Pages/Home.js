import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Resources/299.png";
import img2 from "../Resources/300.png";
import img3 from "../Resources/301.png";
import img4 from "../Resources/302.png";
import img5 from "../Resources/303.png";
import img6 from "../Resources/304.png";
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
          images and captures seamlessly in one place. Register to get to
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
            className="w-6/12 ml-20 relative"
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
      <section className="bg-gradient-to-r from-[#4693ED] to-[#CFA786] py-6 px-[120px] text-white">
        <div className="max-w-fit">
          <h2 className="font-satoshi text-[40px] text-white">
            See Upcoming Auctions and Exhibitions
          </h2>
          <hr className="mx-8 mt-4 mb-5" />
        </div>
        <div className="bg-bg4 pt-[299px] pb-[52px] pr-9">
          <div className="flex relative pl-[77px]">
            <div className="pt-1 pr-4">
              <div className="w-4 h-4 rounded-full bg-white" />
            </div>
            <h4 className="font-belle text-white text-3xl">
              MONALISA REDEFINED
              <br />
              IN STYLE.
            </h4>
          </div>
          <div className="flex items-center pl-[30px]">
            <div className="pr-8">
              <p className="font-belle text-6xl">01</p>
            </div>
            <h6 className="uppercase font-pop text-sm">
              Start on : 08:00 GTS . Monday{" "}
            </h6>
          </div>
          <div className="ml-[111px] flex justify-between items-end">
            <div className="w-6/12">
              <p className="font-satoshi font-medium text-base">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
            <div className="w-4/10 font-satoshi text-2xl font-normal flex items-center">
              <p className="mr-10">See More</p>
              <p className="p-4 rounded-xl border-white border-2 hover:bg-white hover:text-black transition-all ease-in-out duration-500">
                Set a reminder
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <div></div>
          <div>
            <button className="rounded-full bg-[#D6B89D] w-16 h-16 shadow-lg drop-shadow-md mr-2 hover:bg-[#e3c3a6] active:bg-[#D6B89D]">
              &#60;
            </button>
            <button className="rounded-full bg-[#D6B89D] w-16 h-16 shadow-lg drop-shadow-md ml-2 hover:bg-[#e3c3a6] active:bg-[#D6B89D]">
              &#62;
            </button>
          </div>
        </div>
      </section>
      <section className="my-[190px] border-y-[0.5px] border-lgr text-lgr">
        <Link to="/marketplace">
          <div className="py-[59px] pl-20 pr-72 flex justify-between items-center">
            <h2 className="font-satoshi font-medium text-5xl">
              Explore Marketplace
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 text-[#4693ED] rounded-full animate"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </Link>
        <hr className="border-lgr" />
        <Link to="/auctions">
          <div className="py-[59px] pl-20 pr-72 flex justify-between items-center">
            <h2 className="font-satoshi font-medium text-5xl">See Auctions</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-20 text-[#4693ED] rounded-full animate"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </Link>
      </section>
      <section className="bg-[#E2E2E2] pl-[86px] pr-32 pt-[50px] pb-[250px] font-clash relative">
        <div className="flex justify-between  mb-12">
          <h2 className=" text-6xl font-semibold leading-[1.5]">
            TOP CREATORS OF
            <br /> THE WEEK
          </h2>
          <div className="flex justify-between items-center">
            <div className="h-full w-3 bg-[#AEAEAE] rounded-full flex items-end relative z-10">
              <span className="bg-black w-full py-5 rounded-full">h</span>
            </div>
            <div>
              <ul>
                <li className="text-[40px] mb-3 ml-8 relative z-10">
                  Editorials
                </li>
                <li className="text-[40px] my-3 ml-8 relative z-10">Fashion</li>
                <li className="text-[40px] my-3 ml-8 relative z-10">
                  Lifestyle
                </li>
                <li className="text-[40px] mt-3 ml-8 relative z-10">
                  Blueprint
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="font-extralight text-3xl text-[#5D5D5D] max-w-[1050px] font-clash relative z-10">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <div className="bg-[#D9D9D9] absolute left-[27%] right-[13%] bottom-0 top-[160px]">
          <img src={img4} alt="slide" className="w-[605px] absolute z-30 fade3" />
          <img
            src={img5}
            alt="slide"
            className="w-[605px] bottom-0 absolute z-30 fade2"
          />
          <img src={img6} alt="slide" className="w-full absolute z-30 fade1" />
        </div>
        <div className="text-center z-20 absolute font-clash bottom-[4%] right-[25%]">
          <h2 className="text-4xl font-semibold">CIRCA</h2>
          <h1 className="text-[170px] font-semibold line-through decoration-8">
            1985
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
