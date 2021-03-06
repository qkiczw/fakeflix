import React, { useState } from "react";

// Api calls helpers
import { MOVIE_GENRES } from "../apicalls/apicalls";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";
import Genres from "../components/Genres/Genres";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

export function Movies({ movies }) {
  const [isFiltered, setFileterd] = useState(false);
  const [movieGenre, setMovieGenre] = useState(35);

  const showCategorizedByGenre = (genre) => {
    setMovieGenre(genre);
    setFileterd(true);
  };

  const showAllMovies = () => {
    setFileterd(false);
  };

  return (
    <>
      <main>
        <Genres
          name="Movies"
          showCategorizedByGenre={showCategorizedByGenre}
          showAllMovies={showAllMovies}
        />
        <Container fluid className="movies-page">
          <Row>
            {isFiltered
              ? movies
                  .filter((movie) =>
                    movie["genre_ids"].some((n) => n === movieGenre)
                  )
                  .map((movie) => (
                    <Col key={movie.id} xs={6} md={4} lg={2} className="mb-3">
                      <MovieCard movieData={movie} />
                    </Col>
                  ))
              : movies.map((movie) => (
                  <Col key={movie.id} xs={6} md={4} lg={2} className="mb-3">
                    <MovieCard key={movie.id} movieData={movie} />
                  </Col>
                ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Movies;
