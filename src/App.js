// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

// Pages
import HomePage from "./pages/HomePage";

// Components
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <>
      <Container fluid className="main-container">
        <Row>
          <Header />
          <HomePage />
        </Row>
      </Container>
    </>
  );
}

export default App;
