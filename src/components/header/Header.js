import React from "react";
import { NavLink } from "react-router-dom";

// Bootstrap Components
import { Row, Col } from "react-bootstrap";

// Assest
import logo from "../../assets/logo.png";

// Icons
import { BsFillBellFill, BsFillPersonFill, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header>
        <Row className="header">
          <Col xs={12} md={1}>
            <img src={logo} alt="Fakeflix logo" className="brand-logo" />
          </Col>
          <Col md={10} className="navigation">
            <nav className="main-navigation">
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
            </nav>
          </Col>
          <Col md={1} className="user-header-icons">
            <BsSearch />
            <BsFillBellFill />
            <BsFillPersonFill />
          </Col>
        </Row>
      </header>
    </>
  );
};

// ToDo
// - red logo
// - icons (user, bell, search)
export default Header;
