import React, { useState } from "react";

// BootstrapComponents
import { Container, Col } from "react-bootstrap";

// Icons
import { BsFillBellFill } from "react-icons/bs";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

const Notifications = ({ trending }) => {
  const [showAlerts, setAlertsVisibility] = useState(false);

  return (
    <div className="notification-container">
      <div
        className="user-icon alert-button"
        onClick={() => setAlertsVisibility(!showAlerts)}
      >
        <BsFillBellFill />
        <span className="notification-alert">1</span>
      </div>
      <Container onMouseEnter={() => setAlertsVisibility(true)} fluid>
        <div className={`alerts-container ${showAlerts ? "" : "hidden"}`}>
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
                <p className="notification-title">
                  {movie.title ? movie.title : movie.name}
                </p>
                <p className="notification-text">Comming Soon.</p>
              </div>
            </Col>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Notifications;
