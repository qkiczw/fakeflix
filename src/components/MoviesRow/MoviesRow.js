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

const MoviesRow = ({ movies, rowTitle, tvSeries }) => {
  return (
    <section className="mt-5 pt-5">
      <Container fluid className="movies-row">
        <Row>
          <Col className="movies-row__title">
            <h2 className="movies-row__genre">{rowTitle}</h2>
            <SeeAllButton />
          </Col>
        </Row>
        <Row>
          <Swiper
            className="swiper__container"
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
                <MovieCard movieData={movie} tvSeries={tvSeries} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </section>
  );
};

export default MoviesRow;
