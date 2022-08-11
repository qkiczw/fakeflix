import React, { useContext } from "react";

import { MoreInfoContext } from "../../App";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// Utils
import {
  freezeAppContainer,
  handleLocalStorageData,
} from "../../utils/helpers";

// Icons
import {
  BsPlayCircleFill,
  BsCheckCircle,
  BsCheckCircleFill,
  BsHandThumbsUp,
  BsExclamationCircle,
} from "react-icons/bs";

const MovieCard = (props) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);
  const { movieData } = props;
  const currentMovieID = movieData.id;
  const isTvSeries = props.tvSeries; // Detect is card for a tv-series or for movie

  let localStorageMoviesList =
    JSON.parse(localStorage.getItem("myMoviesList")) ?? [];

  // This function check wheter the movie card is near the screen border or not
  function handleMovieCardXpos(event) {
    const currentMovieCard = event.currentTarget;
    const currentMovieCardRightXpos =
      event.currentTarget.getBoundingClientRect().right;
    const currentMovieCardLeftXpos =
      event.currentTarget.getBoundingClientRect().left;
    const bodyWidth = document
      .querySelector("body")
      .getBoundingClientRect().width;

    let cardPos = currentMovieCardRightXpos + 100;

    if (cardPos > bodyWidth) {
      currentMovieCard.style.transform = `${
        window.innerWidth < 768 ? "translateX(-50px)" : "translateX(-100px)"
      } scale(1.5)`;
    }
    if (currentMovieCardLeftXpos < 100) {
      currentMovieCard.style.transform = `${
        window.innerWidth < 768 ? "translateX(50px)" : "translateX(100px)"
      } scale(1.5)`;
    }
  }

  // This function reset scale and translate styles on mouse leave listener
  function resetMovieCardXpos(event) {
    const currentMovieCard = event.currentTarget;
    currentMovieCard.style.transform = `translateX(0) scale(1)`;
  }

  return (
    <>
      <div
        className="movie-card__container"
        onMouseOver={(e) => handleMovieCardXpos(e)}
        onMouseLeave={(e) => resetMovieCardXpos(e)}
      >
        <img
          className="movie-card-image"
          src={
            movieData.backdrop_path
              ? `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`
              : genericThumb
          }
          alt={movieData.title}
        />
        <div className="movie-card-title">
          {movieData.title ? movieData.title : movieData.name}
        </div>
        <div className="movie-card-buttons">
          <span className="movie-card-buttons-left">
            <BsPlayCircleFill className="movie-card-button" />
            {localStorageMoviesList.some(
              (movie) => movie.id === movieData.id
            ) ? (
              <BsCheckCircleFill
                className="movie-card-button"
                onClick={() => handleLocalStorageData(movieData)}
              />
            ) : (
              <BsCheckCircle
                className="movie-card-button"
                onClick={() => handleLocalStorageData(movieData)}
              />
            )}
            <BsHandThumbsUp className="movie-card-button" />
          </span>
          <span className="movie-card-buttons-right">
            <BsExclamationCircle
              className="movie-card-button"
              onClick={() => {
                moreInfoStateHandler(currentMovieID, isTvSeries);
                freezeAppContainer();
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
