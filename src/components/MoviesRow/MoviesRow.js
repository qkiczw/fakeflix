import React, { useState, useEffect } from "react";

// Components
import MovieCard from "../MovieCard/MovieCard;";

//Bootstrap Components
import { Row } from "react-bootstrap";

const MoviesRow = ({ genre, rowTitle }) => {
  const [movies, getMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${genre}`
    )
      .then((response) => response.json())
      .then((data) => getMovies((movies) => movies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <section className="mt-5">
      <h2>{rowTitle}</h2>
      <Row>
        {movies
          .map((movie) => <MovieCard key={movie.id} movieData={movie} />)
          .filter((movie, index) => {
            return index <= 5;
          })}
      </Row>
    </section>
  );
};

export default MoviesRow;
