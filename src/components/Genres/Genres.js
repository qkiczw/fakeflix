import React, { useState } from "react";

// Api calls helpers
import { MOVIE_GENRES } from "../../apicalls/apicalls";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { BsFillCaretDownFill } from "react-icons/bs";

const Categories = ({ name, showCategorizedByGenre, showAllMovies }) => {
  const [isGenreLisHidden, setGenreLisHidde] = useState(true);
  const [pageName, setPageName] = useState(name);

  return (
    <>
      <Container fluid>
        <Row className="genres-container">
          <Col xs={3} md={2} lg={2} xl={1}>
            <h2>{pageName}</h2>
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
            <button
              className="genre-button"
              onClick={() => {
                showCategorizedByGenre(MOVIE_GENRES.horror.id);
                setPageName(MOVIE_GENRES.horror.name);
                setGenreLisHidde(true);
              }}
            >
              {MOVIE_GENRES.horror.name}
            </button>
            <button
              className="genre-button"
              onClick={() => {
                showCategorizedByGenre(MOVIE_GENRES.comedy.id);
                setPageName(MOVIE_GENRES.comedy.name);
                setGenreLisHidde(true);
              }}
            >
              {MOVIE_GENRES.comedy.name}
            </button>
            <button
              className="genre-button"
              onClick={() => {
                showCategorizedByGenre(MOVIE_GENRES.scifi.id);
                setPageName(MOVIE_GENRES.scifi.name);
                setGenreLisHidde(true);
              }}
            >
              Sci-fi
            </button>
            <button
              className="genre-button"
              onClick={() => {
                showCategorizedByGenre(MOVIE_GENRES.animation.id);
                setPageName(MOVIE_GENRES.animation.name);
                setGenreLisHidde(true);
              }}
            >
              {MOVIE_GENRES.animation.name}
            </button>
            <button
              className="genre-button"
              onClick={() => {
                showCategorizedByGenre(MOVIE_GENRES.documentary.id);
                setPageName(MOVIE_GENRES.documentary.name);
                setGenreLisHidde(true);
              }}
            >
              {MOVIE_GENRES.documentary.name}
            </button>
            <button
              className="genre-button"
              onClick={() => {
                showAllMovies();
                setPageName(name);
                setGenreLisHidde(true);
              }}
            >
              All Movies
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Categories;
