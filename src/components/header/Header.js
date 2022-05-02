import React from "react";

// Bootstrap Components
import { Container, Row, Col } from "react-bootstrap";

// Assest
import logo from "../../assets/logo.png";

// Icons
import { BsFillBellFill, BsFillPersonFill, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <Container className="header">
        <Row>
          <Col xs={12} md={1}>
            <img src={logo} alt="Fakeflix logo" className="brand-logo" />
          </Col>
          <Col md={10} className="navigation">
            HOME, MY LIST, MOVIES, SERIES, ETC.
          </Col>
          <Col md={1} className="user-header-icons">
            <BsSearch />
            <BsFillBellFill />
            <BsFillPersonFill />
          </Col>
        </Row>
      </Container>
    </>
  );
};

// ToDo
// - red logo
// - icons (user, bell, search)
export default Header;
