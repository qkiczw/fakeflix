import React from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

export function HomePage({
  randomMovie,
  recentMovies,
  horrorMovies,
  comedyMovies,
}) {
  return (
    <>
      <Hero randomMovie={randomMovie} />
      <main className="main-movies-content">
        <MovieRow rowTitle={"Recent"} movies={recentMovies} />
        <MovieRow rowTitle={"Horror"} movies={horrorMovies} />
        <MovieRow rowTitle={"Comedy"} movies={comedyMovies} />
      </main>
    </>
  );
}

export default HomePage;
