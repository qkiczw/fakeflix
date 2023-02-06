import React, { useContext } from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

// context
import { AllMoviesContext } from "../utils/pageContexts";

// utils
import { filterMoviesByGenre } from "../utils/helpers";
import { MOVIE_GENRES, TV_GENRES } from "../apicalls/apicalls";

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

  // TODO Filtered function works, now i have to add fieltered array to every movie row componenet via props => filterMoviesByGenre(allMovies, MOVIE_GENRES.fantasy.id)

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
