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
            className="row-swiper"
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 5,
                slidesPerGroup: 2,
              },
              // when window width is >= 480px
              480: {
                slidesPerView: 3,
                spaceBetween: 5,
                slidesPerGroup: 3,
              },
              // when window width is >= 640px
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
                slidesPerGroup: 4,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 6,
                spaceBetween: 10,
                slidesPerGroup: 6,
              },
            }}
            modules={[Navigation]}
            loop={true}
            navigation={true}
            spaceBetween={50}
            slidesPerView={6}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard movieData={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
};

export default MoviesRow;
