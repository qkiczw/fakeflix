import React from "react";

// Bootstrap Components
import { Col, Row, Button } from "react-bootstrap";

const Hero = ({ randomMovie }) => {
  const { title, overview, poster_path, images } = randomMovie;
  return (
    <Row>
      <Col xs={12}>
        <section className="hero">
          <img
            className="hero-bacground"
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={overview}
          />
          <h2 className="hero-title">{title ? title : " "}</h2>
          <Col className="hero-desc-and-btns">
            <Col className="hero-btns" xs={12} md={5} lg={4}>
              <Button variant="light" size="lg">
                Watch Trailer
              </Button>
              <Button variant="outline-light">More Info</Button>
            </Col>
            <p className="hero-overview">{overview ? overview : ""}</p>
          </Col>
        </section>
      </Col>
      {console.log("hero random from props: ", randomMovie)}
    </Row>
  );
};

export default Hero;
