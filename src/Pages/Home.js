import React from "react";
import img1 from "../Resources/rectangle299.png";
import Hpg from "../Components/HomePageGrid";

const Home = () => {
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
        <div className="border-y-lgr border-y-[0.5px] py-16 flex justify-between">
          <div className="w-6/12 mr-20">
            <img src={img1} alt="lady" className="w-full" />
          </div>
          <div className="w-6/12 ml-20">
            <Hpg />
          </div>
        </div>
        <div className="border-y-lgr border-y-[0.5px] py-16 flex justify-between">
          <div className="w-6/12 mr-20">
            <img src={img1} alt="lady" className="w-full" />
          </div>
          <div className="w-6/12 ml-20">
            <Hpg />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
