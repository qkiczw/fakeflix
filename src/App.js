import { Routes, Route } from "react-router-dom";

// Bootstrap components
import { Container, Row } from "react-bootstrap";

// Pages
import HomePage from "./pages/HomePage";

// Components
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <>
      <Container fluid className="main-container">
        <Header />
        <HomePage />
      </Container>
    </>
  );
}

export default App;
