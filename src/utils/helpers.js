export const genresIDtoNames = (item) => {
  switch (item) {
    case 28:
      return "Action";

    case 12:
      return "Adventure";

    case 16:
      return "Animation";

    case 35:
      return "Comedy";

    case 80:
      return "Crime";

    case 99:
      return "Documentation";

    case 18:
      return "Drama";

    case 10751:
      return "Family";
    case 36:
      return "History";
    case 14:
      return "Fantasy";
    case 27:
      return "Horror";

    case 10402:
      return "Music";

    case 9648:
      return "Mystery";

    case 10749:
      return "Romance";

    case 878:
      return "Sci-Fi";

    case 10770:
      return "Tv-Movie";

    case 53:
      return "Thriller";

    case 10752:
      return "War";

    case 37:
      return "Western";

    default:
      return "Unknown";
  }
};

export const freezeAppContainer = () => {
  document.querySelector(".app__container").classList.add("frozen");
  document.querySelector(".more-info__container").style.top = `150px`;
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
