import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import { BsChevronDoubleRight } from "react-icons/bs";

const SeeAllButton = () => {
  return (
    <div className="see-all-category">
      <NavLink className="see-all-category__button" to="/movies">
        See All Movies
        <span className="see-all-category__arrows">
          <BsChevronDoubleRight />
        </span>
      </NavLink>
    </div>
  );
};

export default SeeAllButton;
