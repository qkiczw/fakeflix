import React from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";

// Api calls helpers
import { MOVIE_GENRES } from "../apicalls/apicalls";

export function HomePage() {
  return (
    <>
      <main>
        {/* <MovieRow rowTitle={"Recent Movies"} genre="Recent Movies" /> */}
        <MovieRow rowTitle={"Comedy"} genre={MOVIE_GENRES.comedy} />
        <MovieRow rowTitle={"Horror"} genre={MOVIE_GENRES.horror} />
        <MovieRow rowTitle={"Sci-Fi"} genre={MOVIE_GENRES["sci-fi"]} />
      </main>
    </>
  );
}

export default HomePage;
