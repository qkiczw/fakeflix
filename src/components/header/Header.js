import React from "react";
import { NavLink } from "react-router-dom";

// Components
import SearchComponent from "../SearchComponent/searchComponent";
import Notifications from "../Notifications/Notifications";

// Bootstrap Components
import { Col, Navbar, Container, Nav } from "react-bootstrap";

// Assest
import logo from "../../assets/logo.png";

// Icons
import { BsFillBellFill, BsFillPersonFill, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar className="main-nav " variant="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={logo} alt="Fakeflix logo" className="brand-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav-menu me-auto">
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
                <Col className="user-icons">
                  <SearchComponent className="user-icon" />
                  <Notifications />
                  <BsFillPersonFill className="user-icon" />
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
