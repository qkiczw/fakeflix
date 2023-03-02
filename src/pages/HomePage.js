import React, { useContext } from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";
import Hero from "../components/Hero/Hero";

// context
import { AllMoviesContext } from "../utils/pageContexts";

// utils
import { filterMoviesByGenre, MOVIE_GENRES, TV_GENRES } from "../utils/helpers";

export function HomePage({ randomMovie, recentMovies, topRatedTvSeries }) {
  const allMovies = useContext(AllMoviesContext);

  return (
    <>
      <Hero randomMovie={randomMovie} />
      <main className="main-movies-content">
        <MovieRow rowTitle={"Recent"} movies={recentMovies} />
        <MovieRow
          rowTitle={MOVIE_GENRES.horror.name}
          movies={filterMoviesByGenre(allMovies, MOVIE_GENRES.horror.id)}
        />
        <MovieRow
          rowTitle={MOVIE_GENRES.scifi.name}
          movies={filterMoviesByGenre(allMovies, MOVIE_GENRES.scifi.id)}
        />
        <MovieRow
          rowTitle={MOVIE_GENRES.comedy.name}
          movies={filterMoviesByGenre(allMovies, MOVIE_GENRES.comedy.id)}
        />
        <MovieRow
          rowTitle={MOVIE_GENRES.animation.name}
          movies={filterMoviesByGenre(allMovies, MOVIE_GENRES.animation.id)}
        />
        <MovieRow
          rowTitle={MOVIE_GENRES.documentary.name}
          movies={filterMoviesByGenre(allMovies, MOVIE_GENRES.documentary.id)}
        />
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
