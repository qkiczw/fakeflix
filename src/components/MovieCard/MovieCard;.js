import React from "react";

// Bootstrap components
import { Col, Card, Button } from "react-bootstrap";

// Icons
import {
  BsPlayCircleFill,
  BsCheckCircle,
  BsEmojiHeartEyes,
} from "react-icons/bs";

const MovieCard = (props) => {
  const { movieData } = props;
  return (
    <>
      <Col xs={12} md={4} lg={2}>
        <Card style={{}} className="movie-card-container">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
            className="movie-card-image"
          />
          <Card.Body>
            <Card.Title>{movieData.title}</Card.Title>
            <Card.Text className="movie-card-icons">
              {movieData.desc}
              <span className="movie-card-icons">
                <BsPlayCircleFill />
                <BsCheckCircle />
                <BsEmojiHeartEyes />
              </span>
            </Card.Text>
            <Button variant="danger">Watch</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default MovieCard;
