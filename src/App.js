import React, { useState, useEffect } from "react";
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

import "./App.css";

function App() {
  const [movies, getMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=28`
    )
      .then((response) => response.json())
      .then((data) => getMovies(movies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
  }, []);

  return (
    <>
      <Container fluid className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage movies={movies} />} />
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
