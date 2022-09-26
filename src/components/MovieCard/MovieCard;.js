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

    let cardPos = currentMovieCardRightXpos + 100;

    currentMovieCard.style.transform = "scale(1.5)";

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

  const resizeMovieCard = (event) => {
    console.log("Screen Touched!");
    const currentMovieCard = event.currentTarget;
    currentMovieCard.classList.toggle("movie-card__container--active");
    console.log(`movieCard:`, currentMovieCard);
  };

  // This function reset scale and translate styles on mouse leave listener
  function resetMovieCardXpos(event) {
    const currentMovieCard = event.currentTarget;
    currentMovieCard.style.transform = `translateX(0) scale(1)`;
  }

  return (
    <>
      <div
        className="movie-card__container"
        onMouseOver={(event) => handleMovieCardXpos(event)}
        onMouseLeave={(event) => resetMovieCardXpos(event)}
        onTouchStart={(event) => resizeMovieCard(event)}
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
