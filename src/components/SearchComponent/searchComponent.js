import React from "react";

// icons
import { BsSearch } from "react-icons/bs";

const activeInputHandler = (e) => {
  e.preventDefault();
  const searchContainer = document.querySelector(".search-container");
  const searchInput = document.querySelector(".search-input");
  searchInput.classList.toggle("search-input-active");
  searchContainer.classList.toggle("search-container-active");
};

const SearchComponent = () => {
  return (
    <>
      <form className="search-container">
        <label htmlFor="search-input"></label>
        <input id="search-input" className="search-input" />
        <button onClick={activeInputHandler} className="search-input-button">
          <BsSearch className="search-input-button-icon user-icon" />
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
