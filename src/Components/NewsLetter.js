
const NewsLetter = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 lg:py-16 lg:border-[0.5px] border-lgr text-lgr font-bask">
      <h2 className="lg:text-center font-normal text-2xl lg:text-3xl">NEWSLETTER</h2>
      <p className="font-satoshi font-normal text-xs lg:text-3xl lg:text-center my-5">
        Subscribe to get daily updates on new drops & exciting deals{" "}
      </p>
      <form className="lg:flex justify-center">
        <input
          type="email"
          className="w-full py-5 pl-4 lg:pl-14 lg:mr-5 lg:w-4/12 mb-6 md:mb-0 border-[0.5px] border-lgr focus:outline-none block"
          placeholder="ENTER YOUR EMAIL"
        />
        
        <button
          type="submit"
          className="bg-black w-full lg:w-auto text-white py-5 px-11 text-base transition-all ease-in-out duration-500 hover:text-black hover:bg-white hover:border-[0.5px] border-lgr"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
