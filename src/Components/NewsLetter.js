
const NewsLetter = () => {
  return (
    <section className="mx-14 py-16 border-[0.5px] border-lgr text-lgr font-bask">
      <h2 className="text-center font-normal text-3xl">NEWSLETTER</h2>
      <p className="font-satoshi font-normal text-3xl text-center my-5">
        Subscribe to get daily updates on new drops & exciting deals{" "}
      </p>
      <form className="flex justify-center">
        <input
          type="email"
          className="py-5 pl-14 mr-5 w-4/12 border-[0.5px] border-lgr focus:outline-none"
          placeholder="ENTER YOUR EMAIL"
        />
        <button
          type="submit"
          className="bg-black text-white py-5 px-11 text-base transition-all ease-in-out duration-500 hover:text-black hover:bg-white hover:border-[0.5px] border-lgr"
        >
          SUBSCRIBE
        </button>
      </form>
    </section>
  );
};

export default NewsLetter;
