import React from "react";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Assest
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={2}>
            <img src={logo} alt="Fakeflix logo" className="brand-logo" />
          </Col>
          <Col>
            <p>HOME, MY LIST, MOVIES, SERIES, ETC.</p>
          </Col>
          <Col md={2}>ICONS, USER</Col>
        </Row>
      </Container>
    </>
  );
};

// ToDo
// - red logo
// - icons (user, bell, search)
export default Header;
