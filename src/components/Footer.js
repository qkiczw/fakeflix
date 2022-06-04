import React from "react";

// Bootstrap Components
import { Row, Col, Container } from "react-bootstrap";

// Assets
import TmdbLogo from "../assets/tmdb_logo.svg";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <footer className="footer">
      <Container fluid>
        <Row>
          <Col className="footer-logos">
            <img src={TmdbLogo} alt="TMDB logo" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center align-bottom">
            Fakeflix - {currentYear} || Created by Łukasz Sztormowski
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
