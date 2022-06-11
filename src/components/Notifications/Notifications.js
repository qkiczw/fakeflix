import React from "react";

// BootstrapComponents
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { BsFillBellFill } from "react-icons/bs";

const Notifications = () => {
  return (
    <div className="notification-container">
      <BsFillBellFill className="user-icon" />
      <span className="notification-alert">1</span>
    </div>
  );
};

export default Notifications;
