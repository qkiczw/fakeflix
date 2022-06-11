import React from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";

// Bootstrap components
import { Row, Container } from "react-bootstrap";

export function TvSeries({ topRatedTvSeries }) {
  return (
    <>
      <main>
        <Container fluid>
          <h2>TvSeries</h2>
          <Row>
            {topRatedTvSeries.map((movie) => (
              <MovieCard key={movie.id} movieData={movie} />
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default TvSeries;
