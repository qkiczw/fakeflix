import React from "react";

// Bootstrap Components
import { Col, Row } from "react-bootstrap";

const Hero = ({ randomMovie }) => {
  const { title, overview, poster_path } = randomMovie;
  return (
    <Row>
      <Col xs={12}>
        <section className="hero">
          <img
            className="hero-bacground"
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={overview}
          />
          <h2 className="hero-title">{title ? title : " "}</h2>
          <p className="hero-plot">{overview ? overview : ""}</p>
          <div className="hero-buttons">
            <button>Watch</button>
            <button>More info</button>
          </div>
        </section>
      </Col>
      {console.log("hero random from props: ", randomMovie)}
    </Row>
  );
};

export default Hero;
