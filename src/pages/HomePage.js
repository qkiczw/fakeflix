import React from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";

// Bootstrap components
import { Row } from "react-bootstrap";

export function HomePage(props) {
  const { movies } = props;
  return (
    <>
      <main>
        <h2>Recent Movies</h2>
        <Row>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </Row>
      </main>
    </>
  );
}

export default HomePage;
