// Bootstrap components
import { Button, Container, Row, Col } from "react-bootstrap";

// Components
import Header from "./components/header/Header";

import "./App.css";

function App() {
  return (
    <>
      <Container fluid className="main-container">
        <Row>
          <Header />
        </Row>
        <Row>
          <Col>MAIN CONTENT</Col>
        </Row>
      </Container>
      <Button variant="danger">TEST</Button>
      <Button variant="success">Success</Button>
    </>
  );
}

export default App;
