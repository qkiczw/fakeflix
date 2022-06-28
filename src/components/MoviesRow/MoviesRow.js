import React from "react";

// Components
import MovieCard from "../MovieCard/MovieCard;";
import SeeAllButton from "../SeeAllButton/SeeAllButton";

// React Slick
import Slider from "react-slick";

//Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

const MoviesRow = ({ movies, rowTitle }) => {
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
          {/* {movies
          .map((movie) => <MovieCard key={movie.id} movieData={movie} />)
          .filter((movie, index) => {
            return index <= 5;
          })} */}
          <Col>
            <Slider {...slickSettings}>
              {movies.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MoviesRow;
