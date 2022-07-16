import React, { useContext } from "react";

// Bootstrap components
import { Container, Row, Col } from "react-bootstrap";

import { MoreInfoContext } from "../../App";

const MoreInfo = ({ hidden }) => {
  const moreInfoStateHandler = useContext(MoreInfoContext);
  return (
    <>
      <Container
        fluid
        className={`more-info__container ${
          hidden ? "more-info__container--hidden" : ""
        }  `}
      >
        <Row>
          <Col className="more-info__content">
            <h2>Test Field</h2>
            <div>descripition</div>
            <button onClick={moreInfoStateHandler}>
              BUTTTON TO TEST A CONTEXT API !
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MoreInfo;
