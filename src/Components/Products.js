import { Products as Prod } from "../Resources/Resources";

const Products = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-evenly relative flex-wrap ">
        {Prod.map((product) => {
          return (
            <div
              className="w-full md:w-4/12 lg:max-w-xs mb-4 "
              key={product.id}
            >
              <div className="mx-3 mb-2 p-3 md:shadow-[#d9e1f4] md:shadow-md md:rounded-lg">
                <img src={product.img} alt="product" className="" />
                <div className="flex justify-between md:flex-col md:items-start mx-1 md:mx-auto">
                  <h3 className="font-satoshi font-normal text-base lg:text-xl uppercase mt-2.5 mb-5">
                    {product.title}
                  </h3>
                  <h3 className="mt-2.5 md:mt-0 font-satoshi font-bold text-base lg:text-[20px]">
                    ${product.price}
                  </h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="font-2xl font-medium border-[1px] border-[#333333] rounded-md font-satoshi px-16 py-3 mt-3 lg:mt-6 flex mx-auto hover:bg-[#333333] hover:text-white transition-all ease-in-out duration-500 active:bg-white active:text-[#333333]">
        See More
      </button>
    </div>
  );
};

export default Products;
