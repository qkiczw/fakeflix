import React, { useState, useContext } from "react";

// ContexAPI
import { MoreInfoContext } from "../../App";

// BootstrapComponents
import { Container, Col } from "react-bootstrap";

// Icons
import { BsFillBellFill } from "react-icons/bs";

// Assets
import genericThumb from "../../assets/genericThumb.jpg";

// helper
import { freezeAppContainer } from "../../utils/helpers";

const Notifications = ({ upcoming }) => {
  const [showAlerts, setAlertsVisibility] = useState(false);
  const moreInfoStateHandler = useContext(MoreInfoContext);

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
          {upcoming.map((movie) => (
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
                  onClick={() => {
                    moreInfoStateHandler(movie.id, false);
                    freezeAppContainer();
                  }}
                />
              </div>
              <div className="notification-desc">
                <p
                  className="notification-title"
                  onClick={() => {
                    moreInfoStateHandler(movie.id, false);
                    freezeAppContainer();
                  }}
                >
                  <strong>{movie.title ? movie.title : movie.name}</strong>
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
