import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const Container = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [allResults, setAllResults] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,continents"
        );
        const result = await response.json();        
        setAllResults(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim() === "") {
      setSearchClicked(false);
    }
  };

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      setSearchClicked(true);
    }
  };

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
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="border-2 border-black me-1 w-7/12 py-1 px-2 mb-2 font-thin"
            placeholder="Enter a country"
          />
          <button
            type="button"
            onClick={handleSearch}
            className="border-2 border-black bg-black text-white italic py-1 px-4 font-thin"
          >
            search
          </button>
        </div>
      </div>
      {/* Display section */}
      <div className="overflow-y-auto">
        <p className="h-96">
          <div className="search-result">
            <SearchResults
              allResults={allResults}
              searchQuery={searchQuery}
              searchClicked={searchClicked}
            />
          </div>
        </p>
      </div>
    </div>
  );
};

export default Container;
