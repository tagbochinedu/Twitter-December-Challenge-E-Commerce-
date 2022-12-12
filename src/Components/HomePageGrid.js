import img1 from "../Resources/14.png";
import img2 from "../Resources/15.png";
import img3 from "../Resources/16.png";
import img4 from "../Resources/17.png";
import img5 from "../Resources/18.png";
import arrow from "../Resources/iconmonstr-arrow-right-thin-removebg-preview.png";

const HomePageGrid = () => {
  return (
    <>
      <h3 className="font-stix font-bold text-xl text-sm md:text-2xl lg:text-3xl xl:text-4xl relative hidden md:block">
        The Boolean Egyptian
      </h3>
      <p className="text-sm md:text-xl text-justify font-normal text-lgr py-3 md:py-6 lg:my-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor pur
      </p>
      <div className="flex items-center justify-between mb-7 lg:mb-0">
        <div className="relative flex w-4/12">
          <img src={img1} alt="person" className="w-10 lg:w-auto relative" />
          <img src={img2} alt="person" className="w-10 lg:w-auto absolute z-10 left-[25px] lg:left-[30px]" />
          <img src={img3} alt="person" className="w-10 lg:w-auto absolute z-20 left-[50px] lg:left-[60px]" />
          <img src={img4} alt="person" className="w-10 lg:w-auto absolute z-30 left-[75px] lg:left-[90px]" />
          <img src={img5} alt="person" className="w-10 lg:w-auto absolute z-40 left-[100px] lg:left-[120px]" />
        </div>
        <div className="relative w-6/12 lg:w-4/12">
          <p className="font-satoshi font-semibold lg:font-medium text-sm lg:text-xl text-end lg:text-start">64 major creators</p>
        </div>
        <div className="relative border-[0.5px] border-lgr rounded-full text-center p-6 hidden lg:block ">
          <img src={arrow} alt="arrow" className="w-6 mx-auto" />
        </div>
      </div>
    </>
  );
};

export default HomePageGrid;
