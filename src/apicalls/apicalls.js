import axios from 'axios';

const MOVIE_GENRES = {
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

const TV_GENRES = {
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

// Axios test field

export const getMoviesByGenre = (genre) => {
  const fetchURL = `https://api.themoviedb.org/3/`;
  axios.get(`${fetchURL}discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=${genre}`)
  .then( response => {
    console.log(response.data);
    
  })
  .catch( error => console.log(error))
};
getMoviesByGenre(MOVIE_GENRES.horror.id);

export { MOVIE_GENRES, TV_GENRES };



