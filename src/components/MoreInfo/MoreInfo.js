import React, { useContext, useEffect, useState } from "react";

// Components
import ActionButtons from "../ActionButtons/ActionButtons";
import Providers from "../Providers/Providers";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";
import { MoreInfoContext } from "../../App";
import YouTube from "react-youtube";

// Icons
import { BsXCircle, BsPlayCircle } from "react-icons/bs";

// Assets
import imdbLogo from "../../assets/logo_imdb.png";

// Utils
import { unFreezeAppContainer, runtimeConverter } from "../../utils/helpers";

const MoreInfo = ({
  hidden,
  movieID,
  isTvSeriesCard,
  closeMoreInfoComponent,
}) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);

  const [movieCast, setMovieCast] = useState({});
  const [movieInfo, setMovieInfo] = useState({});
  const [movieProviders, setMovieProviders] = useState({});

  let filteredTrailers = movieInfo?.videos?.results.filter(
    (item) => item.type === "Trailer"
  );

  // youtube options
  const youTubeOpts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // Test function to close the component after clik oustisde moreinfo componemt
  const OutsideClickDetector = (e) => {
    const clickedArea = e.target;

    if (clickedArea.classList.contains("more-info__container")) {
      closeMoreInfoComponent();
      moreInfoStateHandler();
      setMovieInfo({});
      setMovieCast({});
      unFreezeAppContainer();
      hideTrailer();
    }
  };

  const showTrailer = () => {
    document.querySelector(".more-info__image").classList.add("hidden");
    document.querySelector(".more-info__play-btns").classList.add("hidden");
  };
  const hideTrailer = () => {
    document.querySelector(".more-info__image").classList.remove("hidden");
    document.querySelector(".more-info__play-btns").classList.remove("hidden");
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

    // fetch providers
    await fetch(
      `https://api.themoviedb.org/3/${
        isTvSeriesCard ? "tv" : "movie"
      }/${movieID}/watch/providers?api_key=${
        process.env.REACT_APP_MOVIES_API_KEY
      }&append_to_response=videos`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieProviders(data.results["US"]);
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
        onClick={(e) => OutsideClickDetector(e)}
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
                opts={youTubeOpts}
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
                <BsPlayCircle onClick={() => showTrailer()} />
              </div>
            </div>

            <div className="more-info__desc">
              <h2>
                {movieInfo.title ? movieInfo.title : movieInfo.name}
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
              <div className="more-info__rating-date-and-time-info">
                <div>
                  <span className="more-info__section-title">Released: </span>
                  {movieInfo["release_date"]
                    ? movieInfo["release_date"]
                    : movieInfo["first_air_date"]}
                </div>
                <div>
                  <span className="more-info__section-title">Runtime: </span>
                  {movieInfo.runtime
                    ? runtimeConverter(movieInfo.runtime)
                    : runtimeConverter(movieInfo["episode_run_time"])}
                </div>
                <div>
                  <span className="more-info__section-title">Rating: </span>
                  {Number(movieInfo["vote_average"]).toFixed(1)}/10
                </div>
              </div>
              <div className="more-info__overwiev">{movieInfo.overview}</div>
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
              <Providers movieProviders={movieProviders} />
              <div className="mt-4 more-info__action-buttons">
                <ActionButtons movieData={movieInfo} />
              </div>
            </div>
            <BsXCircle
              className="actionButton actionButton__close"
              onClick={() => {
                moreInfoStateHandler();
                setMovieInfo({});
                setMovieCast({});
                unFreezeAppContainer();
                hideTrailer();
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
