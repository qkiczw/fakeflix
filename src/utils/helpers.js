export const MOVIE_GENRES = {
  action: { id: 28, name: "Action" },
  adventure: { id: 12, name: "Adventure" },
  animation: { id: 16, name: "Animation" },
  comedy: { id: 35, name: "Comedy" },
  crime: { id: 80, name: "Crime" },
  documentary: { id: 99, name: "Documentary" },
  drama: { id: 18, name: "Drama" },
  family: { id: 10751, name: "Family" },
  fantasy: { id: 14, name: "Fantasy" },
  history: { id: 36, name: "History" },
  horror: { id: 27, name: "Horror" },
  music: { id: 10402, name: "Music" },
  mystery: { id: 9648, name: "Mystery" },
  romance: { id: 10749, name: "Romancer" },
  scifi: { id: 878, name: "Sci-Fi" },
  "tv-movie": { id: 10770, name: "TV-Movie" },
  thriller: { id: 53, name: "Thriller" },
  war: { id: 10752, name: "War" },
  western: { id: 37, name: "Western" },
};

export const TV_GENRES = {
  "action&adventure": { id: 10759, name: "Action & Adventure" },
  animation: { id: 16, name: "Animation" },
  comedy: { id: 35, name: "Comedy" },
  crime: { id: 80, name: "Crime" },
  documentary: { id: 99, name: "Documentary" },
  drama: { id: 18, name: "Drama" },
  family: { id: 10751, name: "Family" },
  kids: { id: 10762, name: "Kids" },
  mystery: { id: 9648, name: "Mystery" },
  news: { id: 10763, name: "News" },
  reality: { id: 10764, name: "Reality" },
  "sci-fi": { id: 10765, name: "Sci-Fi & Fantasy" },
  soap: { id: 10766, name: "Soap" },
  talk: { id: 10767, name: "Talk" },
  "war&politics": { id: 10768, name: "War & Politics" },
  western: { id: 37, name: "Western" },
};

// export const genresIDtoNames = (item) => {
//   switch (item) {
//     case 28:
//       return "Action";

//     case 12:
//       return "Adventure";

//     case 16:
//       return "Animation";

//     case 35:
//       return "Comedy";

//     case 80:
//       return "Crime";

//     case 99:
//       return "Documentation";

//     case 18:
//       return "Drama";

//     case 10751:
//       return "Family";
//     case 36:
//       return "History";
//     case 14:
//       return "Fantasy";
//     case 27:
//       return "Horror";

//     case 10402:
//       return "Music";

//     case 9648:
//       return "Mystery";

//     case 10749:
//       return "Romance";

//     case 878:
//       return "Sci-Fi";

//     case 10770:
//       return "Tv-Movie";

//     case 53:
//       return "Thriller";

//     case 10752:
//       return "War";

//     case 37:
//       return "Western";

//     default:
//       return "Unknown";
//   }
// };

export const freezeAppContainer = () => {
  document.querySelector(".app__container").classList.add("frozen");
};
export const unFreezeAppContainer = () => {
  document.querySelector(".app__container").classList.remove("frozen");
};

export const handleLocalStorageData = (movieData) => {
  const myMoviesList = localStorage.getItem("myMoviesList");
  if (myMoviesList === null) {
    localStorage.setItem("myMoviesList", JSON.stringify([movieData]));
  } else {
    let localStorageData = JSON.parse(myMoviesList);

    if (localStorageData.some((item) => item.id === movieData.id)) {
      const filteredData = localStorageData.filter(
        (item) => item.id !== movieData.id
      );
      localStorage.setItem("myMoviesList", JSON.stringify(filteredData));
    } else {
      localStorageData.push(movieData);
      localStorage.setItem("myMoviesList", JSON.stringify(localStorageData));
    }
  }

  return;
};

// Change title to lowerCase
export const changeTitleToLowerCase = (title) =>
  Array.from(title)
    .map((letter) => letter.toLowerCase())
    .join("");

// RunTime Converter
export const runtimeConverter = (time) => {
  const hours = time / 60;
  const hour = Math.floor(hours);
  const minutes = Math.floor((hours - hour) * 60);

  const timeWithHours = `${hour}h ${minutes}min`;
  const timeWithoutHours = `${minutes}min`;

  return hours >= 1 ? timeWithHours : timeWithoutHours;
};

export const isMovieReleased = (date) => {
  const releaseDateOfAMovie = Date.parse(date);
  const now = Date.now();

  if (releaseDateOfAMovie < now) {
    return `Released`;
  }
  if (releaseDateOfAMovie > now) {
    return `Coming soon`;
  }
};

// Filter movies by genre
export const filterMoviesByGenre = (movies, movieGenre) => {
  const moviesArrayWithoutDuplicates = movies.reduce((movies, currentMovie) => {
    if (!movies.some((movie) => movie.id === currentMovie.id)) {
      movies.push(currentMovie);
    }
    return movies;
  }, []);

  return [...new Set(moviesArrayWithoutDuplicates)].filter((movie) =>
    movie["genre_ids"].some((genre) => genre === movieGenre)
  );
};
