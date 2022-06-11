import React, { useState } from "react";

// BootstrapComponents
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { BsFillBellFill } from "react-icons/bs";

const Notifications = () => {
  const [hideAlerts, setAlertsVisibility] = useState(false);

  return (
    <div className="notification-container">
      <div className="user-icon alert-button">
        <BsFillBellFill onClick={() => setAlertsVisibility(!hideAlerts)} />
        <span className="notification-alert">1</span>
      </div>
      <Container fluid>
        <Row className={`alerts-container ${hideAlerts ? "" : "hidden"}`}>
          <Col className="notification">ALERT 01</Col>
          <Col className="notification">ALERT 02</Col>
          <Col className="notification">ALERT 02</Col>
          <Col className="notification">ALERT 03</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Notifications;
