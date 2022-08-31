import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

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

// CSS
import "./styles.scss";

// Api calls helpers
import { MOVIE_GENRES } from "./apicalls/apicalls";

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

  const searchMovie = (data) => {
    setSearchedMovieData(data);
  };

  const moreInfoStateHandler = (id, isTvSeries) => {
    setMovieInfoComponentShow(!movieInfoComponentShow);
    setMovieID(id);
    setTvSeriesCard(isTvSeries);
  };

  const fetchMovies = async () => {
    //set recentMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&append_to_response=images&language=en-US&include_image_language=null,en`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        setRecentMovies(recentMovies.concat(movies));
        setRandomMovie(movies[Math.round(Math.random() * 19)]);
      })
      .catch((error) => console.log("error: ", error));

    // set horrorMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.horror.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setHorrorMovies(horrorMovies.concat(data.results));
      })
      .catch((error) => console.log("error: ", error));
    // comedyMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.comedy.id}`
    )
      .then((response) => response.json())
      .then((data) => setComedyMovies(comedyMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // Animation Movies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.animation.id}`
    )
      .then((response) => response.json())
      .then((data) => setAnimationMovies(animationMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // Documentary Movies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.documentary.id}`
    )
      .then((response) => response.json())
      .then((data) =>
        setDocumentaryMovies(documentaryMovies.concat(data.results))
      )
      .catch((error) => console.log("error: ", error));
    // Sci-Fi Movies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.scifi.id}`
    )
      .then((response) => response.json())
      .then((data) => setscifiMovies(scifiMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    //  Tv Series - top_rated
    await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        setTopRatedTvSeries(topRatedTvSeries.concat(data.results))
      )
      .catch((error) => console.log("error: ", error));
    // Trending
    await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setTrending(trending.concat(data.results)))
      .catch((error) => console.log("error: ", error));

    // Upcoming Movies
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&language=en-US&language=en-US&page=1`
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
  }, []);

  return (
    <>
      <MoreInfoContext.Provider value={moreInfoStateHandler}>
        <Container fluid className="app__container">
          <Header trending={trending} searchMovie={searchMovie} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage
                  randomMovie={randomMovie}
                  recentMovies={recentMovies}
                  horrorMovies={horrorMovies}
                  comedyMovies={comedyMovies}
                  animationMovies={animationMovies}
                  documentaryMovies={documentaryMovies}
                  scifiMovies={scifiMovies}
                  topRatedTvSeries={topRatedTvSeries}
                />
              }
            />
            <Route path="movies" element={<Movies movies={filteredMovies} />} />
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
        />
      </MoreInfoContext.Provider>
    </>
  );
}

export default App;
