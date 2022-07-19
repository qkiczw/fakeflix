import React, { useContext } from "react";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

import { MoreInfoContext } from "../../App";

// Icons
import { BsXCircle } from "react-icons/bs";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

const MoreInfo = ({ hidden, singleMovieData }) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);

  return (
    <>
      <Container
        fluid
        className={`more-info__container ${
          hidden ? "more-info__container--hidden" : ""
        }  `}
      >
        <Row>
          <Col className="more-info__content">
            <img
              className="more-info__image"
              src={
                singleMovieData.backdrop_path
                  ? `https://image.tmdb.org/t/p/original/${singleMovieData.backdrop_path}`
                  : genericThumb
              }
              alt={singleMovieData.title}
            />
            <div className="more-info__desc">
              <h2>{singleMovieData.title}</h2>
              <div>{singleMovieData.overview}</div>
              <div className="more-info__genres">
                <span className="more-info__section-title">Genres: </span>
                {/* {singleMovieData.genre_ids
                  ? singleMovieData.genre_ids.join(" ")
                  : "unknown"} */}
                {singleMovieData["genre_ids"] === undefined
                  ? "none"
                  : singleMovieData["genre_ids"]
                      .map((item) => {
                        switch (item) {
                          case 28:
                            return "Action";

                          case 12:
                            return "Adventure";

                          case 16:
                            return "Animation";

                          case 35:
                            return "Comedy";

                          case 80:
                            return "Crime";

                          case 99:
                            return "Documentation";

                          case 18:
                            return "Drama";

                          case 10751:
                            return "Family";
                          case 36:
                            return "History";
                          case 14:
                            return "Fantasy";
                          case 27:
                            return "Horror";

                          case 10402:
                            return "Music";

                          case 9648:
                            return "Mystery";

                          case 10749:
                            return "Romance";

                          case 878:
                            return "Sci-Fi";

                          case 10770:
                            return "Tv-Movie";

                          case 53:
                            return "Thriller";

                          case 10752:
                            return "War";

                          case 37:
                            return "Western";

                          default:
                            return "Unknown";
                        }
                      })
                      .join(", ")}
              </div>
              <div className="more-info__cast">
                <span className="more-info__section-title">Cast: </span>
                {singleMovieData.cast === undefined
                  ? "unknown"
                  : singleMovieData.cast
                      .slice(0, 5)
                      .map((item) => item.name)
                      .join(", ")}
              </div>
            </div>

            <BsXCircle
              className="movie-card-button movie-card-button-close"
              onClick={moreInfoStateHandler}
            >
              Close
            </BsXCircle>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoreInfo;
