import React from "react";

// Bootstrap components
import { Row, Col } from "react-bootstrap";

export function HomePage(props) {
  const { movies } = props;
  return (
    <>
      <main>
        <Row>
          <Col>
            <h2>Main page</h2>
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="test"
                  />
                  <h4>{movie.title}</h4>
                  <p>{movie.overview}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </main>
    </>
  );
}

export default HomePage;
