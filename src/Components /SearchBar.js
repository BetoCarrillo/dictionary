import React, { useContext } from "react";
import { DictionaryContext } from "../Context/dictionarycontext";

function SearchBar() {
  const { fetchData } = useContext(DictionaryContext);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      fetchData(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <div>
      <input
        className="SearchButton move"
        placeholder="Search word.."
        onKeyDown={handleEnter}
      ></input>
    </div>
  );
}

export default SearchBar;
