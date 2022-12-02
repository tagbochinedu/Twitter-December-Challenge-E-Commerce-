import img1 from "../Resources/14.png";
import img2 from "../Resources/15.png";
import img3 from "../Resources/16.png";
import img4 from "../Resources/17.png";
import img5 from "../Resources/18.png";

const HomePageGrid = () => {
  return (
    <>
      <h3 className="font-stix font-bold text-4xl">The Boolean Egyptian</h3>
      <p className="text-2xl font-normal text-lgr my-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
        rhoncus dolor pur
      </p>
      <div className="flex">
        <div className="relative flex">
          <img src={img1} alt="person" className="relative" />
          <img src={img2} alt="person" className="absolute z-10 left-[30px]" />
          <img src={img3} alt="person" className="absolute z-20 left-[60px]" />
          <img src={img4} alt="person" className="absolute z-30 left-[90px]" />
          <img src={img5} alt="person" className="absolute z-40 left-[120px]" />
        </div>
        <div>
          <p className="font-satoshi font-medium text-2xl"></p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default HomePageGrid;
