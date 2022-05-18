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

function App() {
  return (
    <>
      <Container fluid className="main-container">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
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
