import React, { useState, useEffect } from "react";

// Bootstrap Components
import { Col, Row } from "react-bootstrap";

const HIGHEST_MOVIE_ID = 750000;
const getRandomMovieID = (min, max) => {
  let minID = Math.ceil(min);
  let maxID = Math.floor(max);
  return Math.floor(Math.random() * (maxID - minID)) + minID;
};

const Hero = () => {
  const [movie, getMovie] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${getRandomMovieID(
        1,
        HIGHEST_MOVIE_ID
      )}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
    //   .then((movie) => getMovie((data) => movie.concat(data)));
  }, []);

  return (
    <section>
      <h2>PLace for the title</h2>
    </section>
  );
};

export default Hero;
