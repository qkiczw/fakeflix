import React, { useState, useEffect } from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

// Api calls helpers
import { MOVIE_GENRES } from "../apicalls/apicalls";

export function HomePage() {
  const [recentMovies, setRecentMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);

  const fetchRecentMovies = async () => {
    // set recentMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecentMovies(recentMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // set horrorMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=27`
    )
      .then((response) => response.json())
      .then((data) => setHorrorMovies(horrorMovies.concat(data.results)))
      .catch((error) => console.log("error: ", error));
    // set comedyMovies
    await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=35`
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
      <Hero />
      {/* {testfield} */}
      {console.log("RecentMovies: ", recentMovies)}
      {console.log("HorrorMovies: ", horrorMovies)}
      {console.log("ComedyMovies: ", comedyMovies)}
      {/* {testfields end } */}
      <main>
        <MovieRow rowTitle={"Recent Movies"} movies={recentMovies} />
        <MovieRow rowTitle={"Comedy Movies"} movies={comedyMovies} />
        <MovieRow rowTitle={"Comedy Movies"} movies={horrorMovies} />
        {/* <MovieRow rowTitle={"Comedy"} genre={MOVIE_GENRES.comedy} />
        <MovieRow rowTitle={"Horror"} genre={MOVIE_GENRES.horror} />
        <MovieRow rowTitle={"Sci-Fi"} genre={MOVIE_GENRES["sci-fi"]} /> */}
      </main>
    </>
  );
}

export default HomePage;
