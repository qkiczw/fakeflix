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

      <Col className="movie-card-container">
        <div className="movie-card-image">
          <img
            src={
              movieData.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`
                : genericThumb
            }
            alt={movieData.desc}
          />
        </div>
        <div className="movie-card-info">
          <div className="movie-card-title">
            {movieData.title ? movieData.title : movieData.name}
          </div>
        </div>
      </Col>
    </>
  );
};

export default MovieCard;
