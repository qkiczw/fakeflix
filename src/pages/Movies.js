import React from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";
// Bootstrap components
import { Container, Row } from "react-bootstrap";

export function Movies({ allMovies }) {
  // This function is removing duplicate of movies (movies with the same id)
  let filteredMovies = allMovies.reduce((movies, currentMovie) => {
    if (!movies.some((movie) => movie.id === currentMovie.id)) {
      movies.push(currentMovie);
    }
    return movies;
  }, []);

  return (
    <>
      <main>
        <Container fluid>
          <h2>Movies page</h2>
          <Row>
            {filteredMovies.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Movies;
