import React from "react";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

function Footer() {
  return (
    <>
      <Row>
        <Col className="text-center align-bottom">
          Fakeflix - {currentYear} || Created by Łukasz Sztormowski
        </Col>
      </Row>
    </>
  );
}

export default Footer;
