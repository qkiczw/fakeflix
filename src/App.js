import { Routes, Route } from "react-router-dom";

// Bootstrap components
import { Container } from "react-bootstrap";

// Pages
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";
import MyList from "./pages/MyList";
import Footer from "./components/Footer";

// Components
import Header from "./components/header/Header";

import "./App.css";

// test fetch from a themoviedb.org api
// The end part of a query "&with_genres=28" is to fetch only with genre 28 (aciot)
let testFetch = async () => {
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIES_API_KEY}&with_genres=28`
  )
    .then((response) => response.json())
    .then((data) => {
      const { results } = data;
      console.log(results);
    })
    .catch((error) => console.log("error: ", error));
};
testFetch();

function App() {
  return (
    <>
      <Container fluid className="main-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<Movies />} />
          <Route path="tvseries" element={<TvSeries />} />
          <Route path="mylist" element={<MyList />} />
        </Routes>
        <Footer />
      </Container>
    </>
  );
}

export default App;
