import React, { useState, useEffect } from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

// Api calls helpers
import { MOVIE_GENRES } from "../apicalls/apicalls";

const RANDOM_MOVIE_ID = Math.round(Math.random() * 10000);
console.log(RANDOM_MOVIE_ID);

export function HomePage() {
  const [recentMovies, setRecentMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  let [randomMovie, setRandomMovie] = useState({});

  const fetchRecentMovies = async () => {
    // set randomMovie
    await fetch(
      `https://api.themoviedb.org/3/movie/${RANDOM_MOVIE_ID}?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRandomMovie((randomMovie = { ...data })))
      .catch((error) => console.log("error: ", error));
    // set recentMovies
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
    // set comedyMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${MOVIE_GENRES.comedy}`
    )
      .then((response) => response.json())
      .then((data) => setComedyMovies(comedyMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
  };

  useEffect(() => {
    fetchRecentMovies();
  }, []);

  return (
    <>
      <Hero randomMovie={randomMovie}/>
      <main>
        <MovieRow rowTitle={"Recent Movies"} movies={recentMovies} />
        <MovieRow rowTitle={"Comedy Movies"} movies={comedyMovies} />
        <MovieRow rowTitle={"Horror Movies"} movies={horrorMovies} />
      </main>
    </>
  );
}

export default HomePage;
