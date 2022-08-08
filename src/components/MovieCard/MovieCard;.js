import React, { useContext } from "react";

import { MoreInfoContext } from "../../App";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// Utils
import {
  freezeAppContainer,
  sendDatatoLocalStorage,
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

  let localStorageMoviesList = JSON.parse(localStorage.getItem("myMoviesList"));

  return (
    <>
      <div className="movie-card-container">
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
                onClick={() => sendDatatoLocalStorage(movieData)}
              />
            ) : (
              <BsCheckCircle
                className="movie-card-button"
                onClick={() => sendDatatoLocalStorage(movieData)}
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
