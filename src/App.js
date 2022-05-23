import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// Bootstrap components
import { Container } from "react-bootstrap";

// Pages
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import MyList from "./pages/MyList";
import Footer from "./components/Footer";

// Components
import Header from "./components/header/Header";

// CSS
import "./App.css";

// Api calls helpers
import { MOVIE_GENRES } from "./apicalls/apicalls";

const RANDOM_MOVIE_ID = Math.round(Math.random() * 50000);
// console.log(RANDOM_MOVIE_ID);

function App() {
  const [recentMovies, setRecentMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  let [randomMovie, setRandomMovie] = useState({});
  let [allMovies, setAllMovies] = useState([]);

  const fetchRecentMovies = async () => {
    //set recentMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecentMovies(recentMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // set horrorMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.horror}`
    )
      .then((response) => response.json())
      .then((data) => setHorrorMovies(horrorMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // comedyMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.comedy}`
    )
      .then((response) => response.json())
      .then((data) => setComedyMovies(comedyMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // horror
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.horror}`
    )
      .then((response) => response.json())
      .then((data) => setAllMovies([...allMovies, ...data.results]))
      .catch((error) => console.log("error: ", error));
    //set randomMovie
    await fetch(
      `https://api.themoviedb.org/3/movie/${
        RANDOM_MOVIE_ID ? RANDOM_MOVIE_ID : 1
      }?api_key=${
        process.env.REACT_APP_MOVIES_API_KEY
      }&append_to_response=images&language=en-US&include_image_language=null,en`
    )
      .then((response) => response.json())
      .then((data) => setRandomMovie((randomMovie = { ...data })))
      .catch((error) => console.log("error: ", error));
  };

  useEffect(() => {
    fetchRecentMovies();
  }, []);

  return (
    <>
      <Container fluid className="main-container">
        <Header randomMovie={randomMovie} />
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
              />
            }
          />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="mylist" element={<MyList />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
