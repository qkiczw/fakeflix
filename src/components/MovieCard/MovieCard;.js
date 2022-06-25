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

  function checkElementXpos(event) {
    const element = event.currentTarget;
    console.log(window.innerWidth - element.offsetLeft);
    if (window.innerWidth - element.offsetLeft < 300) {
      element.style.right = "30px";
    }
  }

  return (
    <>
      <Col xs={12} md={4} lg={2}>
        <Card
          className="movie-card-container"
          onMouseOver={(event) => checkElementXpos(event)}
        >
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
      </Col>
    </>
  );
};

export default MovieCard;
