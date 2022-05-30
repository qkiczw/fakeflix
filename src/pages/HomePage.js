import React from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

export function HomePage({
  randomMovie,
  recentMovies,
  horrorMovies,
  comedyMovies,
  animationMovies,
  documentaryMovies,
  scifiMovies,
}) {
  return (
    <>
      <Hero randomMovie={randomMovie} />
      <main className="main-movies-content">
        <MovieRow rowTitle={"Recent"} movies={recentMovies} />
        <MovieRow rowTitle={"Horror"} movies={horrorMovies} />
        <MovieRow rowTitle={"Sci-Fi"} movies={scifiMovies} />
        <MovieRow rowTitle={"Comedy"} movies={comedyMovies} />
        <MovieRow rowTitle={"Animation"} movies={animationMovies} />
        <MovieRow rowTitle={"Documentary"} movies={documentaryMovies} />
      </main>
    </>
  );
}

export default HomePage;
