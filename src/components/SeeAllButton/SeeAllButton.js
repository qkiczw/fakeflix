import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import { BsChevronDoubleRight } from "react-icons/bs";

const SeeAllButton = () => {
  return (
    <>
      <NavLink className="see-all-category-button" to="/movies">
        See All Movies
        <span className="see-all-category-button-arrows">
          <BsChevronDoubleRight />
        </span>
      </NavLink>
    </>
  );
};

export default SeeAllButton;
