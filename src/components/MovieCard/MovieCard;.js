import React from "react";

// Bootstrap components
import { Col, Card } from "react-bootstrap";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// Icons
import {
  BsPlayCircleFill,
  BsArrowDownCircle,
  BsPlusCircle,
} from "react-icons/bs";

const addMovieToMyList = (movieId) => {
  const myList = JSON.parse(localStorage.getItem("myList"));

  if (myList) {
    console.log("There are movies in the localstorage");
  } else {
    console.log("There are no movies in localstorage :(");
  }

  console.log("My List: ", myList);
  console.log("moive ID: ", movieId);
};

const MovieCard = (props) => {
  const { movieData } = props;

  return (
    <>
      <Col xs={12} md={4} lg={2}>
        <Card style={{}} className="movie-card-container">
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
              {movieData.title}
            </Card.Title>
            <Card.Text className="movie-card-icons">{movieData.desc}</Card.Text>
            <nav className="movie-card-icons">
              <BsPlayCircleFill className="movie-card-icon" />
              <button onClick={() => addMovieToMyList(movieData)}>
                <BsPlusCircle className="movie-card-icon" />
              </button>
              <BsArrowDownCircle className="movie-card-icon" />
            </nav>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MovieCard;
