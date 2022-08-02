import React, { useContext, useEffect, useState } from "react";
// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";
import { MoreInfoContext } from "../../App";
import YouTube from "react-youtube";

// Icons
import { BsXCircle, BsPlayCircle } from "react-icons/bs";

// Assets
import imdbLogo from "../../assets/logo_imdb.png";

// Utils
import { unFreezeAppContainer } from "../../utils/helpers";

const MoreInfo = ({ hidden, movieID, isTvSeriesCard }) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);

  const [movieCast, setMovieCast] = useState({});
  const [movieInfo, setMovieInfo] = useState({});

  let filteredTrailers = movieInfo?.videos?.results.filter(
    (item) => item.type === "Trailer"
  );

  // youtube options
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const showAndHideTrailer = () => {
    document.querySelector(".more-info__image").classList.toggle("hidden");
    document.querySelector(".more-info__play-btns").classList.toggle("hidden");
  };

  const fetchCurrentMovieData = async () => {
    // fetching cast
    await fetch(
      `https://api.themoviedb.org/3/${
        isTvSeriesCard ? "tv" : "movie"
      }/${movieID}/credits?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieCast(data);
      })
      .catch((error) => console.log("error: ", error));
    // fetchinf movie info
    await fetch(
      `https://api.themoviedb.org/3/${
        isTvSeriesCard ? "tv" : "movie"
      }/${movieID}?api_key=${
        process.env.REACT_APP_MOVIES_API_KEY
      }&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieInfo(data);
      })
      .catch((error) => console.log("error: ", error));
  };

  useEffect(() => {
    if (hidden !== true) {
      fetchCurrentMovieData();
    }
  }, [movieID]);

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
            <div className="more-info__media">
              <YouTube
                className="more-info__video ratio ratio-16x9"
                videoId={filteredTrailers ? filteredTrailers[0].key : ""}
              />
              <img
                className="more-info__image"
                src={
                  movieInfo.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`
                    : `https://image.tmdb.org/t/p/original/${movieInfo.poster_path}`
                }
                alt={movieInfo.title}
              />
              <div className="more-info__play-btns">
                <BsPlayCircle onClick={() => showAndHideTrailer()} />
              </div>
            </div>

            <div className="more-info__desc">
              <h2>
                {movieInfo.title}
                <a
                  href={`https://www.imdb.com/title/${movieInfo.imdb_id}/`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="logos__imdb"
                    src={imdbLogo}
                    alt={movieInfo.overview}
                  />
                </a>
              </h2>
              <div>{movieInfo.overview}</div>
              <div className="more-info__genres">
                <span className="more-info__section-title">Genres: </span>
                {movieInfo.genres === undefined
                  ? "none"
                  : movieInfo.genres.map((genre) => genre.name).join(", ")}
              </div>
              <div className="more-info__cast">
                <span className="more-info__section-title">Cast: </span>
                {movieCast.cast === undefined
                  ? "unknown"
                  : movieCast.cast
                      .slice(0, 5)
                      .map((cast) => cast.name)
                      .join(", ")}
              </div>
            </div>
            <BsXCircle
              className="movie-card-button movie-card-button-close"
              onClick={() => {
                moreInfoStateHandler();
                setMovieInfo({});
                setMovieCast({});
                unFreezeAppContainer();
                showAndHideTrailer();
              }}
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
