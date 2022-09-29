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

    // let cardPos = currentMovieCardRightXpos + 100;

    // currentMovieCard.style.transform = "scale(1.5)";

    // if (cardPos > bodyWidth) {
    //   currentMovieCard.style.transform = `${
    //     window.innerWidth < 768 ? "translateX(-50px)" : "translateX(-100px)"
    //   } `;
    // }
    // if (currentMovieCardLeftXpos < 100) {
    //   currentMovieCard.style.transform = `${
    //     window.innerWidth < 768 ? "translateX(50px)" : "translateX(100px)"
    //   } `;
    // }
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

    // console.log(`currenLeftPos: `, currentMovieCardLeftXpos);
    // console.log(`currenRightPos: `, currentMovieCardRightXpos);

    if (currentMovieCardLeftXpos <= 50) {
      // console.log(`Movie card is on the left`);
      return `left`;
    }
    if (currentMovieCardRightXpos <= 50) {
      // console.log(`Movie card is on the right`);
      return `right`;
    }
    if (currentMovieCardLeftXpos >= 50 && currentMovieCardRightXpos >= 50) {
      // console.log("Movie Card is centered");
      return `center`;
    }
  };

  const movieCardResizer = (event) => {
    const currentMovieCard = event.currentTarget;
    console.log(movieCardPositionChecker(event));

    if (movieCardPositionChecker(event) === "left") {
      // console.log(`Card is on the left side`);
      currentMovieCard.classList.add("movie-card__container--active");
    }
    if (movieCardPositionChecker(event) === "right") {
      // console.log(`Card is on the right side`);
      currentMovieCard.classList.add("movie-card__container--active");
    }
    if (movieCardPositionChecker(event) === "center") {
      // console.log(`Card is on the center of the app`);
      currentMovieCard.classList.add("movie-card__container--active");
    }
  };

  // This function reset scale and translate styles on mouse leave listener
  function resetMovieCardsize(event) {
    const currentMovieCard = event.currentTarget;
    currentMovieCard.classList.remove("movie-card__container--active");
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
              className="actionButton actionButton__info hidden"
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
