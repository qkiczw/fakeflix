import React, { useState } from "react";

// Api calls helpers
import { MOVIE_GENRES } from "../apicalls/apicalls";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";
import Genres from "../components/Genres/Genres";

// Bootstrap components
import { Container, Row, Button } from "react-bootstrap";

export function Movies({ movies }) {
  const [isFiltered, setFileterd] = useState(true);
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
        <Container fluid>
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
