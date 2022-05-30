import React, { useState } from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";
// Bootstrap components
import { Container, Row } from "react-bootstrap";

export function Movies({ movies }) {
  const [isFiltered, setFileterd] = useState(true);
  const [movieGenre, setMovieGenre] = useState(35);

  // use the filtered movies from props and try filter with categories with filtered array;

  return (
    <>
      <main>
        <Container fluid>
          <h2>Movies page</h2>

          <Row>
            {isFiltered
              ? movies
                  .filter((movie) =>
                    movie["genre_ids"].some((n) => n === movieGenre)
                  )
                  .map((movie) => (
                    <MovieCard key={movie.id} movieData={movie} />
                  ))
              : movies.map((movie) => (
                  <MovieCard key={movie.id} movieData={movie} />
                ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Movies;
