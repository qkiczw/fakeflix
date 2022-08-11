import React, { useState } from "react";

// Components
import MovieCard from "../components/MovieCard/MovieCard;";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

export function Search() {
  return (
    <>
      <main>
        <Container fluid className="movies-page">
          <Row>Searched Movies</Row>
        </Container>
      </main>
    </>
  );
}

export default Search;
