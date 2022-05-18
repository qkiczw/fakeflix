import React from "react";

// Bootstrap Components
import { Col, Row } from "react-bootstrap";

// const setRandomMovieID = (min, max) => {
//   let minID = Math.ceil(min);
//   let maxID = Math.floor(max);
//   return Math.floor(Math.random() * (maxID - minID)) + minID;
// };

const Hero = () => {
  return (
    <Row>
      <Col xs={12}>
        <section className="hero">
          <img className="hero-bacground" src="" alt="" />
          <h2 className="hero-title">Place for the title</h2>
          <p className="hero-plot">plot</p>
          <div className="hero-buttons">
            <button>Watch</button>
            <button>More info</button>
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default Hero;
