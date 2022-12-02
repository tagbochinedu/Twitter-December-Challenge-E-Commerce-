import img1 from "../Resources/14.png";
import img2 from "../Resources/15.png";
import img3 from "../Resources/16.png";
import img4 from "../Resources/17.png";
import img5 from "../Resources/18.png";
import arrow from "../Resources/iconmonstr-arrow-right-thin-removebg-preview.png";

const HomePageGrid = () => {
  return (
    <>
      <h3 className="font-stix font-bold text-4xl">The Boolean Egyptian</h3>
      <p className="text-2xl font-normal text-lgr mt-8 mb-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor pur
      </p>
      <div className="flex items-center justify-between">
        <div className="relative flex w-3/12">
          <img src={img1} alt="person" className="relative w-10" />
          <img src={img2} alt="person" className="absolute z-10 left-[25px] w-10" />
          <img src={img3} alt="person" className="absolute z-20 left-[50px] w-10" />
          <img src={img4} alt="person" className="absolute z-30 left-[75px] w-10" />
          <img src={img5} alt="person" className="absolute z-40 left-[100px] w-10" />
        </div>
        <div className="relative w-4/12">
          <p className="font-satoshi font-medium text-2xl">64 major creators</p>
        </div>
        <div className="relative border-[0.5px] border-lgr rounded-full text-center p-6 ">
          <img src={arrow} alt="arrow" className="w-6 mx-auto" />
        </div>
      </div>
    </>
  );
};

export default HomePageGrid;
