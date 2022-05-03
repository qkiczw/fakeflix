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
let testFetch = async (title) => {
  const API_KEY = "34f2b177435f8bd71d2841363f3ca2c1";
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&query=${title}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
    })
    .catch((error) => console.log("error: ", error));
  console.log("Hello Fetch!");
};
testFetch("hulk");

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
