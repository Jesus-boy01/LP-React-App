import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

const Form = () => {
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
    <>
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
      <div className="search-result">
        <SearchResults
          allResults={allResults}
          searchQuery={searchQuery}
          searchClicked={searchClicked}
        />
      </div>
    </>
  );
};

export default Form;
