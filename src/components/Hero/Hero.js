import React, { useContext } from "react";

import { MoreInfoContext } from "../../App";

// Bootstrap Components
import { Col, Row, Button } from "react-bootstrap";

// Icons
import { BsCaretRightSquare, BsInfoSquareFill } from "react-icons/bs";

const Hero = ({ randomMovie }) => {
  const { title, overview, backdrop_path } = randomMovie;
  const moreInfoStateHandler = useContext(MoreInfoContext);

  return (
    <Row>
      <Col xs={12}>
        <section className="hero">
          <img
            className="hero-bacground"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={overview}
          />
          <Col className="hero-desc-and-btns">
            <h2 className="hero-title">{title ? title : ""}</h2>
            <p className="hero-overview">{overview ? overview : ""}</p>
            <Col className="hero-btns" xs={12} md={5} lg={4}>
              <Button variant="light" size="lg" className="hero-btn">
                <BsCaretRightSquare />
                Watch Trailer
              </Button>
              <Button
                onClick={() => moreInfoStateHandler(randomMovie)}
                variant="outline-light"
                size="lg"
                className="hero-btn"
              >
                <BsInfoSquareFill />
                More Info
              </Button>
            </Col>
          </Col>
        </section>
      </Col>
    </Row>
  );
};

export default Hero;
