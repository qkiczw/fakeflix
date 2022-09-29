import React, { useContext } from "react";

import { MoreInfoContext } from "../../App";

// Components
import ActionButtons from "../ActionButtons/ActionButtons";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// Utils
import { freezeAppContainer } from "../../utils/helpers";

// Icons
import { BsInfoCircle } from "react-icons/bs";

const MovieCard = (props) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);
  const { movieData } = props;
  const currentMovieID = movieData.id;
  const isTvSeries = props.tvSeries; // Detect is card for a tv-series or for movie

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
  }

  const movieCardPositionChecker = (event) => {
    const screenWidth = document
      .querySelector("body")
      .getBoundingClientRect().width;
    // const currentMovieCard = event.currentTarget;
    const currentMovieCardRightXpos =
      screenWidth - event.currentTarget.getBoundingClientRect().right;
    const currentMovieCardLeftXpos =
      event.currentTarget.getBoundingClientRect().left;

    if (currentMovieCardLeftXpos <= 50) {
      return `left`;
    }
    if (currentMovieCardRightXpos <= 50) {
      return `right`;
    }
    if (currentMovieCardLeftXpos >= 50 && currentMovieCardRightXpos >= 50) {
      return `center`;
    }
  };

  const movieCardResizer = (event) => {
    const screenWidth = document
      .querySelector("body")
      .getBoundingClientRect().width;
    const currentMovieCard = event.currentTarget;
    const marginFromTheLefOrRightSide = screenWidth < 768 ? `50` : `75`;

    if (movieCardPositionChecker(event) === "left") {
      currentMovieCard.classList.add("movie-card__container--active");
      currentMovieCard.style.transform = `scale(1.5) translateX(${marginFromTheLefOrRightSide}px)`;
    }
    if (movieCardPositionChecker(event) === "right") {
      currentMovieCard.classList.add("movie-card__container--active");
      currentMovieCard.style.transform = `scale(1.5) translateX(${-marginFromTheLefOrRightSide}px)`;
    }
    if (movieCardPositionChecker(event) === "center") {
      currentMovieCard.classList.add("movie-card__container--active");
      currentMovieCard.style.transform = `scale(1.5) translateX(0px)`;
    }
  };

  // This function reset scale and translate styles on mouse leave listener
  function resetMovieCardsize(event) {
    const currentMovieCard = event.currentTarget;
    currentMovieCard.classList.remove("movie-card__container--active");
    currentMovieCard.style.transform = `scale(1) translateX(0px)`;
  }

  return (
    <>
      <div
        className="movie-card__container"
        onTouchStart={(event) => movieCardPositionChecker(event)}
        onMouseOver={(event) => {
          movieCardResizer(event);
          movieCardPositionChecker(event);
        }}
        onMouseLeave={(event) => resetMovieCardsize(event)}
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
          <ActionButtons movieData={movieData} />
          <div>
            <BsInfoCircle
              className="actionButton actionButton__info"
              onClick={() => {
                moreInfoStateHandler(currentMovieID, isTvSeries);
                freezeAppContainer();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
