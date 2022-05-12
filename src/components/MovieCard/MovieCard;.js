import React from "react";

// Bootstrap components
import { Col, Card, OverlayTrigger, Tooltip } from "react-bootstrap";

// Icons
import {
  BsPlayCircleFill,
  BsArrowDownCircle,
  BsEmojiHeartEyes,
  BsPlusCircle,
} from "react-icons/bs";

const MovieCard = (props) => {
  const { movieData } = props;

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

  return (
    <>
      <Col xs={12} md={4} lg={2}>
        <Card style={{}} className="movie-card-container">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`}
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
