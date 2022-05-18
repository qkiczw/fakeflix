import React, { useState, useEffect } from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

// Api calls helpers
import { MOVIE_GENRES } from "../apicalls/apicalls";

export function HomePage() {
  const [recentMovies, setRecentMovies] = useState([]);

  const fetchRecentMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecentMovies(recentMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
  };

  useEffect(() => {
    fetchRecentMovies();
  }, []);

  return (
    <>
      <Hero />
      {console.log(recentMovies)}
      <main>
        <MovieRow rowTitle={"Recent Movies"} recentMovies={recentMovies} />
        <MovieRow rowTitle={"Comedy"} genre={MOVIE_GENRES.comedy} />
        <MovieRow rowTitle={"Horror"} genre={MOVIE_GENRES.horror} />
        <MovieRow rowTitle={"Sci-Fi"} genre={MOVIE_GENRES["sci-fi"]} />
      </main>
    </>
  );
}

export default HomePage;
