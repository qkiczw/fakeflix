import React from "react";

// Components
import MovieCard from "../MovieCard/MovieCard;";
import SeeAllButton from "../SeeAllButton/SeeAllButton";

//Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

const MoviesRow = ({ movies, rowTitle }) => {
  return (
    <section className="mt-5">
      <Container fluid>
        <Row>
          <Col className="movies-row-title">
            <h2>{rowTitle}</h2>
            <SeeAllButton />
          </Col>
        </Row>
        <Row>
          {movies
            .map((movie) => <MovieCard key={movie.id} movieData={movie} />)
            .filter((movie, index) => {
              return index <= 5;
            })}
        </Row>
      </Container>
    </section>
  );
};

export default MoviesRow;
