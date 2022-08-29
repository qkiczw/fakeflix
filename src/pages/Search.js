import React, { useState } from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

export function Search({ searchedMovieData, allMoviesFiltered }) {
  const [allMovies, setAllMovies] = useState(allMoviesFiltered);
  return (
    <>
      <main>
        <Container fluid className="movies-page">
          <h2 gap={3}>Search results:</h2>
          <Row>
            <p>{searchedMovieData}</p>
            <ul>
              {allMovies
                .filter((movie) => movie.title.includes(searchedMovieData))
                .map((movie) => (
                  <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Search;
