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
    <div className="mt-4">
      {searchClicked && searchQuery.trim() !== "" ? (
        filteredResults.length > 0 ? (
          filteredResults.map((item, index) => (
            <>
              <div key={index} className="font-thin">
                <h3>{item.name.official}</h3>
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
