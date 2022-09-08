import React, { useContext } from "react";

import { MoreInfoContext } from "../../App";

// Bootstrap Components
import { Col, Row, Button } from "react-bootstrap";

// Utils
import { freezeAppContainer } from "../../utils/helpers";

// Icons
import { BsInfoCircle } from "react-icons/bs";

const Hero = ({ randomMovie }) => {
  const { title, overview, backdrop_path, id } = randomMovie;
  const moreInfoStateHandler = useContext(MoreInfoContext);

  return (
    <Row>
      <Col xs={12}>
        <div className="hero">
          <img
            className="hero__background"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={title}
          />
          <div className="hero__description">
            <h2 className="hero__title">{title ? title : ""}</h2>
            <p className="hero__overview">{overview ? overview : ""}</p>
            <div className="hero__btns">
              <Button
                onClick={() => {
                  freezeAppContainer();
                  moreInfoStateHandler(id);
                }}
                variant="light"
                size="lg"
                className="hero__btn"
              >
                <BsInfoCircle />
                More Info
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Hero;
