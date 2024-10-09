import Form from "./Form";

const Container = () => {
  return (
    <div className="lg:w-5/12 md:w-9/12 sm:w-5/12 w-11/12  m-auto mt-3 border-2 border-black font-mono ">
      {/* Header section*/}
      <div className="flex border-b-2 border-b-black">
        <div className="w-[35%]">
          <span className="ml-2 italic">O</span>
          <span className="ml-2 italic">O</span>
          <span className="ml-2 italic">O</span>
        </div>
        <p className="text-gray-300 italic">Countries Catalog</p>
      </div>
      {/* Main section */}
      <div className="mt-6 sm:pl-8 px-2 pb-4 font-semibold border-b-2 border-b-black">
        <h5 className="text-xl">Keyword</h5>
        <div className="search">
          <Form />
        </div>
      </div>
      {/* Display section */}
      <div className="overflow-y-auto">
        <p className="h-96"></p>
      </div>
    </div>
  );
};

export default Container;
