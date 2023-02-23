import React from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from 'prop-types'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 

const Header = ({ onSignOut }) => {

  const handleLogOut = (e) => {
    e.preventDefault();
    onSignOut()
  }

  return(
    <React.Fragment>
      <Navbar className="justify-content-center">
      <Navbar.Brand>
        Poll
      </Navbar.Brand>
      <Nav>
          <Nav.Link as="li">
            <Link to="/build">Build</Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/take">Take</Link>
          </Nav.Link>
          <Nav.Link as="li">
            <Link to="/login">Login / Register</Link>
          </Nav.Link>
          <Nav.Link onClick={handleLogOut}>
            Logout
          </Nav.Link>
      </Nav>

      </Navbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onSignOut: PropTypes.func
}

export default Header;