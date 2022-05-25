import React, { useState } from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";
// Bootstrap components
import { Container, Row } from "react-bootstrap";

export function Movies({ movies }) {
  // use the filtered movies from props not the allMovies and try filter with categories with filtered array;
  return (
    <>
      <main>
        <Container fluid>
          <h2>Movies page</h2>

          <Row>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Movies;
