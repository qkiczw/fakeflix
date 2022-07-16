import React from "react";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

const MoreInfo = ({ hidden }) => {
  return (
    <>
      <Container
        fluid
        className={`more-info__container ${
          hidden ? "more-info__container--hidden" : ""
        }  `}
      >
        <Row>
          <Col className="more-info__content">TEST FIELD</Col>
        </Row>
      </Container>
    </>
  );
};

export default MoreInfo;
