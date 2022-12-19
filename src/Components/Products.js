import { Products as Prod } from "../Resources/Resources";

const Products = () => {
  return (
    <div className="md:flex justify-evenly relative flex-wrap max-w-6xl mx-5 md:mx-auto">
      {Prod.map((product) => {
        return (
          <div
            className="max-w-xs mx-0.5 mb-3.5 px-2 pt-2.5 pb-2 shadow-[#d9e1f4] shadow-lg rounded-lg"
            key={product.id}
          >
            <img src={product.img} alt="product" className="w-56 h-auto" />
            <h3 className="font-satoshi font-normal lg:text-xl uppercase mt-2.5 mb-5">
              {product.title}
            </h3>
            <h3 className="font-satoshi font-bold lg:text-[20px]">
              ${product.price}
            </h3>
          </div>
        );
      })}
      <button className='font-2xl font-medium border-[1px] border-[#333333] rounded-md font-satoshi px-16 py-3'>See More</button>
    </div>
  );
};

export default Products;
