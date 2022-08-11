import React from "react";
import { useNavigate } from "react-router-dom";

// icons
import { BsSearch } from "react-icons/bs";

const activeInputHandler = (e) => {
  e.preventDefault();
  const searchContainer = document.querySelector(".search");
  const searchInput = document.querySelector(".search__input");
  searchInput.classList.toggle("search__input--active");
  searchContainer.classList.toggle("search--active");
};

// const testFN = (e) => {
//   console.log(`event`, e.target.value);
// };

const SearchComponent = ({ searchMovie }) => {
  let navigate = useNavigate();
  const redirectToSearchPage = () => {
    navigate("search");
  };

  return (
    <>
      <form className="search">
        <label htmlFor="search__input"></label>
        <input
          id="search__input"
          className="search__input"
          onKeyUp={(event) => {
            searchMovie(event.target.value);
            redirectToSearchPage();
          }}
        />
        <button onClick={activeInputHandler} className="search__input__button">
          <BsSearch className="search__input__icon user__icon" />
        </button>
      </form>
    </>
  );
};

export default SearchComponent;
