import React from "react";
import { NavLink } from "react-router-dom";

// Bootstrap Components
import { Row, Col, Navbar, Container, Nav } from "react-bootstrap";

// Assest
import logo from "../../assets/logo.png";

// Icons
import { BsFillBellFill, BsFillPersonFill, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header">
        {/* <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Fakeflix logo" className="brand-logo" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavLink activeclassname="active" to="/">
                Home
              </NavLink>
              <NavLink activeclassname="active" to="/movies">
                Movies
              </NavLink>
              <NavLink activeclassname="active" to="/tvseries">
                TV Series
              </NavLink>
              <NavLink activeclassname="active" to="/mylist">
                My list
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
        <Row>
          <Col md={1} className="user-header-icons">
            <BsSearch className="user-header-icon" />
            <BsFillBellFill className="user-header-icon" />
            <BsFillPersonFill className="user-header-icon" />
          </Col>
        </Row> */}

        <Navbar variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src={logo} alt="Fakeflix logo" className="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <NavLink activeclassname="active" to="/">
                  Home
                </NavLink>
                <NavLink activeclassname="active" to="/movies">
                  Movies
                </NavLink>
                <NavLink activeclassname="active" to="/tvseries">
                  TV Series
                </NavLink>
                <NavLink activeclassname="active" to="/mylist">
                  My list
                </NavLink>
                <Col className="user-header-icons d-flex">
                  <BsSearch className="user-header-icon" />
                  <BsFillBellFill className="user-header-icon" />
                  <BsFillPersonFill className="user-header-icon" />
                </Col>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

// ToDo
// - red logo
// - icons (user, bell, search)
export default Header;
