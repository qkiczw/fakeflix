import React from "react";

// icons
import { BsSearch } from "react-icons/bs";

const SearchComponent = () => {
  return (
    <>
      <form className="search-container">
        <label htmlFor="search-input"></label>
        <input id="search-input" placeholder="type a title"></input>
      </form>
      <button>
        <BsSearch className="search-input-icon" />
      </button>
    </>
  );
};

export default SearchComponent;
