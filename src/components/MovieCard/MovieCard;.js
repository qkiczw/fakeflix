import React from "react";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// Icons
import {
  BsPlayCircleFill,
  BsCheckCircle,
  BsHandThumbsUp,
} from "react-icons/bs";

import { AiOutlineDownCircle } from "react-icons/ai";

const MovieCard = (props) => {
  const { movieData } = props;

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
            <BsCheckCircle className="movie-card-button" />
            <BsHandThumbsUp className="movie-card-button" />
          </span>
          <span className="movie-card-buttons-right">
            <AiOutlineDownCircle className="movie-card-button" />
          </span>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
