import React, { useContext } from "react";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

import { MoreInfoContext } from "../../App";

// Icons
import { BsXCircle } from "react-icons/bs";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

const MoreInfo = ({ hidden, movieData }) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);
  return (
    <>
      <Container
        fluid
        className={`more-info__container ${
          hidden ? "more-info__container--hidden" : ""
        }  `}
      >
        <Row>
          <Col className="more-info__content">
            <img
              className="movie-card-image"
              src={
                movieData.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movieData.backdrop_path}`
                  : genericThumb
              }
              alt={movieData.title}
            />
            <h2>{movieData.title}</h2>
            <div>{movieData.overview}</div>
            <BsXCircle
              className="movie-card-button movie-card-button-close"
              onClick={moreInfoStateHandler}
            >
              Close
            </BsXCircle>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoreInfo;
