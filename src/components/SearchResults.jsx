/* eslint-disable react/prop-types */
import Button from "./Button";

const SearchResults = ({ allResults, searchQuery, searchClicked }) => {
  const filteredResults =
    searchClicked && searchQuery.trim() !== ""
      ? allResults.filter((item) =>
          item.name.official.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : [];

  return (
    <div className="mt-4 sm:pl-8 px-2">
      {searchClicked && searchQuery.trim() !== "" ? (
        filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
            <>
              <div key={index} className="font-thin">
                <div className="flex items-center">
                  <img src={item.flags.png} alt={item.name.official} className="h-3 w-auto" />
                  <h3 className="ml-1">{item.name.official}</h3>
                </div>
                <p>Continent: {item.continents}</p>
              </div>
              <Button title="see details..." />
            </>
          ))
        ) : (
          <p>Country not found</p>
        )
      ) : null}
    </div>
  );
};

export default SearchResults;
