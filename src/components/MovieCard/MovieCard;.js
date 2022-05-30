import React from "react";

// Bootstrap components
import { Col, Card } from "react-bootstrap";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// Icons
import {
  BsPlayCircleFill,
  BsArrowDownCircle,
  BsEmojiHeartEyes,
  BsPlusCircle,
} from "react-icons/bs";

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
              <BsPlusCircle className="movie-card-icon" />
              <BsEmojiHeartEyes className="movie-card-icon" />
              <BsArrowDownCircle className="movie-card-icon" />
            </nav>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MovieCard;
