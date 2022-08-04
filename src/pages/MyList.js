import React, { useState } from "react";

// Bootstrap components
import { Container, Row } from "react-bootstrap";

export function MyList() {
  const [myMoviesList, setMyMoviesList] = useState(
    localStorage.getItem("myMoviesList")
  );

  return (
    <>
      <main>
        <Container fluid className="movies-page">
          <Row>
            {JSON.parse(myMoviesList).map((item) => (
              <p>Movie ID {item}</p>
            ))}
            {/* MyMoviesList has to be an array of objects with movie data */}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default MyList;
