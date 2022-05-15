import React, { useState, useEffect } from "react";

// Components
import MovieCard from "../MovieCard/MovieCard;";

//Bootstrap Components
import { Row } from "react-bootstrap";

const MoviesRow = ({ genre }) => {
  const [movies, getMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=28`
    )
      .then((response) => response.json())
      .then((data) => getMovies(movies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <h2>{genre}</h2>
      <Row>
        {movies
          .map((movie) => <MovieCard key={movie.id} movieData={movie} />)
          .filter((movie, index) => {
            return index < 6;
          })}
      </Row>
    </>
  );
};

export default MoviesRow;
