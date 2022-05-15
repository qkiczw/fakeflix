import React from "react";

// Components
import MovieRow from "../components/MoviesRow/MoviesRow";

export function HomePage(props) {
  return (
    <>
      <main>
        <MovieRow genre="Recent Movies" />
      </main>
    </>
  );
}

export default HomePage;
