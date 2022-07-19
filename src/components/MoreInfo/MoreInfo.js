import React, { useContext } from "react";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

import { MoreInfoContext } from "../../App";

// Icons
import { BsXCircle } from "react-icons/bs";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

const MoreInfo = ({ hidden, singleMovieData }) => {
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
              className="more-info__image"
              src={
                singleMovieData.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${singleMovieData.backdrop_path}`
                  : genericThumb
              }
              alt={singleMovieData.title}
            />
            <div className="more-info__desc">
              <h2>{singleMovieData.title}</h2>
              <div>{singleMovieData.overview}</div>
              <p>
                Cast:{" "}
                {singleMovieData.cast === undefined
                  ? "none"
                  : singleMovieData.cast
                      .slice(0, 5)
                      .map((item) => item.name)
                      .join(", ")}
              </p>
              {console.log(`single: `, singleMovieData.cast)}
            </div>

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
