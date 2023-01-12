import { useEffect, useState } from "react";
import { Products } from "../Resources/Resources";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [productItem, setProductItem] = useState();
  const params = useParams();

  useEffect(() => {
    console.log(Products)
    setProductItem(Products.filter((product) => params.id === product.id));
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
              <div className="border-[#333333] border-[1px] lg:6 lg:py-12 w-6/12"></div>
            </div>
          </>
        ))}
      </section>
    </>
  );
};

export default ProductDetails;
