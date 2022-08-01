import React, { useContext } from "react";

import { MoreInfoContext } from "../../App";

// Bootstrap Components
import { Col, Row, Button } from "react-bootstrap";

// Utils
import { freezeAppContainer } from "../../utils/helpers";

// Icons
import { BsCaretRightSquare, BsExclamationCircle } from "react-icons/bs";

const Hero = ({ randomMovie }) => {
  const { title, overview, backdrop_path, id } = randomMovie;
  const moreInfoStateHandler = useContext(MoreInfoContext);

  return (
    <Row>
      <Col xs={12}>
        <div className="hero">
          <img
            className="hero__background"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={overview}
          />
          <Col className="hero__description">
            <h2 className="hero__title">{title ? title : ""}</h2>
            <p className="hero__overview">{overview ? overview : ""}</p>
            <Col className="hero__btns" xs={12}>
              <Button variant="light" size="lg" className="hero__btn">
                <BsCaretRightSquare />
                Watch Trailer
              </Button>
              <Button
                onClick={() => {
                  freezeAppContainer();
                  moreInfoStateHandler(id);
                }}
                variant="outline-light"
                size="lg"
                className="hero__btn"
              >
                <BsExclamationCircle />
                More Info
              </Button>
            </Col>
          </Col>
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
