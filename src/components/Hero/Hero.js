import React, { useState, useEffect } from "react";

// Bootstrap Components
import { Col, Row } from "react-bootstrap";

const getRandomMovieID = (min, max) => {
  let minID = Math.ceil(min);
  let maxID = Math.floor(max);
  return Math.floor(Math.random() * (maxID - minID)) + minID;
};

const Hero = () => {
  const [randomMovie, getRandomMovie] = useState([]);

  useEffect(() => {
    const RANDOM_MOVIE_ID = getRandomMovieID(1, 750000);

    fetch(
      `https://api.themoviedb.org/3/movie/${RANDOM_MOVIE_ID}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => getRandomMovie(randomMovie.concat(data)))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <Row>
      {console.log("rrr", randomMovie)}
      <Col xs={12}>
        <section className="hero">
          <img className="hero__bacground" src="" alt="" />
          <h2 className="hero__title">TITLE of The MOVIE </h2>
          <p className="hero__plot">plot</p>
          <div className="hero__buttons">
            <button>Watch</button>
            <button>More info</button>
          </div>
        </section>
      </Col>
    </Row>
  );
};

export default Hero;
