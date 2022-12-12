import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Resources/299.png";
import img2 from "../Resources/300.png";
import img3 from "../Resources/301.png";
import img4 from "../Resources/302.png";
import img5 from "../Resources/303.png";
import img6 from "../Resources/304.png";
import NewsLetter from "../Components/NewsLetter";
import Hpg from "../Components/HomePageGrid";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  return (
    <main>
      <section className="max-w-7xl mx-auto xl:px-48 xl:pt-14 lg:px-36 lg:pt-10 md:px-24 px-5 text-center">
        <h1 className="my-5 md:my-12 font-clash font-medium leading- lg:font-bold text-2xl md:text-5xl lg:text-7xl text-lbl">
          Photography is poetry &<br />
          beautiful untold stories
        </h1>
        <p className="font-satoshi font-medium lg:text-center text-base md:text-[27px] leading-lht">
          Flip through more than 10,000 vintage shots, old photograghs, historic
          images and captures seamlessly in one place. Register to get to
          access.
        </p>
      </section>

      <section className=" max-w-7xl mx-auto px-5 xl:px-[120px] lg:px-36 md:px-24">
        <h2 className="font-satoshi font-semibold lg:font-normal text-3xl md:text-4xl xl:text-5xl text-lgr lg:mb-9">
          Featured products
        </h2>
        <div className="lg:border-t-lgr lg:border-t-[0.5px] py-4 md:py-8 lg:py-16 lg:flex relative">
          <div
            className="w-full lg:w-6/12 relative mr-9"
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <div className="bg-bg1 w-auto h-64 lg:h-full text-white py-12 px-2 lg:px-auto lg:py-auto lg:flex justify-center items-center text-2xl font-medium font-satoshi lg:absolute left-0 right-0 z-10">
              <span className="hidden lg:block">View product</span>{" "}
              <h3 className="font-clash text-center text-2xl font-bold relative lg:hidden block">
                Boolean Egyptian
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 lg:w-12 float-right ml-4 lg:mr-0 mr-6 lg:mt-0 mt-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
            <img
              src={img1}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-150 duration-500 absolute hidden lg:block z-20 ${
                hover ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="lg:w-6/12">
            <Hpg />
          </div>
        </div>
        <div className="lg:border-t-lgr lg:border-t-[0.5px] md:py-16 flex flex-col-reverse lg:flex-row justify-evenly relative">
          <div className="w-full lg:w-6/12">
            <Hpg />
          </div>
          <div
            className="w-full lg:w-6/12 relative lg:ml-9"
            onMouseEnter={() => {
              setHover2(true);
            }}
            onMouseLeave={() => {
              setHover2(false);
            }}
          >
            <div className="bg-bg2 w-auto h-64 lg:h-full text-white py-12 px-2 lg:flex justify-center items-center text-2xl font-medium font-satoshi lg:absolute left-0 right-0 z-10">
              <span className="hidden lg:block">View product</span>{" "}
              <h3 className="font-clash text-center text-2xl font-bold relative lg:hidden block">
                Are We There Yet?
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 lg:w-12 float-right mr-6 mt-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
            <img
              src={img2}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-150 duration-500 absolute hidden lg:block z-20 ${
                hover2 ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        </div>
        <div className="lg:border-t-lgr lg:border-t-[0.5px] md:py-16 lg:flex justify-evenly relative">
          <div
            className="w-full lg:w-6/12 relative mr-9"
            onMouseEnter={() => {
              setHover3(true);
            }}
            onMouseLeave={() => {
              setHover3(false);
            }}
          >
            <div className="bg-bg3 w-auto h-64 lg:h-full text-white py-12 px-2 lg:flex justify-center items-center text-2xl font-medium font-satoshi lg:absolute left-0 right-0 z-10">
              <span className="hidden lg:block">View product</span>{" "}
              <h3 className="font-clash text-center text-2xl font-bold relative lg:hidden block">
                Oloibiri 1997
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 lg:w-12 float-right mr-6 mt-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
            <img
              src={img3}
              alt="lady"
              className={`w-full h-full transition-all ease-in-out delay-150 duration-500 absolute hidden lg:block z-20 ${
                hover3 ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
          <div className="lg:w-6/12">
            <Hpg />
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto bg-gradient-to-r from-[#4693ED] to-[#CFA786] p-4 md:px-16 lg:px-[120px] text-white">
        <div className="max-w-fit hidden lg:block">
          <h2 className="font-satoshi lg:text-[40px] text-white">
            See Upcoming Auctions and Exhibitions
          </h2>
          <hr className="mx-8 mt-4 mb-5" />
        </div>
        <div className="bg-bg4 px-2 py-6 lg:pt-[299px] lg:pb-[52px] lg:px-9">
          <div className="flex relative lg:mb-6 lg:pl-[70px]">
            <div className="pt-1 pr-4 lg:pr-8">
              <div className="w-4 h-4 rounded-full bg-white" />
            </div>
            <h4 className="font-belle text-medium text-white text-xl lg:text-3xl">
              MONALISA REDEFINED IN STYLE.
            </h4>
          </div>
          <div className="flex items-center my-3 lg:pl-[30px]">
            <div className="pr-1 lg:pr-8">
              <p className="font-belle text-4xl lg:text-6xl">01</p>
            </div>
            <h6 className="uppercase font-pop text-sm">
              Start on : 08:00 GTS . Monday{" "}
            </h6>
          </div>
          <div className="ml-8 lg:ml-[111px] lg:flex justify-between items-end">
            <div className="lg:w-6/12">
              <p className="font-satoshi font-medium text-xs lg:text-base">
                GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT WITH
                INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING THEIR
                HIGHEST AND LOWEST BIDS.
              </p>
            </div>
            <div className="lg:w-4/10 font-satoshi text-sm lg:text-2xl font-normal flex items-center justify-end">
              <p className="mr-10">See More</p>
              <p className="p-2 lg:p-4 rounded-xl border-white border-2 hover:bg-white hover:text-black transition-all ease-in-out duration-500">
                Set a reminder
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-between items-center mt-6">
          <div className="h-2 w-3/12 bg-[#AEAEAE] rounded-full flex items-end relative z-10">
            <div className="bg-white w-2/12 rounded-full h-full"></div>
          </div>
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
      <section className="max-w-screen-2xl mx-auto my-16 lg:my-[190px] border-y-[0.5px] border-lgr text-lgr">
        <div className="py-6 lg:py-[59px] pl-2 lg:pl-20 pr-9 lg:pr-72 flex justify-between items-center">
          <h2 className="font-satoshi font-medium text-2xl lg:text-5xl">
            Explore Marketplace
          </h2>
          <Link to="/marketplace">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="border-[0.5px] lg:border-0 border-lgr w-20 lg:text-[#4693ED] animate"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>

        <hr className="border-lgr" />

        <div className="py-6 lg:py-[59px] pl-2 lg:pl-20 pr-9 lg:pr-72 flex justify-between items-center">
          <h2 className="font-satoshi font-medium text-2xl lg:text-5xl">
            See Auctions
          </h2>
          <Link to="/auctions">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" border-[0.5px] lg:border-0 border-lgr w-20 lg:text-[#4693ED] animate"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto bg-[#E2E2E2] px-1 lg:pl-[86px] lg:pr-32 pt-2 lg:pt-12 pb-16 lg:pb-[250px] mb-12 lg:mb-36 font-clash relative">
        <div className="flex justify-between  mb-4 lg:mb-12">
          <h2 className="text-xl lg:text-5xl font-semibold leading-[1.5] relative z-30">
            TOP CREATORS OF
            <br /> THE WEEK
          </h2>
          <div className="flex justify-between items-center">
            <div className="h-full w-3 bg-[#AEAEAE] rounded-full flex items-end relative z-10">
              <span className="bg-black w-full py-1 lg:py-1 rounded-full">
                h
              </span>
            </div>
            <div>
              <ul>
                <li className="text-base lg:text-3xl pb-2.5 ml-8 relative z-10">
                  Editorials
                </li>
                <li className="text-base lg:text-3xl py-2.5 ml-8 relative z-10">
                  Fashion
                </li>
                <li className="text-base lg:text-3xl py-2.5 ml-8 relative z-10">
                  Lifestyle
                </li>
                <li className="text-base lg:text-3xl pt-2.5 ml-8 relative z-10">
                  Blueprint
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="font-thin text-xs lg:text-2xl text-[#5D5D5D] max-w-[1000px] font-clash relative z-10">
          “Everything always looked better in black and white. Everything always
          as if it were the first time; there’s always more people in a black
          and white photograph. It just makes it seem that there were more
          people at a gig, more people at a football match, than with colour
          photography. Everything looks more exciting.”– Jack Lowden
        </p>
        <div className="bg-[#D9D9D9] absolute left-[27%] right-[13%] bottom-0 top-10 lg:top-[100px]">
          <img
            src={img4}
            alt="slide"
            className="w-[580px] top-0 lg:top-auto lg:bottom-0 absolute z-30 fade3"
          />
          <img
            src={img5}
            alt="slide"
            className="w-[550px] bottom-0 absolute z-30 fade2"
          />
          <img
            src={img6}
            alt="slide"
            className="w-full absolute z-30 fade1 bottom-0"
          />
        </div>
        <div className="text-center z-20 absolute font-clash bottom-10 lg:bottom-[4%] right-2 lg:right-[25%]">
          <h2 className="text-2xl lg:text-4xl font-semibold">CIRCA</h2>
          <h1 className="text-6xl lg:text-[170px] font-semibold line-through decoration-2 lg:decoration-8">
            1985
          </h1>
        </div>
      </section>
      <NewsLetter />
    </main>
  );
};

export default Home;
