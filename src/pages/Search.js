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
          <h2 gap={3} className="mb-5">
            You are searching for: {searchedMovieData}
          </h2>
          <Row>
            {allMovies
              .filter((movie) => movie.title.includes(searchedMovieData))
              .map((movie) => (
                <Col key={movie.id} xs={6} md={4} lg={2} className="mb-3">
                  <MovieCard movieData={movie} />
                </Col>
              ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Search;
