import React, { useState } from "react";

import { handleLocalStorageData } from "../../utils/helpers";

// Icons
import {
  BsCheckCircleFill,
  BsHandThumbsUp,
  BsPlusCircle,
} from "react-icons/bs";

const ActionButtons = ({ movieData }) => {
  let localStorageMoviesList =
    JSON.parse(localStorage.getItem("myMoviesList")) ?? [];

  const [isMovieOnTheList, setMovieOnTheList] = useState(
    localStorageMoviesList.some((movie) => movie.id === movieData.id)
  );

  return (
    <>
      <div className="actionButtons">
        <div className="actionButtons__button">
          {isMovieOnTheList ? (
            <BsCheckCircleFill
              className="actionButton"
              onClick={() => {
                handleLocalStorageData(movieData);
                setMovieOnTheList(!isMovieOnTheList);
              }}
            />
          ) : (
            <BsPlusCircle
              className="actionButton"
              onClick={() => {
                handleLocalStorageData(movieData);
                setMovieOnTheList(!isMovieOnTheList);
              }}
            />
          )}
          {/* TODO: if statement with icons (thumb down if rating is bad, thumb up if it is average and two thumbs up is is good) */}
        </div>
        <div className="actionButtons__button">
          <BsHandThumbsUp className="actionButton" />
        </div>
      </div>
    </>
  );
};

export default ActionButtons;
