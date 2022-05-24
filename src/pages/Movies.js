import React from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";
// Bootstrap components
import { Row } from "react-bootstrap";

export function Movies({ allMovies }) {
  return (
    <>
      <main>
        <h2>Movies page</h2>
        <Row>
          {allMovies.map((movie) => (
            <MovieCard movieData={movie} />
          ))}
        </Row>
      </main>
    </>
  );
}

export default Movies;
