import React from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";

// Bootstrap components
import { Row, Container, Col } from "react-bootstrap";

export function TvSeries({ topRatedTvSeries }) {
  return (
    <>
      <main>
        <Container fluid className="movies-page">
          <h2>TvSeries</h2>
          <Row>
            {topRatedTvSeries.map((movie) => (
              <Col key={movie.id} xs={6} md={4} lg={2} className="mb-3">
                <MovieCard key={movie.id} movieData={movie} tvSeries />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default TvSeries;
