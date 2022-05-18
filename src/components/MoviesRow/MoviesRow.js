import React from "react";

// Components
import MovieCard from "../MovieCard/MovieCard;";

//Bootstrap Components
import { Row } from "react-bootstrap";

const MoviesRow = ({ movies, rowTitle }) => {
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
