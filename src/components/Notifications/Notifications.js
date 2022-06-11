import React, { useState } from "react";

// BootstrapComponents
import { Container, Row, Col } from "react-bootstrap";

// Icons
import { BsFillBellFill } from "react-icons/bs";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

const Notifications = ({ trending }) => {
  const [hideAlerts, setAlertsVisibility] = useState(false);

  return (
    <div className="notification-container">
      <div className="user-icon alert-button">
        <BsFillBellFill onClick={() => setAlertsVisibility(!hideAlerts)} />
        <span className="notification-alert">1</span>
      </div>
      <Container fluid>
        <div className={`alerts-container ${hideAlerts ? "" : "hidden"}`}>
          {trending.map((movie) => (
            <Col key={movie.id} xs={12} className="notification">
              <div>
                <img
                  className="notification-thumb"
                  src={
                    movie.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                      : genericThumb
                  }
                  alt={movie.title}
                />
              </div>
              <div className="notification-desc">
                <p className="notification-title">{movie.title}</p>
                <p className="notification-text">Info!!!</p>
              </div>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Notifications;
