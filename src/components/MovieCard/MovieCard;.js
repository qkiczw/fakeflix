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

const testFn = () => {
  console.log("I am doing something!");
};

const MovieCard = (props) => {
  const { movieData } = props;

  return (
    <>
      {/* <Col>
        <Card className="movie-card-container">
          <Card.Img
            variant="top"
            src={
              movieData.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`
                : genericThumb
            }
            className="movie-card-poster"
          />
          <Card.Body>
            <Card.Title className="movie-card-title">
              {movieData.title ? movieData.title : movieData.name}
            </Card.Title>
            <Card.Text className="movie-card-icons">
              {movieData.desc
                ? movieData.desc
                : movieData.overview.substring(0, 100)}
              ...
            </Card.Text>
            <nav className="movie-card-icons">
              <BsPlayCircleFill className="movie-card-icon" />
              <button onClick={() => alert("Do something!!!")}>
                <BsPlusCircle className="movie-card-icon" />
              </button>
              <BsArrowDownCircle className="movie-card-icon" />
            </nav>
          </Card.Body>
        </Card>
        </Col> */}

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
        <div className="movie-card-info">
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
          {/* <div className="movie-card-desc">
            {movieData.desc
              ? movieData.desc
              : movieData.overview.substring(0, 100)}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MovieCard;
