import { useEffect, useState } from "react";
import { Products } from "../Resources/Resources";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productItem, setProductItem] = useState();
  const params = useParams();

  useEffect(() => {
    const prod = Products.filter((product) => params.id === product.id);
    setProductItem(prod);
    console.log(prod)
  }, [params.id]);

  return (
    <>
      <section className="max-w-7xl mx-auto xl:px-48 xl:pt-14 lg:px-36 lg:pt-10 md:px-24 px-5">
        {productItem.map((product) => (
          <>
            <div className="lg:mb-10">
              <p className="font-satoshi font-medium lg:text-2xl lg:leading-[51px] capitalize">
                <span className="text-[#BCB7B7]">
                  Home/ Marketplace/ Editorials/
                </span>{" "}
                {product.title}
              </p>
            </div>
            <div className="flex">
              <div className="border-[#333333] border-t-[1px] border-l-[1px] border-b-[1px] lg:px-6 lg:py-12 w-6/12">
                <img src={product.img} alt={product.title} />
              </div>
              <div className="border-[#333333] border-[1px] w-6/12">
                <div className="flex justify-between items-center px-7 py-7">
                  <h4 className="font-satoshi lg:font-semibold lg:text-4xl lg:leading-[44px]">
                    Boolean Egyptian
                  </h4>
                  <p className="font-stix lg:text-4xl flex">
                    <svg
                      width="33"
                      height="42"
                      viewBox="0 0 33 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.7025 19.9475L17.5825 0.839591C17.4539 0.676461 17.2896 0.544532 17.102 0.453801C16.9145 0.36307 16.7086 0.315918 16.5 0.315918C16.2914 0.315918 16.0855 0.36307 15.8979 0.453801C15.7104 0.544532 15.5461 0.676461 15.4175 0.839591L0.297458 19.9475C0.104983 20.1842 0 20.4792 0 20.7835C0 21.0877 0.104983 21.3827 0.297458 21.6194L15.4175 40.7273C15.5461 40.8904 15.7104 41.0224 15.8979 41.1131C16.0855 41.2038 16.2914 41.251 16.5 41.251C16.7086 41.251 16.9145 41.2038 17.102 41.1131C17.2896 41.0224 17.4539 40.8904 17.5825 40.7273L32.7025 21.6194C32.895 21.3827 33 21.0877 33 20.7835C33 20.4792 32.895 20.1842 32.7025 19.9475ZM17.8746 25.4922V5.61656L29.4552 20.2546L17.8746 25.4922ZM15.1254 25.4922L3.54484 20.2546L15.1254 5.61656V25.4922ZM15.1254 28.4949V35.9503L5.95031 24.3491L15.1254 28.4949Z"
                        fill="#333333"
                      />
                    </svg>{" "}
                    {product.price}
                  </p>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default ProductDetails;
