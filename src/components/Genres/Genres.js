import React, { useState } from "react";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { BsFillCaretDownFill } from "react-icons/bs";

const Categories = ({ name }) => {
  const [isGenreLisHidden, setGenreLisHidde] = useState(true);

  return (
    <>
      <Container fluid>
        <Row className="genres-container">
          <Col xs={3} md={2} lg={2} xl={1}>
            <h2>{name}</h2>
          </Col>
          <Col xs={5} md={2} lg={2} xl={1}>
            <div
              className="choose-genre-button"
              onClick={() =>
                isGenreLisHidden
                  ? setGenreLisHidde(false)
                  : setGenreLisHidde(true)
              }
            >
              Genres <BsFillCaretDownFill />
            </div>
          </Col>
        </Row>
        <Row className={`genres ${isGenreLisHidden ? "genres-hidden" : ""}`}>
          <Col xs={9} md={4} lg={5} xl={3} className="genres-buttons p-2">
            <button className="genre-button">Horror</button>
            <button className="genre-button">Comedy</button>
            <button className="genre-button">Sci-fi</button>
            <button className="genre-button">Adnimation</button>
            <button className="genre-button">Documentary</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
