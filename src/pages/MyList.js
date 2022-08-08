import React, { useState } from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

export function MyList() {
  const [myMoviesList, setMyMoviesList] = useState(
    localStorage.getItem("myMoviesList")
  );

  return (
    <>
      <main>
        <Container fluid className="movies-page">
          <h2 className="" gap={3}>
            My Movies
          </h2>
          <Row>
            {JSON.parse(myMoviesList).map((movie) => (
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

export default MyList;
