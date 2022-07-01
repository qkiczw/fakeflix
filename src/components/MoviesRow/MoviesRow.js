import React from "react";

// Reac Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
          {/* {movies
            .map((movie) => <MovieCard key={movie.id} movieData={movie} />)
            .filter((movie, index) => {
              return index <= 5;
            })} */}
          <Swiper
            modules={[Navigation]}
            loop={true}
            navigation={true}
            spaceBetween={50}
            slidesPerView={6}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id} movieData={movie}>
                <h4>{movie.title}</h4>
                <p>movie.id</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
};

export default MoviesRow;
