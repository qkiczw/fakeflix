import React, { useContext } from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

// context
import { AllMoviesContext } from "../utils/pageContexts";

export function HomePage({
  randomMovie,
  recentMovies,
  horrorMovies,
  comedyMovies,
  animationMovies,
  documentaryMovies,
  scifiMovies,
  topRatedTvSeries,
}) {
  const allMovies = useContext(AllMoviesContext);
  //TODO: Create a function that filter and return movies by concrete genre
  // console.log(`allMovies`, [
  //   ...new Set(
  //     allMovies
  //       .filter((movie) => movie["genre_ids"].some((id) => id === 16))
  //       .map((movie) => movie.title)
  //   ),
  // ]);

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
        <MovieRow
          rowTitle={"Tv-Series - Top Rated"}
          movies={topRatedTvSeries}
          tvSeries={true}
        />
      </main>
    </>
  );
}

export default HomePage;
