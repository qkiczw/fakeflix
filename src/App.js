import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

// Bootstrap components
import { Container } from "react-bootstrap";

// Pages
import HomePage from "./pages/HomePage";
import Movies from "./pages/MoviesPage";
import TvSeries from "./pages/TvSeriesPage";
import MyList from "./pages/MyListPage";
import Search from "./pages/SearchPage";
import Footer from "./components/Footer/Footer";

// Components
import Header from "./components/Header/Header";
import MoreInfo from "./components/MoreInfo/MoreInfo";

// Utils
import { unFreezeAppContainer } from "./utils/helpers";

// CSS
import "./styles.scss";

// Api calls helpers
import { MOVIE_GENRES } from "./utils/helpers";

// Context
import { AllMoviesContext } from "./utils/pageContexts";
export const MoreInfoContext = React.createContext();

function App() {
  const [recentMovies, setRecentMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [animationMovies, setAnimationMovies] = useState([]);
  const [documentaryMovies, setDocumentaryMovies] = useState([]);
  const [scifiMovies, setscifiMovies] = useState([]);
  const [topRatedTvSeries, setTopRatedTvSeries] = useState([]);
  const [randomMovie, setRandomMovie] = useState({});
  const [trending, setTrending] = useState([]);
  const [movieInfoComponentShow, setMovieInfoComponentShow] = useState(true);
  const [movieID, setMovieID] = useState(1);
  const [isTvSeriesCard, setTvSeriesCard] = useState(true);
  const [searchedMovieData, setSearchedMovieData] = useState("");
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [allMovies, setMovieTest] = useState([]);

  // test
  const getMoviesByGenreFromApi = (genre) => {
    const fetchURL = `https://api.themoviedb.org/3/`;
    axios
      .get(
        `${fetchURL}discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${genre}`
      )
      .then((response) => {
        setMovieTest(
          (allMovies) => new Set([...allMovies, ...response.data.results])
        );
      })
      .catch((error) => console.log(error));
  };
  // test

  const searchMovie = (data) => {
    setSearchedMovieData(data);
  };

  const moreInfoStateHandler = (id, isTvSeries) => {
    setMovieInfoComponentShow(!movieInfoComponentShow);
    setMovieID(id);
    setTvSeriesCard(isTvSeries);
  };

  const closeMoreInfoComponent = () => {
    setMovieInfoComponentShow(true);
    unFreezeAppContainer();
  };

  const closeNotificationsMenu = (e) => {
    // console.log(e.target);
    // set default state (false) via props to notifications component when user
    // clicks on the outside area of notifications container
  };

  const getMoviesFromAPI = async () => {
    getMoviesByGenreFromApi(MOVIE_GENRES.action.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.animation.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.comedy.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.documentary.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.drama.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.family.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.history.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.horror.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.music.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.mystery.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.romance.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.scifi.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.western.id);
    getMoviesByGenreFromApi(MOVIE_GENRES.war.id);
    getMoviesByGenreFromApi(MOVIE_GENRES["tv-movie"].id);
  };

  const fetchMovies = async () => {
    const fetchURL = `https://api.themoviedb.org/3`;
    //set recentMovies
    await fetch(
      `${fetchURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&append_to_response=images&language=en-US&include_image_language=null,en`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        setRecentMovies(recentMovies.concat(movies));
        setRandomMovie(movies[Math.round(Math.random() * 19)]);
      })
      .catch((error) => console.log("error: ", error));

    // set horrorMovies
    // await fetch(
    //   `${fetchURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.horror.id}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setHorrorMovies(horrorMovies.concat(data.results));
    //   })
    //   .catch((error) => console.log("error: ", error));
    // comedyMovies
    // await fetch(
    //   `${fetchURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.comedy.id}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setComedyMovies(comedyMovies.concat(data.results)))
    //   .catch((error) => console.log("error: ", error));
    // Animation Movies
    // await fetch(
    //   `${fetchURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.animation.id}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setAnimationMovies(animationMovies.concat(data.results)))
    //   .catch((error) => console.log("error: ", error));
    // Documentary Movies
    // await fetch(
    //   `${fetchURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.documentary.id}`
    // )
    //   .then((response) => response.json())
    //   .then((data) =>
    //     setDocumentaryMovies(documentaryMovies.concat(data.results))
    //   )
    //   .catch((error) => console.log("error: ", error));
    // Sci-Fi Movies
    // await fetch(
    //   `${fetchURL}/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.scifi.id}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => setscifiMovies(scifiMovies.concat(data.results)))
    //   .catch((error) => console.log("error: ", error));

    //  Tv Series - top_rated
    await fetch(
      `${fetchURL}/tv/top_rated?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        setTopRatedTvSeries(topRatedTvSeries.concat(data.results))
      )
      .catch((error) => console.log("error: ", error));
    // Trending
    await fetch(
      `${fetchURL}/trending/all/day?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setTrending(trending.concat(data.results)))
      .catch((error) => console.log("error: ", error));

    // Upcoming Movies
    await fetch(
      `${fetchURL}/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setUpcomingMovies(upcomingMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
  };

  // This function removes duplicate of movies (movies with the same id)
  const filteredMovies = [
    ...recentMovies,
    ...horrorMovies,
    ...comedyMovies,
    ...animationMovies,
    ...documentaryMovies,
    ...scifiMovies,
  ].reduce((movies, currentMovie) => {
    if (!movies.some((movie) => movie.id === currentMovie.id)) {
      movies.push(currentMovie);
    }
    return movies;
  }, []);

  useEffect(() => {
    fetchMovies();
    getMoviesFromAPI();
  }, []);

  return (
    <>
      <MoreInfoContext.Provider value={moreInfoStateHandler}>
        <AllMoviesContext.Provider value={[...allMovies]}>
          <Container
            fluid
            className="app__container"
            onClick={(e) => closeNotificationsMenu(e)}
          >
            <Header upcoming={upcomingMovies} searchMovie={searchMovie} />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <HomePage
                    randomMovie={randomMovie}
                    recentMovies={recentMovies}
                    topRatedTvSeries={topRatedTvSeries}
                  />
                }
              />
              <Route
                path="movies"
                // element={<Movies movies={filteredMovies} />}
                // TODO: Send a filtered Array of all movies
                element={<Movies movies={[...allMovies]} />}
              />
              <Route
                path="tvseries"
                element={<TvSeries topRatedTvSeries={topRatedTvSeries} />}
              />
              <Route path="mylist" element={<MyList />} />
              <Route
                path="search"
                element={
                  <Search
                    searchedMovieData={searchedMovieData}
                    allMoviesFiltered={filteredMovies}
                  />
                }
              />
            </Routes>
            <Footer />
          </Container>
          <MoreInfo
            hidden={movieInfoComponentShow}
            movieID={movieID}
            isTvSeriesCard={isTvSeriesCard}
            closeMoreInfoComponent={closeMoreInfoComponent}
          />
        </AllMoviesContext.Provider>
      </MoreInfoContext.Provider>
    </>
  );
}

export default App;
