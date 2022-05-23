import React from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

export function HomePage({ recentMovies, horrorMovies, comedyMovies }) {
  return (
    <>
      {/* <Hero /> */}
      <main className="main-movies-content">
        <MovieRow rowTitle={"Recent"} movies={recentMovies} />
        <MovieRow rowTitle={"Horror"} movies={horrorMovies} />
        <MovieRow rowTitle={"Comedy"} movies={comedyMovies} />
      </main>
    </>
  );
}

export default HomePage;
